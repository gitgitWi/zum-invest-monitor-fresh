import { Title } from '@/components/atoms/mod.ts';

export function Header() {
  return (
    <header class="w-full p-1 sm:p-1.5 bg-gradient-to-r from-blue-700 to-red-600 ">
      <Title text="Watch InvestZUM" href="/" />
    </header>
  );
}
