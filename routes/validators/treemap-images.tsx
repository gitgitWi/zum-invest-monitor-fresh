import { $Head } from '@/components/common/head/mod.ts';
import { Header } from '@/components/common/header/mod.ts';

import TreemapImageValidator from '@/islands/TreemapImageValidator.tsx';

export default function TreemapImagePage() {
  return (
    <>
      <$Head
        title="TreemapImages - WIZ"
        description="watch && validate Invest ZUM API"
      />
      <Header />
      <main class="w-full h-full pb-16 flex flex-col items-center">
        <TreemapImageValidator />
      </main>
    </>
  );
}
