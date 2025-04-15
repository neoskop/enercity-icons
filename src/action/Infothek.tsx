import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfothek = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.986 24a12 12 0 0 1-6.26-1.76l-3.74.99A1 1 0 0 1 .756 22l1-3.75A12 12 0 1 1 11.986 24m-6.09-3.84a1 1 0 0 1 .56.17 9.9 9.9 0 0 0 5.53 1.67 10 10 0 1 0-10-10 9.9 9.9 0 0 0 1.67 5.53 1 1 0 0 1 .14.81l-.67 2.52 2.52-.67q.123-.03.25-.03"
    />
    <path
      fill="currentColor"
      d="M11.986 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m2 7h-1v-5.51a.49.49 0 0 0-.49-.49h-2.51a1 1 0 0 0 0 2h1v4h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgInfothek;
