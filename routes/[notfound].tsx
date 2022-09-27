import { PageProps } from '$fresh/server.ts';
import { Header } from '@/components/common/header/mod.ts';

export default function NotFound(props: PageProps) {
  return (
    <body class="w-full flex flex-col justify-center ">
      <Header />
      <main class="w-4/5 flex flex-col justify-center items-center self-center">
        <h1 class="w-full py-12 text-4xl text-red-500 flex justify-center items-center">
          404
        </h1>
        <pre class="w-full p-8 bg-gray-100 rounded-2xl overflow-auto">
          {JSON.stringify(props, null, 2)}
        </pre>
      </main>
    </body>
  );
}
