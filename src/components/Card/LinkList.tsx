export interface DescribedLink {
  description: string;
  href: string;
  icon?: string;
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
  icon?: React.ReactNode;
}

export default function LinkList({ icon, links }: LinkListProps) {
  if (!icon) {
    return <Links links={links} />;
  }

  return (
    <div className="flex flex-row items-center">
      <div className="w-8 [&>*]:m-auto [&>*]:h-[1.25em] [&>*]:stroke-2">
        {icon}
      </div>
      <div className="ml-0">
        <Links links={links} />
      </div>
    </div>
  );
}
