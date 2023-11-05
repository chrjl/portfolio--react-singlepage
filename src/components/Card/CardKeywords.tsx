interface CardKeywordsProps {
  keywords: string[];
}

export default function CardKeywords({ keywords }: CardKeywordsProps) {
  return (
    <ul className="mt-3 text-xs">
      {keywords.map((keyword) => (
        <li key={keyword} className="mr-3 inline-block uppercase last:mr-0">
          {keyword}
        </li>
      ))}
    </ul>
  );
}
