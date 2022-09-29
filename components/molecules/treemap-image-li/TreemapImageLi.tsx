interface ImageLiProps {
  title: string;
  imgSrc: string;
}

const styles = {
  li: 'w-full my-2 p-4 rounded-xl flex flex-col bg-gray-100 hover:bg-gray-200',
  title: 'font-bold select-none',
  url: 'w-full flex items-baseline text-xs my-2 truncate',
  anchor:
    'inline-block w-4/5 mx-1 font-italic font-mono text-underline truncate \
    hover:text-blue-700 hover:font-semibold duration-100',
  image: 'w-full max-h-96 object-contain',
};

export function ImageLi({ title, imgSrc }: ImageLiProps) {
  return (
    <li class={styles.li}>
      <p class={styles.title}>{title}</p>
      <p class={styles.url}>
        url:{' '}
        <a href={imgSrc} target="_blank" class={styles.anchor}>
          {imgSrc}
        </a>
      </p>
      <img src={imgSrc} alt="" class={styles.image} loading="lazy" />
    </li>
  );
}
