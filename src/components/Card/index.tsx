import { sanitize } from 'isomorphic-dompurify';
import parse from 'html-react-parser';

import { DocumentModel } from '../../models';

import CardTitle from './CardTitle';
import CardKeywords from './CardKeywords';
import CardLinks from './CardLinks';

export default function Card(props: DocumentModel) {
  const { title, keywords, description, links, status } = props;

  return (
    <div className="group h-full border-2 border-solid border-black p-4 text-lg hover:bg-gray-200">
      <div className="group text-center font-semibold group-hover:font-bold sm:text-left">
        <CardTitle title={title} />
        {keywords && <CardKeywords keywords={keywords} />}
      </div>

      {description && (
        <div className="content mt-8 text-sm">
          {status && (
            <>
              <div className="text-[0.95em] italic leading-tight">
                {parse(sanitize(status.html))}
              </div>
              <hr />
            </>
          )}
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
