interface SubtitleH3Props {
  title: string;
}

export function SubtitleH3({ title }: SubtitleH3Props) {
  return <h3 class="w-full text-lg font-bold select-none">{title}</h3>;
}
