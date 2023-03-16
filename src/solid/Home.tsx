import * as React from 'react';
import { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.39 12.577a1.51 1.51 0 0 1-1.388.923h-.75v7.485c0 .826-.674 1.5-1.5 1.5h-3c-.824 0-1.5-.674-1.5-1.5v-6h-4.5v6c0 .826-.667 1.5-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V13.5h-.75a1.5 1.5 0 0 1-1.065-2.558l9-9a1.517 1.517 0 0 1 1.065-.442 1.5 1.5 0 0 1 1.058.442l9 9c.427.428.555 1.073.33 1.635Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHome;
