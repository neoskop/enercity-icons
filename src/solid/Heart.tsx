import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m22.005 13.037-9.38 9.741a.854.854 0 0 1-1.235 0L2 13.028c-2.683-2.777-2.665-7.331.044-10.134C3.373 1.514 5.13.75 7.008.75c.926 0 1.828.189 2.65.54a6.873 6.873 0 0 1 2.238 1.552l.103.112.103-.112C13.405 1.496 15.137.75 16.989.75c.943 0 1.853.189 2.693.557.84.36 1.612.9 2.28 1.587 2.701 2.803 2.718 7.357.043 10.143Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHeart;
