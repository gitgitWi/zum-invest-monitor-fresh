import { $Head } from '@/components/common/head/mod.ts';
import { Header } from '@/components/common/header/mod.ts';
import { Footer } from '@/components/common/footer/mod.ts';
import { validatorPageRoutes } from '@/constants/routes.ts';

const styles = {
  body: 'w-full h-screen flex flex-col items-center',
  main: 'w-full h-auto flex flex-col items-center justify-start select-none',
  pagesHeader:
    'font-semibold text-xl align-middle text-gray-500 cursor-default',
  pageLink:
    'w-56 m-2 px-1 py-2 rounded-3xl font-medium text-center text-[#475569] border-b-2 border-grey-500 bg-gradient-to-b from-gray-50 to-gray-100 \
    hover:from-[#0891b2] hover:to-[#0891b2] hover:opacity-75 hover:text-white hover:font-bold hover:border-[#164e63] duration-75 focus:border-none',
};

export default function Home() {
  return (
    <>
      <$Head
        title="Watch Invest ZUM"
        description="watch && validate Invest ZUM API"
      />
      <body class={styles.body}>
        <h1 class="w-full h-1/3 mb-2 flex justify-center items-end font-extrabold text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
          Watch Invest Zum
        </h1>
        <main class={styles.main}>
          <h2 class={styles.pagesHeader}>Validator Pages</h2>
          <div class="w-full pt-4 flex flex-col justify-center items-center ">
            {validatorPageRoutes.map(({ krName, to }) => (
              <a href={to} class={styles.pageLink}>
                {krName}
              </a>
            ))}
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
}
