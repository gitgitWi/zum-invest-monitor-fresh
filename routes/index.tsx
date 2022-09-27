import { Header } from '@/components/common/header/mod.ts';
import { Footer } from '@/components/common/footer/mod.ts';

import TreemapApiValidator from '@/islands/TreemapApiValidator.tsx';

export default function Home() {
  return (
    <>
      <Header />
      <main class="w-full h-full mb-10 flex flex-col items-center">
        <TreemapApiValidator />
      </main>
      <Footer />
    </>
  );
}
