export interface CardCodeProps {
  code: unknown;
  classNames?: string;
}

export function CardCode({ code, classNames = '' }: CardCodeProps) {
  return (
    <pre
      class={'w-full h-96 p-2 mb-4 overflow-y-auto font-mono text-sm bg-gray-200 rounded-lg'.concat(
        classNames
      )}
    >
      {typeof code === 'string' ? code : JSON.stringify(code, null, 2)}
    </pre>
  );
}
