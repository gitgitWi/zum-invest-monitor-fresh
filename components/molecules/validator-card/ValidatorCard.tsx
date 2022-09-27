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
    <div class="w-full pl-6 mb-4 flex flex-col justify-start items-start">
      <h3 class="w-full text-lg font-bold select-none">{title}</h3>
      <p class="flex items-baseline font-bold text-base select-none">
        결과:{' '}
        <p
          class={'m-1 text-2xl text-red-600'.concat(
            isValid ? ` text-[rgb(54,83,20)]` : ' text-[rgb(136,19,55)]'
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
      <details class="w-full p-2 mb-2 select-none duration-200" open={!isValid}>
        <summary class="select-none cursor-pointer">데이터 확인</summary>
        <CardCode
          code={data}
          classNames={'h-auto max-h-80 p-3 text-sm rounded-2xl '.concat(
            isValid
              ? ` from-[rgb(247,254,231)] to-[rgb(236,253,245)]`
              : ' from-[rgb(255,228,230)] to-[rgb(255,241,242)]'
          )}
        />
      </details>
    </div>
  );
}
