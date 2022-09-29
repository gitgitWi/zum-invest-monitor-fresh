import { $Head } from '@/components/common/head/mod.ts';
import { Header } from '@/components/common/header/mod.ts';

import HomeApiValidator from '@/islands/HomeApiValidator.tsx';

export default function MainNewsPage() {
  return (
    <>
      <$Head
        title="MainNews - WIZ"
        description="watch && validate Invest ZUM API"
      />
      <Header />
      <main class="w-full h-full pb-16 flex flex-col items-center">
        <HomeApiValidator />
      </main>
    </>
  );
}
