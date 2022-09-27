import { Head } from '$fresh/runtime.ts';

export interface HeadProps {
  title: string;
  description?: string;
}

export function $Head({ title, description }: HeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
    </Head>
  );
}
