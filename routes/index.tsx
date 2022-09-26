import { Title } from '../components/atoms/index.ts';

import TreemapApiValidator from '../islands/TreemapApiValidator.tsx';

export default function Home() {
  return (
    <>
      <header class='w-screen py-2 bg-blue-900'>
        <Title text='Watch InvestZUM' />
      </header>
      <main class='w-screen h-full flex flex-col items-center'>
        <TreemapApiValidator />
      </main>
    </>
  );
}
