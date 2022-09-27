import { useEffect, useState } from 'preact/hooks';

import type { ValidatorResult } from '@/types/validator/mod.ts';

import {
  type Market$Kr,
  treemapRealtimeApis,
  treemapRealtimeApisClient,
} from '@/constants/apis/mod.ts';
import { type SelectorOptionProps } from '@/components/atoms/mod.ts';
import {
  CardCode,
  CategorySelector,
  ValidatorCard,
} from '@/components/molecules/index.ts';

import {
  getSectorsNumber,
  getStocksHaveInvalidProp,
  getStocksNumber,
} from '@/utils/validators/treemap/mod.ts';

import RefreshButton from './RefreshButton.tsx';

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
  const [treemapMarketOption, setTreemapMarketOption] =
    useState<SelectorOptionProps>(categoryOptions[0]);
  const [apiData, setApiData] = useState<
    Record<string, unknown> | unknown[] | ''
  >('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [validatorResults, setValidatorResults] = useState<ValidatorResult[]>(
    []
  );

  const fetchTreemapApi = () => {
    setIsLoading(true);
    setApiData('');
    setValidatorResults([]);

    fetch(treemapRealtimeApisClient[treemapMarketOption.value as Market$Kr])
      .then((res) => res.json())
      .then((data) => {
        setApiData((_prev) => data);
        setIsLoading(false);
        setValidatorResults([
          getSectorsNumber(data),
          getStocksNumber(data),
          getStocksHaveInvalidProp(data),
        ]);
      });
  };

  const selectTreemapOption = (marketName: Market$Kr) => {
    setTreemapMarketOption(
      categoryOptions.find(({ value }) => value === marketName) ||
        categoryOptions[0]
    );
  };

  useEffect(() => {
    fetchTreemapApi();
    return () => {};
  }, [treemapMarketOption]);

  return (
    <div class="mt-4 p-4 pt-0 w-full max-w-5xl flex flex-col items-start">
      <div class="w-full flex justify-start items-center">
        <h2 class="w-max pr-2 font-bold text-2xl">증시맵 API Validator</h2>

        <CategorySelector
          options={categoryOptions}
          currentOption={treemapMarketOption}
          selectOption={selectTreemapOption}
        />
      </div>

      <div class="flex justify-start items-center pb-2">
        <a
          class="pr-2 text-base font-italic font-mono text-sm sm:text-base text-underline text-indigo-900"
          href={treemapRealtimeApis[treemapMarketOption.value as Market$Kr]}
          target="_blank"
        >
          {treemapRealtimeApis[treemapMarketOption.value as Market$Kr]}
        </a>
        <RefreshButton
          buttonClickHandler={fetchTreemapApi}
          isLoading={isLoading}
        />
      </div>

      <CardCode code={apiData} />

      {validatorResults.length > 0 &&
        validatorResults.map(({ isValid, values, message }) => (
          <ValidatorCard title={message!} isValid={isValid} data={values} />
        ))}
    </div>
  );
}
