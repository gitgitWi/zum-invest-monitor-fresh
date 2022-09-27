import { RefreshCcw } from 'lucide';

import { Button, ButtonProps } from '@/components/atoms/index.ts';

interface RefreshButtonProps {
  buttonClickHandler: () => void;
}

export default function RefreshButton({ buttonClickHandler }: RefreshButtonProps) {
  return (
    <Button onClick={buttonClickHandler}>
      <RefreshCcw />
    </Button>
  );
}
