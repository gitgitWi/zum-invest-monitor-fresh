interface SubtitleH3Props {
  title: string;
  classNames?: string;
}

const defaultH3Styles =
  'w-full font-bold select-none text-gray-700 whitespace-pre';

export function SubtitleH3({ title, classNames = '' }: SubtitleH3Props) {
  return <h3 class={[defaultH3Styles, classNames].join(' ')}>{title}</h3>;
}
