interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return <h1 class='w-full text-4xl text-white font-bold text-center'>{text}</h1>;
}
