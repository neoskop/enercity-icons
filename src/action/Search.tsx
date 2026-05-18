import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m21.71 20.29-5.4-5.4A7.985 7.985 0 0 0 18 9.99C18 5.59 14.41 2 10 2s-8 3.59-8 8 3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l5.4 5.4c.2.2.45.29.71.29.26 0 .51-.1.71-.29a.996.996 0 0 0 0-1.41l-.01-.01ZM4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSearch;
