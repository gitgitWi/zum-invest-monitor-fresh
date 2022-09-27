import { $Head } from '@/components/common/head/mod.ts';
import { Header } from '@/components/common/header/mod.ts';
import { Footer } from '@/components/common/footer/mod.ts';
import { validatorPageRoutes } from '../constants/routes.ts';

const styles = {
  body: 'w-full h-screen flex flex-col items-center',
  main: 'w-full h-full mb-10 flex flex-col items-center justify-center',
  pagesHeader:
    'pb-4 font-extrabold text-3xl align-middle text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500',
  pageLink:
    'w-56 my-2 px-1 py-2 rounded-3xl font-medium bg-transparent border-b-2 border-gray-500 text-center \
    hover:bg-blue-400 hover:text-white hover:font-bold hover:italic hover:border-blue-500 duration-100',
};

export default function Home() {
  return (
    <>
      <$Head
        title="Watch Invest ZUM"
        description="watch && validate Invest ZUM API"
      />
      <body class={styles.body}>
        <Header />
        <main class={styles.main}>
          <h2 class={styles.pagesHeader}>Validator Pages</h2>
          {validatorPageRoutes.map(({ krName, to }) => (
            <a href={to} class={styles.pageLink}>
              {krName}
            </a>
          ))}
        </main>
        <Footer />
      </body>
    </>
  );
}
