import * as React from 'react';
import { SVGProps } from 'react';
const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M43.5 61c1.93 0 3.5-1.57 3.5-3.5v-51C47 4.57 45.43 3 43.5 3h-1.649v.5a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3V3H20.5C18.57 3 17 4.57 17 6.5v51c0 1.93 1.57 3.5 3.5 3.5zm-23-61h23C47.084 0 50 2.916 50 6.5v51c0 3.584-2.916 6.5-6.5 6.5h-23a6.51 6.51 0 0 1-6.5-6.5v-51C14 2.916 16.916 0 20.5 0m5 55h13a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmartphone;
