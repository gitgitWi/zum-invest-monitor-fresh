import { Title } from '@/components/atoms/index.ts';
import { Footer } from '@/components/common/footer/mod.ts';

import TreemapApiValidator from '@/islands/TreemapApiValidator.tsx';

export default function Home() {
  return (
    <>
      <header class="w-full py-2 bg-blue-900">
        <Title text="Watch InvestZUM" />
      </header>
      <main class="w-full h-full flex flex-col items-center">
        <TreemapApiValidator />
      </main>
      <Footer />
    </>
  );
}
