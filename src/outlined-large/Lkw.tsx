import * as React from 'react';
import { SVGProps } from 'react';
const SvgLkw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      d="M63.83 31.307 58.39 20.88A3.49 3.49 0 0 0 55.289 19H43v-3.5c0-1.93-1.57-3.5-3.5-3.5h-36C1.57 12 0 13.57 0 15.5v27C0 44.43 1.57 46 3.5 46h4.08c.489 3.385 3.402 6 6.92 6 3.52 0 6.432-2.615 6.92-6h23.66c.488 3.385 3.4 6 6.92 6s6.432-2.615 6.92-6h1.58c1.93 0 3.5-1.57 3.5-3.5V32c0-.241-.06-.48-.17-.693m-8.1-9.04L60.286 31H49v-9h6.288c.187 0 .356.103.442.268M3 42.5v-27c0-.274.226-.5.5-.5h36c.275 0 .5.226.5.5V43H21.205c-.863-2.888-3.54-5-6.704-5-3.165 0-5.842 2.112-6.705 5H3.5a.5.5 0 0 1-.5-.5M14.5 49c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4M52 49c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m8.5-6h-1.795c-.863-2.888-3.541-5-6.705-5s-5.842 2.112-6.705 5H43V22h3v10.5a1.5 1.5 0 0 0 1.5 1.5H61v8.5a.5.5 0 0 1-.5.5"
    />
  </svg>
);
export default SvgLkw;
