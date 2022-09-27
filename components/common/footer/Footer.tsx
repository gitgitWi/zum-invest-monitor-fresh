import { Github } from 'lucide';

export function Footer() {
  return (
    <footer class="w-full my-2 overflow-x-hidden flex justify-center items-center border-none border-t-2 border-gray-300">
      <button class="w-max py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-300 font-italic duration-75">
        <a href="https://fresh.deno.dev/" target="_blank">
          Made with <span class="font-bold font-mono">Deno Fresh</span>
        </a>
      </button>

      <button class="w-max h-full py-2 px-4 ml-2 rounded-lg bg-gray-100 hover:bg-gray-300 flex justify-center duration-75">
        <a
          href="https://github.com/gitgitWi/zum-invest-monitor-fresh"
          target="_blank"
          class="flex justify-center"
        >
          Source on <Github class="ml-1" />
        </a>
      </button>
    </footer>
  );
}
