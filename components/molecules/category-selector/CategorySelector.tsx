import { JSX } from 'preact/jsx-runtime';

import { SelectorOption, SelectorOptionProps } from '@/components/atoms/index.ts';
import { Market$Kr } from '@/constants/apis/common.ts';

interface CategorySelectorProps extends JSX.HTMLAttributes<HTMLSelectElement> {
  options: SelectorOptionProps[];
  selectOption: (marketName: Market$Kr) => void;
}

export function CategorySelector(
  { options, selectOption }: CategorySelectorProps,
) {
  const onSelectChange = (e: Event) => {
    // @ts-ignore: value maybe exist
    selectOption(e.currentTarget?.value || '');
  };

  return (
    <select
      class='w-max min-w-[80px] py-1 px-2 rounded-2xl text-center text-xl font-bold'
      onChange={onSelectChange}
      value={options[0].value}
    >
      {options.map(({ value, name }) => (
        <SelectorOption
          value={value}
          name={name}
        />
      ))}
    </select>
  );
}
