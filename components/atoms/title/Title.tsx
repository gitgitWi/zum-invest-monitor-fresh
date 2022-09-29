interface TitleProps {
  text: string;
  href: string;
}

export function Title({ text, href }: TitleProps) {
  return (
    <h1 class="w-full h-full px-3 py-0 text-base text-transparent font-extrabold text-center select-none bg-clip-text bg-gradient-to-br from-blue-600 to-green-500">
      <a class="select-none" href={href}>
        {text}
      </a>
    </h1>
  );
}
