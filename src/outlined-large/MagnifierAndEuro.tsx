import * as React from 'react';
import { SVGProps } from 'react';
const SvgMagnifierAndEuro = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.958 3C14.196 3 3 14.195 3 27.957s11.196 24.957 24.958 24.957c13.76 0 24.957-11.195 24.957-24.957S41.719 3 27.958 3ZM49.73 45.486l13.392 13.392A3.001 3.001 0 0 1 60.998 64a2.987 2.987 0 0 1-2.12-.879L45.487 49.729a27.83 27.83 0 0 1-17.53 6.185C12.518 55.914 0 43.397 0 27.957 0 12.517 12.517 0 27.958 0c15.439 0 27.957 12.517 27.957 27.957a27.83 27.83 0 0 1-6.185 17.53ZM37.623 17.842a1.5 1.5 0 0 1-2.083.403c-4.63-3.125-10.86-2.524-14.814 1.431a11.62 11.62 0 0 0-2.525 3.777h14.36a1.5 1.5 0 0 1 0 3h-15.15a11.761 11.761 0 0 0-.033 2.781h15.183a1.5 1.5 0 0 1 0 3H18.113a11.634 11.634 0 0 0 2.613 4 11.664 11.664 0 0 0 11.905 2.857c.983-.32 1.962-.806 2.91-1.446a1.5 1.5 0 0 1 1.678 2.487 14.652 14.652 0 0 1-3.662 1.812 14.806 14.806 0 0 1-4.575.728 14.645 14.645 0 0 1-10.378-4.317 14.644 14.644 0 0 1-3.678-6.12H10.85a1.5 1.5 0 1 1 0-3h3.51a14.68 14.68 0 0 1-.064-1.28c0-.505.028-1.006.077-1.502H10.85a1.5 1.5 0 1 1 0-3h4.155a14.626 14.626 0 0 1 3.6-5.898c4.968-4.967 12.795-5.723 18.614-1.796a1.5 1.5 0 0 1 .404 2.082Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMagnifierAndEuro;
