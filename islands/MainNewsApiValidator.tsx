import { useEffect, useState } from 'preact/hooks';
import { ChevronsRight } from 'lucide';

import type { ValidatorResult } from '@/types/validator/mod.ts';

import { HOME_APIS, HOME_APIS_CLIENT } from '@/constants/apis/mod.ts';
import { CardCode, ValidatorCard } from '@/components/molecules/index.ts';

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

export default function TreemapApiValidator() {
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

    fetch(HOME_APIS_CLIENT.homeFront)
      .then((res) => res.json())
      .then((data) => {
        setApiData((_prev) => data);
        setIsLoading(false);
        setValidatorResults([]);
      });
  };

  const onCardCodeHeightFullButtonClick = () => {
    return toggleIsApiResultHeightFull((prev) => !prev);
  };

  useEffect(() => {
    fetchTreemapApi();
    return () => {
      treemapAdapter.destroy();
    };
  }, []);

  return (
    <div class={styles.container}>
      <div class={styles.titleContainer}>
        <h2 class={styles.subtitle}>투자홈 API Validator</h2>
      </div>

      <div class={styles.description}>
        <a class={styles.apiLink} href={HOME_APIS.homeFront} target="_blank">
          {HOME_APIS.homeFront}
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
