import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  classNames?: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={[
        'w-max px-2 py-1 hover:bg-gray-200 rounded-2xl',
        props.classNames || '',
      ].join(' ')}
    />
  );
}
