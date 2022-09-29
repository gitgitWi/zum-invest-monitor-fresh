interface SubtitleH3Props {
  title: string;
}

export function SubtitleH2({ title }: SubtitleH3Props) {
  return (
    <h2 class="w-full pr-2 font-bold text-2xl text-gray-700 select-none">
      {title}
    </h2>
  );
}
