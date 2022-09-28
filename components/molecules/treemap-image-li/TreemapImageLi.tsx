interface TreemapImageProps {
  title: string;
  imgSrc: string;
}

const styles = {
  li: 'my-2 p-4 rounded-xl flex flex-col bg-gray-100',
  title: 'font-bold select-none',
  url: 'text-xs whitespace-pre-wrap my-2',
  anchor:
    'font-italic font-mono text-underline \
    hover:text-blue-700 hover:font-semibold duration-100',
};

export function TreemapImageLi({ title, imgSrc }: TreemapImageProps) {
  return (
    <li class={styles.li}>
      <p class={styles.title}>{title}</p>
      <p class={styles.url}>
        url:{' '}
        <a href={imgSrc} target="_blank" class={styles.anchor}>
          {imgSrc}
        </a>
      </p>
      <img src={imgSrc} alt="" />
    </li>
  );
}
