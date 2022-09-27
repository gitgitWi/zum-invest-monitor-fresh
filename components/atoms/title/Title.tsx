interface TitleProps {
  text: string;
  href: string;
}

export function Title({ text, href }: TitleProps) {
  return (
    <h1 class="w-full text-4xl text-white font-bold text-center">
      <a class="" href={href}>
        {text}
      </a>
    </h1>
  );
}
