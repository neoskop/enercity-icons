import * as React from 'react';
import { SVGProps } from 'react';
const SvgAttention = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M60.26 49.75 36.75 8.76A5.42 5.42 0 0 0 32 6a5.42 5.42 0 0 0-4.75 2.76L3.74 49.75a5.464 5.464 0 0 0 0 5.5A5.432 5.432 0 0 0 8.49 58h47.02c1.98 0 3.76-1.03 4.75-2.75.99-1.72.99-3.78 0-5.5Zm-2.59 4c-.45.78-1.26 1.25-2.16 1.25H8.49c-.9 0-1.71-.47-2.16-1.25-.45-.78-.45-1.72 0-2.5l23.51-41C30.29 9.47 31.1 9 32 9c.9 0 1.71.47 2.16 1.25l23.51 41c.45.78.45 1.72 0 2.5Z"
      fill="currentColor"
    />
    <path
      d="M33.5 23.5h-3c-.42 0-.83.18-1.11.5-.28.31-.42.74-.38 1.16l1.49 14.5a1.496 1.496 0 0 0 2.98.01l1.51-14.5c.04-.42-.09-.84-.38-1.16-.29-.32-.69-.5-1.11-.5v-.01ZM32 49a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAttention;
