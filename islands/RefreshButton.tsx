import { RefreshCcw } from 'lucide';

import { Button } from '@/components/atoms/mod.ts';

interface RefreshButtonProps {
  buttonClickHandler: () => void;
  isLoading: boolean;
}

const defaultIconStyles = 'p-1';

export default function RefreshButton({
  buttonClickHandler,
  isLoading,
}: RefreshButtonProps) {
  return (
    <Button
      onClick={buttonClickHandler}
      classNames="w-full ml-2 bg-[#0891b2] text-white"
    >
      <RefreshCcw
        class={[
          defaultIconStyles,
          isLoading ? 'animate-spin' : 'hover:animate-spin',
        ].join(' ')}
      />
    </Button>
  );
}
