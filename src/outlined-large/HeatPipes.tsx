import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeatPipes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M54.5 64h-48a6.5 6.5 0 1 1 0-13h40a3.5 3.5 0 0 0 0-7h-40a6.5 6.5 0 1 1 0-13h40a3.5 3.5 0 1 0 0-7h-40A6.53 6.53 0 0 1 0 17.55v-.15A6.51 6.51 0 0 1 6.5 11H25a5.51 5.51 0 0 0 5.5-5.5v-4a1.5 1.5 0 1 1 3 0v4A8.51 8.51 0 0 1 25 14H6.5a3.5 3.5 0 1 0 0 7h40a6.5 6.5 0 1 1 0 13h-40a3.5 3.5 0 0 0 0 7h40a6.5 6.5 0 1 1 0 13h-40a3.5 3.5 0 0 0 0 7h48a6.51 6.51 0 0 0 6.5-6.5v-53a1.5 1.5 0 1 1 3 0v53a9.51 9.51 0 0 1-9.5 9.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHeatPipes;
