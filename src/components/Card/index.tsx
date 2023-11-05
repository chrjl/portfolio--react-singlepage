import CardTitle from './CardTitle';

interface CardProps {
  title: string | string[];
}

export default function Card(props: CardProps) {
  const { title } = props;

  return (
    <div className="group h-full border-2 border-solid border-black p-4 text-lg hover:bg-gray-200">
      <CardTitle title={title} />
    </div>
  );
}
