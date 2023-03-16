import * as React from 'react';
import { SVGProps } from 'react';
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.125 20.25h-5.25a1.123 1.123 0 0 1-1.125-1.125V4.875c0-.622.503-1.125 1.125-1.125h5.25c.623 0 1.125-.502 1.125-1.125S10.748 1.5 10.125 1.5h-5.25A3.38 3.38 0 0 0 1.5 4.875v14.25A3.38 3.38 0 0 0 4.875 22.5h5.25c.623 0 1.125-.503 1.125-1.125s-.502-1.125-1.125-1.125Z"
      fill="currentColor"
    />
    <path
      d="M22.418 12.428v-.016a1.065 1.065 0 0 0 0-.825v-.014a1.134 1.134 0 0 0-.248-.368l-5.25-5.25a1.118 1.118 0 0 0-1.59 0 1.125 1.125 0 0 0 0 1.59l3.33 3.33H8.625c-.623 0-1.125.502-1.125 1.125s.502 1.125 1.125 1.125H18.66l-3.33 3.33a1.118 1.118 0 0 0 0 1.59c.217.217.51.33.795.33.285 0 .578-.113.795-.33l5.25-5.25a1.22 1.22 0 0 0 .247-.367Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLogout;
