import { useEffect, useState } from 'preact/hooks';
import { ChevronsRight } from 'lucide';

import type { ValidatorResult } from '@/types/validator/mod.ts';
import type { Home$Api } from '@/types/main-page/home-api.ts';

import { HOME_APIS, HOME_APIS_CLIENT } from '@/constants/apis/mod.ts';
import { ApiLink, SubtitleH2, SubtitleH3 } from '@/components/atoms/mod.ts';
import {
  CardCode,
  ImageLi,
  ValidatorCard,
} from '@/components/molecules/index.ts';

import { validateMainNews } from '@/utils/validators/main-page/mod.ts';

import RefreshButton from './RefreshButton.tsx';

const styles = {
  container: 'mt-4 p-4 pt-0 w-full max-w-5xl flex flex-col items-start',
  titleContainer: 'w-full flex justify-start items-center',
  description: 'w-full flex justify-start items-center py-4',
  codeCard: 'relative w-full flex items-start',
  codeCardHeightToggleButton:
    'absolute w-6 h-6 right-6 top-3 rounded-full duration-500 cursor-pointer',
};

export default function HomeApiValidator() {
  const [apiData, setApiData] = useState<Home$Api | unknown | ''>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [validatorResults, setValidatorResults] = useState<ValidatorResult[]>(
    [],
  );

  const [isApiResultHeightFull, toggleIsApiResultHeightFull] =
    useState<boolean>(false);

  const fetchMainPageApi = () => {
    setIsLoading(true);
    setApiData('');
    setValidatorResults([]);

    fetch(HOME_APIS_CLIENT.homeFront)
      .then((res) => res.json())
      .then(
        (data) => {
          setApiData((_prev: unknown) => data);
          setIsLoading(false);
          setValidatorResults([validateMainNews(data)]);
        },
        (rej) => {
          setApiData(rej);
          setIsLoading(false);
        },
      );
  };

  const onCardCodeHeightFullButtonClick = () => {
    return toggleIsApiResultHeightFull((prev) => !prev);
  };

  useEffect(() => {
    fetchMainPageApi();
  }, []);

  return (
    <div class={styles.container}>
      <div class={styles.titleContainer}>
        <SubtitleH2 title="투자홈 API Validator" />
      </div>

      <div class={styles.description}>
        <ApiLink link={HOME_APIS.homeFront} />

        <RefreshButton
          buttonClickHandler={fetchMainPageApi}
          isLoading={isLoading}
        />
      </div>

      <div class={styles.codeCard}>
        <CardCode
          code={apiData}
          height={isApiResultHeightFull ? 'h-1/3 max-h-[900px]' : ''}
          classNames="border from-gray-50 to-gray-50 text-xs mb-4"
        />
        {apiData && (
          <ChevronsRight
            class={[
              styles.codeCardHeightToggleButton,
              isApiResultHeightFull ? 'rotate-[450deg]' : '',
            ].join(' ')}
            onClick={onCardCodeHeightFullButtonClick}
          />
        )}
      </div>

      <SubtitleH3 title="오늘의 주요뉴스" classNames="mb-2" />

      {validatorResults.length > 0 &&
        validatorResults.map(({ isValid, values, message }) => (
          <ValidatorCard title={message!} isValid={isValid} data={values} />
        ))}

      {validatorResults.length > 0 &&
        validatorResults.every((result) => result.isValid) && (
          <ul class="w-full grid grid-cols-2 gap-x-4 gap-y-2">
            {(apiData as Home$Api).mainNews.templatedNews.items.map(
              ({ thumbnail }, idx) => (
                <ImageLi title={`상단 #${idx + 1}`} imgSrc={thumbnail} />
              ),
            )}
            {(apiData as Home$Api).mainNews.subNewsItems.map(
              ({ thumbnail }, idx) => (
                <ImageLi title={`하단 #${idx + 1}`} imgSrc={thumbnail} />
              ),
            )}
          </ul>
        )}
    </div>
  );
}
