import { RefreshCcw } from 'lucide';

import { Button } from '@/components/atoms/mod.ts';

interface RefreshButtonProps {
  buttonClickHandler: () => void;
  isLoading: boolean;
}

export default function RefreshButton({
  buttonClickHandler,
  isLoading,
}: RefreshButtonProps) {
  return (
    <Button onClick={buttonClickHandler}>
      <RefreshCcw class={isLoading ? 'animate-spin' : 'hover:animate-spin'} />
    </Button>
  );
}
