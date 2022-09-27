import { $Head } from '@/components/common/head/mod.ts';
import { Header } from '@/components/common/header/mod.ts';
import { Footer } from '@/components/common/footer/mod.ts';
import { validatorPageRoutes } from '../constants/routes.ts';

export default function Home() {
  return (
    <>
      <$Head
        title="Watch Invest ZUM"
        description="watch && validate Invest ZUM API"
      />
      <body class="w-full h-screen flex flex-col items-center">
        <Header />
        <main class="w-full h-full mb-10 flex flex-col items-center justify-center">
          <h2 className="pb-4 font-extrabold text-3xl align-middle text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 ">
            Validator Pages
          </h2>
          {validatorPageRoutes.map(({ name, to }) => (
            <button class="w-1/3 my-2 p-2 border-2 border-blue-500 rounded-3xl font-medium hover:bg-blue-400 hover:text-white hover:font-extrabold duration-100 ">
              <a href={to}>{name}</a>
            </button>
          ))}
        </main>
        <Footer />
      </body>
    </>
  );
}
