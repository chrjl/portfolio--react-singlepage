interface CardTitleProps {
  title: string | string[];
}

export default function CardTitle({ title }: CardTitleProps) {
  // check type and build title element or fragment
  const titleFragment = Array.isArray(title) ? (
    title.map((segment, index) => (
      <span
        key={index}
        className="inline-block whitespace-pre-wrap underline after:content-['_'] last:after:content-none"
      >
        {segment}
      </span>
    ))
  ) : (
    <span className="inline-block whitespace-pre-wrap underline">{title}</span>
  );

  return (
    <>
      <div className="text-center font-semibold uppercase underline group-hover:font-bold sm:text-left">
        <h1 className="leading-snug">{titleFragment}</h1>
      </div>
    </>
  );
}
