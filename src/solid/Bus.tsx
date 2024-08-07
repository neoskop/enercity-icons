import * as React from 'react';
import { SVGProps } from 'react';
const SvgBus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.992 12.758a.756.756 0 0 0-.022-.188l-1.328-5.423A1.499 1.499 0 0 0 21.188 6H.75a.752.752 0 0 0-.75.75v9.773c0 .42.338.75.75.75h1.627a2.246 2.246 0 0 0 4.223 0h10.028a2.246 2.246 0 0 0 4.223 0h1.664c.398 0 .773-.15 1.05-.436A1.48 1.48 0 0 0 24 15.78l-.008-3.022Zm-19.5 4.492a.747.747 0 0 1-.75-.75.74.74 0 0 1 .578-.727h.345a.748.748 0 0 1-.173 1.477Zm12.75-4.5c0 .412-.337.75-.75.75h-13.5a.747.747 0 0 1-.75-.75V9c0-.412.33-.75.75-.75h13.5c.413 0 .75.338.75.75v3.75Zm1.5 4.5a.747.747 0 0 1-.75-.75.74.74 0 0 1 .578-.727h.345a.748.748 0 0 1-.172 1.477Zm.75-5.28V7.5h1.695l1.095 4.492-2.79-.022Zm-6.75.03h3V9.75h-3V12Zm-4.5 0h3V9.75h-3V12Zm-4.5 0h3V9.75h-3V12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBus;
