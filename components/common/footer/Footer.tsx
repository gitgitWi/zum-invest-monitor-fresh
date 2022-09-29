import { Github } from 'lucide';

export function Footer() {
  return (
    <footer class="fixed bottom-0 w-full py-2 overflow-x-hidden flex justify-center items-center bg-gradient-to-b from-transparent to-gray-300 select-none">
      <button class="w-max p-0 flex items-center">
        <a href="https://fresh.deno.dev" target="_blank" rel="noopener">
          <img
            height="37"
            src="https://fresh.deno.dev/fresh-badge-dark.svg"
            alt="Made with Fresh"
          />
        </a>
      </button>

      <button class="w-max h-[37px] py-2 px-4 ml-2 rounded-lg bg-white hover:bg-gray-200 flex justify-center items-center duration-75">
        <a
          href="https://github.com/gitgitWi/zum-invest-monitor-fresh"
          target="_blank"
          rel="noopener"
          class="flex justify-center items-center text-xs sm:text-base"
        >
          Source on <Github class="ml-1" />
        </a>
      </button>
    </footer>
  );
}
