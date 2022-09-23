import { useState } from 'preact/hooks';

import { CardTittle } from '../components/atoms/index.ts';
import { CardCode } from '../components/molecules/index.ts';

import RefreshButton from './RefreshButton.tsx';

interface ApiValidatorCardProps {
  apiUrl: string;
  originApiUrl: string;
  title: string;
}

export default function ApiValidatorCard(
  { apiUrl, originApiUrl, title }: ApiValidatorCardProps,
) {
  const [code, setCode] = useState('');
  const onRefreshButtonClick = () => {
    fetch(apiUrl).then((res) => res.json()).then((res) => setCode(res));
  };

  return (
    <article class='w-4/5 place-self-center flex flex-col items-center'>
      <div class='w-full flex justify-start items-center '>
        <CardTittle text={title.toUpperCase()} />
        <a class='px-2 text-base font-italic hover:text-underline' href={originApiUrl}>
          {originApiUrl}
        </a>
        <RefreshButton buttonClickHandler={onRefreshButtonClick} />
      </div>
      <CardCode text={code} />
    </article>
  );
}
