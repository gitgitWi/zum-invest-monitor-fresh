import { $Head } from '@/components/common/head/mod.ts';
import { Header } from '@/components/common/header/mod.ts';

import TreemapApiValidator from '@/islands/TreemapApiValidator.tsx';

export default function TreemapApiPage() {
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
    </>
  );
}
