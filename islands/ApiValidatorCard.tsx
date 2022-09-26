import { useState } from 'preact/hooks';

import { CardCode } from '../components/molecules/index.ts';

import RefreshButton from './RefreshButton.tsx';

interface ApiValidatorCardProps {
  apiUrl: string;
  originApiUrl: string;
  title: string;
}

export default function ApiValidatorCard(
  { apiUrl, originApiUrl }: ApiValidatorCardProps,
) {
  const [code, setCode] = useState('');
  const onRefreshButtonClick = () => {
    setCode('');
    fetch(apiUrl).then((res) => res.json()).then((res) => setCode(res));
  };

  return (
    <article class='w-full place-self-center flex flex-col items-center'>
      <div class='w-full pb-2 flex justify-start items-center'>
        <a
          class='pr-2 text-base font-italic hover:text-underline'
          href={originApiUrl}
        >
          {originApiUrl}
        </a>
        <RefreshButton buttonClickHandler={onRefreshButtonClick} />
      </div>
      <CardCode text={code} />
    </article>
  );
}
