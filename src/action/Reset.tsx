import * as React from 'react';
import { SVGProps } from 'react';
const SvgReset = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.089 7.925 16.313 6.7A6.75 6.75 0 0 0 12 5.16 6.845 6.845 0 0 0 5.16 12c0 3.766 3.067 6.84 6.84 6.84 3.34 0 6.25-2.491 6.76-5.788.087-.59.641-.994 1.232-.908.59.094.993.648.9 1.232C20.215 17.796 16.472 21 12 21c-4.96 0-9-4.039-9-9 0-4.967 4.04-9 9-9 2.153 0 4.227.763 5.854 2.16l1.303-1.303c.31-.31.77-.403 1.174-.238.402.173.669.562.669 1.001v4.068a1.08 1.08 0 0 1-1.08 1.08h-4.068a1.077 1.077 0 0 1-.763-1.844"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReset;
