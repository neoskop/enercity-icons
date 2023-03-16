import * as React from 'react';
import { SVGProps } from 'react';
const SvgDeadline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3c-.825 0-1.5.675-1.5 1.5v.735l17.25.015V4.5c0-.825-.675-1.5-1.5-1.5h-1.512l-.004.754a.75.75 0 0 1-.75.746h-.003a.75.75 0 0 1-.747-.754L14.238 3h-8.25l-.004.754a.75.75 0 0 1-.75.746h-.003a.75.75 0 0 1-.747-.754L4.488 3H3ZM1.5 16.5c0 .825.675 1.5 1.5 1.5h7.5c0 .517.053 1.02.15 1.5H3a3 3 0 0 1-3-3v-12a3 3 0 0 1 3-3h1.496L4.5.746A.75.75 0 0 1 5.25 0h.004A.75.75 0 0 1 6 .754l-.004.746h8.25l.004-.754A.75.75 0 0 1 15 0h.004a.75.75 0 0 1 .746.754l-.004.746h1.504a3 3 0 0 1 3 3v6.345a7.603 7.603 0 0 0-1.5-.308V6.75L1.5 6.735V16.5ZM5.625 9C5.003 9 4.5 9.502 4.5 10.125s.503 1.125 1.125 1.125 1.125-.502 1.125-1.125S6.247 9 5.625 9Zm8.137 10.5c.608 1.747 2.28 3 4.238 3 2.483 0 4.5-2.017 4.5-4.5 0-1.665-.907-3.12-2.25-3.893-.45-.27-.96-.457-1.5-.54A4.103 4.103 0 0 0 18 13.5a4.504 4.504 0 0 0-4.5 4.5c0 .525.09 1.027.262 1.5Zm4.988-7.455a5.897 5.897 0 0 1 1.5.398A6.003 6.003 0 0 1 24 18c0 3.308-2.692 6-6 6-2.79 0-5.137-1.913-5.813-4.5a6.008 6.008 0 0 1 6.563-7.455Zm0 5.64.773.773.51.51a.757.757 0 0 1 0 1.065.77.77 0 0 1-.533.217.768.768 0 0 1-.532-.217l-.713-.713-.787-.787a.744.744 0 0 1-.158-.241l-.004-.01a.235.235 0 0 1-.026-.094.529.529 0 0 1-.03-.188v-2.25c0-.412.338-.75.75-.75.413 0 .75.338.75.75v1.935ZM4.5 13.875c0-.623.503-1.125 1.125-1.125s1.125.502 1.125 1.125S6.247 15 5.625 15A1.123 1.123 0 0 1 4.5 13.875ZM10.125 9C9.502 9 9 9.502 9 10.125s.502 1.125 1.125 1.125 1.125-.502 1.125-1.125S10.748 9 10.125 9ZM9 13.875c0-.623.502-1.125 1.125-1.125s1.125.502 1.125 1.125S10.748 15 10.125 15A1.123 1.123 0 0 1 9 13.875Zm4.5-3.75c0 .623.502 1.125 1.125 1.125.053 0 .098 0 .143-.015.217-.022.404-.105.562-.24a1.11 1.11 0 0 0 .42-.87c0-.623-.502-1.125-1.125-1.125s-1.125.502-1.125 1.125Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgDeadline;
