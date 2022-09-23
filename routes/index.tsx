import { Title } from '../components/atoms/index.ts';
import RefreshButton from '../islands/RefreshButton.tsx';
import { treemapRealtimeApis } from '../constants/apis/index.ts';

export default function Home() {
  return (
    <>
      <header class='w-screen py-2 bg-blue-900'>
        <Title text='Watch InvestZUM' />
      </header>
      <main class='w-screen h-full flex flex-col'>
        <RefreshButton apiUrl={treemapRealtimeApis.kospi} />
      </main>
    </>
  );
}
