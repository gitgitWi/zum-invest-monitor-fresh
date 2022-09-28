interface TreemapImageProps {
  title: string;
  imgSrc: string;
}

export function TreemapImageLi({ title, imgSrc }: TreemapImageProps) {
  return (
    <li class="flex flex-col">
      <p class="">{title}</p>
      <p class="">
        url: <u class="">{imgSrc}</u>
      </p>
      <img src={imgSrc} alt="" />
    </li>
  );
}
