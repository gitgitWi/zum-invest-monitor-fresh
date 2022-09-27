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
    'w-56 m-2 px-1 py-2 rounded-3xl font-medium text-center border-b-2 border-grey-500 bg-gradient-to-r from-gray-50 to-gray-50 \
    hover:from-green-300 hover:to-blue-300 hover:text-white hover:font-bold hover:italic hover:border-blue-500 duration-100',
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
