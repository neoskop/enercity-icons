import * as React from 'react';
import { SVGProps } from 'react';
const SvgProfit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.286.058a.752.752 0 0 1 .464.692V4.5a.75.75 0 1 1-1.5 0V2.56l-5.47 5.47a.749.749 0 0 1-.865.14L9.898 6.164 3.53 12.53a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l6.75-6.75a.746.746 0 0 1 .865-.141l4.017 2.008L19.19 1.5h-1.94a.75.75 0 1 1 0-1.5H21c.098 0 .196.02.287.058ZM17.25 22.5h3V11.25h-3V22.5Zm-1.5 0h-3v-6.75h3v6.75Zm-7.5-9v9h3v-9h-3Zm-1.5 9h-3V18h3v4.5ZM16.5 9.75H21a.75.75 0 0 1 .75.75v12.75A.75.75 0 0 1 21 24H3a.75.75 0 0 1-.75-.75v-6A.75.75 0 0 1 3 16.5h3.75v-3.75A.75.75 0 0 1 7.5 12H12a.75.75 0 0 1 .75.75v1.5h3V10.5a.75.75 0 0 1 .75-.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgProfit;
