import { Title } from '../components/atoms/index.ts';
import ApiValidatorCard from '../islands/ApiValidatorCard.tsx';
import {
  treemapRealtimeApis,
  treemapRealtimeApisClient,
} from '../constants/apis/index.ts';
import { type Market$Kr } from '../constants/apis/common.ts';

export default function Home() {
  return (
    <>
      <header class='w-screen py-2 bg-blue-900'>
        <Title text='Watch InvestZUM' />
      </header>
      <main class='w-screen h-full flex flex-col items-center'>
        {Object.entries(treemapRealtimeApisClient).map(([market, apiUrl]) => (
          <ApiValidatorCard
            apiUrl={apiUrl}
            originApiUrl={treemapRealtimeApis[market as Market$Kr]}
            title={market}
          />
        ))}
      </main>
    </>
  );
}
