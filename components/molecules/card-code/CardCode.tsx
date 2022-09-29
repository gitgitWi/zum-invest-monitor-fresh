export interface CardCodeProps {
  code: unknown;
  classNames?: string;
  height?: string;
}

const codeStyleBase =
  'w-full h-48 p-2 my-2 overflow-y-auto font-mono text-sm bg-gradient-to-b from-gray-300 to-gray-100 rounded-lg';

export function CardCode({
  code,
  classNames = '',
  height = '',
}: CardCodeProps) {
  return (
    <pre class={[codeStyleBase, classNames, height].join(' ')}>
      {typeof code === 'string' ? code : JSON.stringify(code, null, 2)}
    </pre>
  );
}
