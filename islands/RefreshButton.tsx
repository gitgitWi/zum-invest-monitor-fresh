import { useState } from 'preact/hooks';
import { RefreshCcw } from 'lucide';

import { Button, ButtonProps } from '../components/atoms/index.ts';

interface RefreshButtonProps extends ButtonProps {
  apiUrl: string;
}

export default function RefreshButton({ apiUrl }: RefreshButtonProps) {
  const [isSpined, setIsSpined] = useState(false);

  const onButtonClickHandler = () => {
    setIsSpined((prev) => !prev);
    if (!apiUrl) return;

    fetch(apiUrl).then((res) => res.json()).then((data) =>
      console.log(`data from ${apiUrl}\n`, data)
    );
  };

  return (
    <Button
      class={''.concat(isSpined ? 'animate-spin' : '')}
      onClick={onButtonClickHandler}
    >
      <RefreshCcw />
    </Button>
  );
}
