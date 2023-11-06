export interface DescribedLink {
  description: string;
  href: string;
}

interface LinksProps {
  links: DescribedLink[];
}

function Links({ links }: LinksProps) {
  return (
    <ul>
      {links.map(({ description, href }, index) => (
        <li key={index}>
          <a href={href} target="_blank">
            {description}
          </a>
        </li>
      ))}
    </ul>
  );
}

interface LinkListProps extends LinksProps {
  icon?: string; // SVG
}

export default function LinkList({ icon, links }: LinkListProps) {
  if (!icon) {
    return <Links links={links} />;
  }

  return (
    <div className="flex flex-row items-center">
      <img className="inline-block h-4 w-4" src={icon} />
      <div className="ml-2">
        <Links links={links} />
      </div>
    </div>
  );
}
