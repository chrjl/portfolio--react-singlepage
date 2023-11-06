import CardTitle from './CardTitle';
import CardKeywords from './CardKeywords';
import LinkList, { DescribedLink } from './LinkList';

import githubMark from '../../assets/github-mark.svg';

interface CardProps {
  title: string | string[];
  keywords?: string[];
  links?: {
    assets?: DescribedLink[];
    repo?: string[];
  };
}

export default function Card(props: CardProps) {
  const { title, keywords, links } = props;

  return (
    <div className="group h-full border-2 border-solid border-black p-4 text-lg hover:bg-gray-200">
      <div className="group text-center font-semibold group-hover:font-bold sm:text-left">
        <CardTitle title={title} />
        {keywords && <CardKeywords keywords={keywords} />}
      </div>

      {links && (
        <div className="mt-8 group-hover:font-bold">
          {links.assets && (
            <div className="mb-8 font-content text-sm last:mb-0">
              <LinkList links={links.assets} />
            </div>
          )}

          {links.repo && (
            <div className="mt-2 text-xs">
              <LinkList
                icon={githubMark}
                links={links.repo.map((link) => ({
                  description: link,
                  href: link,
                }))}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
