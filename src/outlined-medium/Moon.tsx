import * as React from 'react';
import { SVGProps } from 'react';
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.38 22.125c-3.737 0-7.199-2.042-9.035-5.328a.75.75 0 0 1 .94-1.06 8.6 8.6 0 0 0 3.29.64c4.892 0 8.871-4.025 8.871-8.973a9 9 0 0 0-1.144-4.412.749.749 0 0 1 .934-1.064c3.957 1.598 6.515 5.414 6.515 9.723 0 5.775-4.652 10.473-10.37 10.473zm-6.52-4.388a8.84 8.84 0 0 0 6.519 2.889c4.89 0 8.87-4.026 8.87-8.973 0-2.985-1.43-5.694-3.765-7.345.304.996.46 2.041.46 3.097 0 5.775-4.651 10.474-10.37 10.474q-.871 0-1.716-.142z"
    />
  </svg>
);
export default SvgMoon;
