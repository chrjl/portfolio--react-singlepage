import { sanitize } from 'isomorphic-dompurify';
import parse from 'html-react-parser';

import { Markdown } from '../../../.contentlayer/generated/types';

import CardTitle from './CardTitle';
import CardKeywords from './CardKeywords';
import CardLinks, { LinksType } from './CardLinks';

interface CardProps {
  title: string | string[];
  keywords?: string[];
  links?: LinksType;
  description?: Markdown;
}

export default function Card(props: CardProps) {
  const { title, keywords, description, links } = props;

  return (
    <div className="group h-full border-2 border-solid border-black p-4 text-lg hover:bg-gray-200">
      <div className="group text-center font-semibold group-hover:font-bold sm:text-left">
        <CardTitle title={title} />
        {keywords && <CardKeywords keywords={keywords} />}
      </div>

      {description && (
        <div className="content mt-8 text-sm">
          {parse(sanitize(description.html))}
        </div>
      )}

      {links && (
        <div className="mt-8 group-hover:font-bold">
          <CardLinks links={links} />
        </div>
      )}
    </div>
  );
}
