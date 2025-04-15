import * as React from 'react';
import { SVGProps } from 'react';
const SvgFemale = (props: SVGProps<SVGSVGElement>) => (
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
      d="M44.5 19.5C44.5 12.61 38.89 7 32 7s-12.5 5.61-12.5 12.5S25.11 32 32 32s12.5-5.61 12.5-12.5M32 29c-5.24 0-9.5-4.26-9.5-9.5S26.76 10 32 10s9.5 4.26 9.5 9.5S37.24 29 32 29"
    />
    <path
      fill="currentColor"
      d="M43 45h-6v-6.66c8.34-2.2 14.5-9.82 14.5-18.84C51.5 8.75 42.75 0 32 0S12.5 8.75 12.5 19.5c0 9.02 6.16 16.64 14.5 18.84V45h-6c-1.66 0-3 1.34-3 3v4c0 1.66 1.34 3 3 3h6v6c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3v-6h6c1.66 0 3-1.34 3-3v-4c0-1.66-1.34-3-3-3m0 7h-9v9h-4v-9h-9v-4h9V35.87c-1.03-.12-2.04-.34-3-.64-6.66-2.13-11.5-8.37-11.5-15.73C15.5 10.4 22.9 3 32 3s16.5 7.4 16.5 16.5c0 7.36-4.84 13.6-11.5 15.73-.96.3-1.97.52-3 .64V48h9z"
    />
  </svg>
);
export default SvgFemale;
