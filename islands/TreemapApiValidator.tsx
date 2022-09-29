import { IS_BROWSER } from '$fresh/runtime.ts';
import { useEffect, useState } from 'preact/hooks';
import { ChevronsRight } from 'lucide';

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
import Chart, { treemapAdapter } from './Chart.tsx';

const styles = {
  container: 'mt-4 p-4 pt-0 w-full max-w-5xl flex flex-col items-start',
  titleContainer: 'w-full flex justify-start items-center',
  subtitle: 'w-max pr-2 font-bold text-2xl',
  description: 'flex justify-start items-center pb-2',
  apiLink:
    'pr-2 text-base font-italic font-mono text-sm sm:text-base text-underline text-indigo-900',
  codeCard: 'relative w-full flex items-start',
  codeCardHeightToggleButton:
    'absolute w-6 h-6 right-6 top-3 rounded-full duration-500 cursor-pointer',
};

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

const setQueryStringMarket = (marketName: Market$Kr) => {
  const updateSearch = new URLSearchParams(location.search);

  if (updateSearch.get('market') === marketName) return;

  updateSearch.set('market', marketName);
  location.search = updateSearch.toString();
};

export default function TreemapApiValidator() {
  const marketQuery = new URLSearchParams(
    IS_BROWSER ? location.search : ''
  ).get('market');

  const [treemapMarketOption, setTreemapMarketOption] =
    useState<SelectorOptionProps>(
      categoryOptions.find(({ value }) => marketQuery === value) ||
        categoryOptions[0]
    );
  const [apiData, setApiData] = useState<
    Record<string, unknown> | unknown[] | ''
  >('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [validatorResults, setValidatorResults] = useState<ValidatorResult[]>(
    []
  );

  const [isApiResultHeightFull, toggleIsApiResultHeightFull] =
    useState<boolean>(false);

  const fetchTreemapApi = () => {
    setIsLoading(true);
    setApiData('');
    setValidatorResults([]);
    setQueryStringMarket(treemapMarketOption.value as Market$Kr);

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

  const onCardCodeHeightFullButtonClick = () => {
    return toggleIsApiResultHeightFull((prev) => !prev);
  };

  useEffect(() => {
    fetchTreemapApi();
    return () => {
      treemapAdapter.destroy();
    };
  }, [treemapMarketOption]);

  return (
    <div class={styles.container}>
      <div class={styles.titleContainer}>
        <h2 class={styles.subtitle}>증시맵 API Validator</h2>

        <CategorySelector
          options={categoryOptions}
          currentOption={treemapMarketOption}
          selectOption={selectTreemapOption}
        />
      </div>

      <div class={styles.description}>
        <a
          class={styles.apiLink}
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

      <div class={styles.codeCard}>
        <CardCode
          code={apiData}
          height={isApiResultHeightFull ? 'h-1/3 max-h-[900px]' : ''}
        />
        {apiData && (
          <ChevronsRight
            // className='duration-150 animate-spin'
            class={[
              styles.codeCardHeightToggleButton,
              isApiResultHeightFull ? 'rotate-[450deg]' : '',
            ].join(' ')}
            onClick={onCardCodeHeightFullButtonClick}
          />
        )}
      </div>

      {validatorResults.length > 0 &&
        validatorResults.map(({ isValid, values, message }) => (
          <ValidatorCard title={message!} isValid={isValid} data={values} />
        ))}

      {validatorResults.length > 0 && <Chart data={apiData} />}
    </div>
  );
}
