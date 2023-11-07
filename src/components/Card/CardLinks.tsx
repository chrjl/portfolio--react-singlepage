import LinkList, { DescribedLink } from './LinkList';

import githubMark from '../../assets/github-mark.svg';
import faFileLines from '../../assets/fa-file-lines.svg';

export interface LinksType {
  assets?: DescribedLink[];
  repo?: string[];
  documentation?: string[];
}

interface CardLinksProps {
  links: LinksType;
}

export default function CardLinks({ links }: CardLinksProps) {
  const { assets, documentation, repo } = links;

  return (
    <>
      {assets && (
        <div className="mb-8 font-content text-sm last:mb-0">
          <LinkList links={assets} />
        </div>
      )}

      {documentation && (
        <div className="text-sm">
          <LinkList
            icon={faFileLines}
            links={documentation.map((link) => ({
              description: 'Documentation',
              href: link,
            }))}
          />
        </div>
      )}

      {repo && (
        <div className="mt-2 text-xs">
          <LinkList
            icon={githubMark}
            links={repo.map((link) => ({
              description: link,
              href: link,
            }))}
          />
        </div>
      )}
    </>
  );
}
