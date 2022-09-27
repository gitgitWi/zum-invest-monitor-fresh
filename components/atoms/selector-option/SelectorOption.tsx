import { JSX } from 'preact/jsx-runtime';

export interface SelectorOptionProps extends JSX.HTMLAttributes<HTMLOptionElement> {
  value: string;
  name: string;
}

export function SelectorOption({ value, name }: SelectorOptionProps) {
  return (
    <option
      value={value}
      class=''
    >
      {name}
    </option>
  );
}
