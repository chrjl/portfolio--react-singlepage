export interface DescribedLink {
  description: string;
  href: string;
}

interface LinkListProps {
  links: DescribedLink[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <ul>
      {links.map(({ description, href }, index) => (
        <li key={index} className="mt-1">
          <a href={href} target="_blank">
            {description}
          </a>
        </li>
      ))}
    </ul>
  );
}
