interface ApiLinkProps {
  link: string;
  text?: string;
  classNames?: string;
}

const defaultStyles =
  'inline-block w-4/5 pr-2 text-base font-italic font-mono text-sm sm:text-base text-underline text-indigo-900 truncate';

export function ApiLink({ link, text = link, classNames = '' }: ApiLinkProps) {
  return (
    <a
      class={[defaultStyles, classNames].join(' ')}
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
}
