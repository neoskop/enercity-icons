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
      d="M21.692.464A.75.75 0 0 0 21 0h-3.75a.75.75 0 1 0 0 1.5h1.94l-5.088 5.087-4.017-2.008a.75.75 0 0 0-.865.14l-6.75 6.75a.75.75 0 1 0 1.06 1.061l6.368-6.367 4.017 2.008a.75.75 0 0 0 .865-.14l5.47-5.47V4.5a.75.75 0 1 0 1.5 0V.75a.7.7 0 0 0-.058-.286M5.25 16.5H3a.75.75 0 0 0-.75.75v6c0 .415.335.75.75.75h2.25a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75m3-4.5h2.25a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75m7.5 2.25H13.5a.75.75 0 0 0-.75.75v8.25c0 .415.335.75.75.75h2.25a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75m3-4.5H21a.75.75 0 0 1 .75.75v12.75A.75.75 0 0 1 21 24h-2.25a.75.75 0 0 1-.75-.75V10.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProfit;
