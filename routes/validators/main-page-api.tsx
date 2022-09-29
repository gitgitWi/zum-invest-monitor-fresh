import { $Head } from '@/components/common/head/mod.ts';
import { Header } from '@/components/common/header/mod.ts';
import { Footer } from '@/components/common/footer/mod.ts';

import MainNewsApiValidator from '@/islands/MainNewsApiValidator.tsx';

export default function MainNewsPage() {
  return (
    <>
      <$Head
        title="MainNews - WIZ"
        description="watch && validate Invest ZUM API"
      />
      <Header />
      <main class="w-full h-full pb-16 flex flex-col items-center">
        <MainNewsApiValidator />
      </main>
      <Footer />
    </>
  );
}
