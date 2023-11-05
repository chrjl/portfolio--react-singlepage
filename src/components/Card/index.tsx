import CardTitle from './CardTitle';
import CardKeywords from './CardKeywords';

interface CardProps {
  title: string | string[];
  keywords?: string[];
}

export default function Card(props: CardProps) {
  const { title, keywords } = props;

  return (
    <div className="group h-full border-2 border-solid border-black p-4 text-lg hover:bg-gray-200">
      <div className="group text-center font-semibold group-hover:font-bold sm:text-left">
        <CardTitle title={title} />
        {keywords && <CardKeywords keywords={keywords} />}
      </div>
    </div>
  );
}
