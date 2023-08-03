import * as React from 'react';
import { SVGProps } from 'react';
const SvgAttention = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.671 18.938 14.034 2.663A2.333 2.333 0 0 0 12 1.5c-.848 0-1.605.435-2.033 1.163L.331 18.937a2.333 2.333 0 0 0-.015 2.37A2.33 2.33 0 0 0 2.363 22.5H21.64a2.33 2.33 0 0 0 2.047-1.192 2.333 2.333 0 0 0-.015-2.37Zm-11.67.562a1.123 1.123 0 0 1-1.125-1.125 1.124 1.124 0 1 1 2.25 0c0 .622-.502 1.125-1.125 1.125Zm.735-4.41a.74.74 0 0 1-.735.66.754.754 0 0 1-.75-.66l-.742-6a.726.726 0 0 1 .18-.585.735.735 0 0 1 .562-.255h1.5c.218 0 .42.09.563.255.142.157.21.375.18.585l-.758 6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAttention;
