import { SubtitleH3 } from '@/components/atoms/subtitle-h3/SubtitleH3.tsx';

import { CardCode } from '../index.ts';

interface ValidatorCardProps {
  title: string;
  description?: string;
  isValid: boolean;
  data?: unknown;
}

export function ValidatorCard({
  title,
  description = '',
  isValid,
  data,
}: ValidatorCardProps) {
  return (
    <div class="w-full p-4 pl-6 pb-2 mb-4 flex flex-col justify-start items-start bg-gray-100 rounded-xl">
      <SubtitleH3 title={title} />
      <p class="flex items-center text-base select-none text-gray-700">
        결과:{' '}
        <p
          class={'m-1 text-lg font-bold'.concat(
            isValid ? ` text-blue-600` : ' text-[rgb(225,29,72)]',
          )}
        >
          {isValid ? '정상' : '확인 필요'}
        </p>
      </p>
      {description && (
        <p class="w-full p-2 m-2 rounded-xl bg-[rgb(245,245,245)] ">
          {description}
        </p>
      )}
      <details
        class="w-full py-2 mb-2 select-none duration-200"
        open={!isValid}
      >
        <summary class="select-none cursor-pointer text-gray-600 text-sm">
          데이터 확인
        </summary>
        <CardCode
          code={data}
          classNames={
            'h-auto max-h-80 p-3 text-xs rounded-2xl from-gray-50 to-gray-50 border'
          }
        />
      </details>
    </div>
  );
}
