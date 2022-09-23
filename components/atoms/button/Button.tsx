import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class='w-max px-2 py-1 border(gray-100 2) hover:bg-gray-200 rounded-2xl'
    />
  );
}
