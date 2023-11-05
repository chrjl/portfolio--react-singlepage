interface CardTitleProps {
  title: string | string[];
}

export default function CardTitle({ title }: CardTitleProps) {
  // check type and build title element or fragment
  const titleFragment = Array.isArray(title) ? (
    title.map((segment, index) => (
      <span
        key={index}
        className="inline-block after:content-['_'] last:after:content-none"
      >
        {segment}
      </span>
    ))
  ) : (
    <span className="inline-block">{title}</span>
  );

  return (
    <h1 className="uppercase leading-snug [&>*]:whitespace-pre-wrap [&>*]:underline">
      {titleFragment}
    </h1>
  );
}
