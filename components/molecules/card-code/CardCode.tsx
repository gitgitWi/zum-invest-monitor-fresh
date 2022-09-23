export interface CardCodeProps {
  text: string | Record<string, unknown>;
}

export function CardCode({ text }: CardCodeProps) {
  return <pre class='w-full h-96 p-2 mb-4 overflow-y-auto font-mono text-sm bg-gray-300 rounded-lg'>
      {typeof text === 'string' ? text : JSON.stringify(text, null, 2)}
  </pre>;
}
