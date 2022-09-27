import { $Head } from '@/components/common/head/mod.ts';
import { Header } from '@/components/common/header/mod.ts';
import { Footer } from '@/components/common/footer/mod.ts';

import TreemapApiValidator from '@/islands/TreemapApiValidator.tsx';

export default function TreemapPage() {
  return (
    <>
      <$Head
        title="TreemapAPI - WIZ"
        description="watch && validate Invest ZUM API"
      />
      <Header />
      <main class="w-full h-full mb-10 flex flex-col items-center">
        <TreemapApiValidator />
      </main>
      <Footer />
    </>
  );
}
