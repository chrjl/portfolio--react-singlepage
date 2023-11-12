import LinkList, { DescribedLink } from './LinkList';

import githubMark from '../../assets/github-mark.svg';
import * as HeroIcons from '@heroicons/react/24/outline';

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
          {assets.map((asset, index) => (
            <LinkList
              key={index}
              icon={
                asset.icon && asset.icon in HeroIcons ? (
                  <HeroIcon icon={asset.icon} />
                ) : (
                  <HeroIcons.LinkIcon />
                )
              }
              links={[asset]}
            />
          ))}
        </div>
      )}

      {documentation && (
        <div className="text-sm">
          <LinkList
            icon={<HeroIcons.DocumentTextIcon />}
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
            icon={<img src={githubMark} />}
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

interface HeroIconProps {
  icon: string;
}

function HeroIcon({ icon }: HeroIconProps) {
  const Icon = HeroIcons[icon as keyof typeof HeroIcons];
  return <Icon />;
}
