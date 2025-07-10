import * as React from 'react';
import { SVGProps } from 'react';
const SvgProfit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.286.058a.75.75 0 0 1 .464.692V4.5a.75.75 0 1 1-1.5 0V2.56l-5.47 5.47a.75.75 0 0 1-.865.14L9.898 6.164 3.53 12.53a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 .865-.141l4.017 2.008L19.19 1.5h-1.94a.75.75 0 1 1 0-1.5H21q.149 0 .287.058M17.25 22.5h3V11.25h-3zm-1.5 0h-3v-6.75h3zm-7.5-9v9h3v-9zm-1.5 9h-3V18h3zM16.5 9.75H21a.75.75 0 0 1 .75.75v12.75A.75.75 0 0 1 21 24H3a.75.75 0 0 1-.75-.75v-6A.75.75 0 0 1 3 16.5h3.75v-3.75A.75.75 0 0 1 7.5 12H12a.75.75 0 0 1 .75.75v1.5h3V10.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProfit;
