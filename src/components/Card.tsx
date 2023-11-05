interface CardProps {
  title: string | string[];
}

export default function Card({ title }: CardProps) {
  return (
    <>{title.join(' ')}</>
  )
}
