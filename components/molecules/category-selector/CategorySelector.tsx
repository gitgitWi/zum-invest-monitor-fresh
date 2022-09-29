import { JSX } from 'preact/jsx-runtime';

import { SelectorOption, SelectorOptionProps } from '@/components/atoms/mod.ts';
import { Market$Kr } from '@/constants/apis/common.ts';

interface CategorySelectorProps extends JSX.HTMLAttributes<HTMLSelectElement> {
  options: SelectorOptionProps[];
  currentOption: SelectorOptionProps;
  selectOption: (marketName: Market$Kr) => void;
}

export function CategorySelector({
  options,
  currentOption,
  selectOption,
}: CategorySelectorProps) {
  const onSelectChange = (e: Event) => {
    // @ts-ignore: value maybe exist
    selectOption(e.currentTarget?.value || '');
  };

  return (
    <select
      class="w-max min-w-[100px] py-1 px-2 rounded-2xl border text-center bg-white text-gray-700"
      onChange={onSelectChange}
      value={currentOption.value}
    >
      {options.map(({ value, name }) => (
        <SelectorOption value={value} name={name} />
      ))}
    </select>
  );
}
