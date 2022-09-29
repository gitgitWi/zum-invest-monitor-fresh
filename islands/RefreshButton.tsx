import { RefreshCcw } from 'lucide';

import { Button } from '@/components/atoms/mod.ts';

interface RefreshButtonProps {
  buttonClickHandler: () => void;
  isLoading: boolean;
}

const styles = {
  button: 'w-full ml-2 bg-[#0891b2] text-white hover:bg-[#164e63] duration-75',
  icon: 'p-1',
} as const;

export default function RefreshButton({
  buttonClickHandler,
  isLoading,
}: RefreshButtonProps) {
  return (
    <Button onClick={buttonClickHandler} classNames={styles.button}>
      <RefreshCcw
        class={[
          styles.icon,
          isLoading ? 'animate-spin' : 'hover:animate-spin',
        ].join(' ')}
      />
    </Button>
  );
}
