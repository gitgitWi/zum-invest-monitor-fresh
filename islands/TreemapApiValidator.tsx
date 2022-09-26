import { useState } from 'preact/hooks';

import { type SelectorOptionProps } from '../components/atoms/index.ts';
import { CategorySelector } from '../components/molecules/index.ts';
import {
  type Market$Kr,
  treemapRealtimeApis,
  treemapRealtimeApisClient,
} from '../constants/apis/index.ts';

import ApiValidatorCard from './ApiValidatorCard.tsx';

const categoryOptions: SelectorOptionProps[] = [
  {
    value: 'kospi',
    name: '코스피',
  },
  {
    value: 'kosdaq',
    name: '코스닥',
  },
];

export default function TreemapApiValidator() {
  const [treemapMarketOption, setTreemapMarketOption] = useState<SelectorOptionProps>(
    categoryOptions[0],
  );

  const selectTreemapOption = (marketName: Market$Kr) => {
    setTreemapMarketOption(
      categoryOptions.find(({ value }) => value === marketName) || categoryOptions[0],
    );
  };

  return (
    <div class='mt-4 w-full max-w-5xl flex flex-col items-start '>
      <div class='w-full flex justify-start items-center'>
        <h2 class='w-max pr-2'>증시맵 API Validator</h2>
        <CategorySelector
          options={categoryOptions}
          selectOption={selectTreemapOption}
        />
      </div>
      <ApiValidatorCard
        apiUrl={treemapRealtimeApisClient[treemapMarketOption.value as Market$Kr]}
        originApiUrl={treemapRealtimeApis[treemapMarketOption.value as Market$Kr]}
        title={treemapMarketOption.name}
      />
    </div>
  );
}
