export interface CardTittleProps {
  text: string;
}

export function CardTittle({ text }: CardTittleProps) {
  return <p class='w-max font-bold text-lg '>{text}</p>;
}
