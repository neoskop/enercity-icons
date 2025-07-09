import * as React from 'react';
import { SVGProps } from 'react';
const SvgWorldwide = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.911 12.656c-.131 5.5-1.844 9.844-3.93 9.844s-3.8-4.344-3.931-9.844zm-9.175 0c.086 3.721.9 7.39 2.396 9.45a10.5 10.5 0 0 1-7.632-9.45zm15.724 0a10.5 10.5 0 0 1-7.632 9.45c1.496-2.06 2.311-5.729 2.397-9.45zM9.132 1.894c-1.496 2.06-2.31 5.729-2.395 9.45H1.5a10.51 10.51 0 0 1 7.632-9.45M11.98 1.5c2.087 0 3.8 4.345 3.931 9.844H8.05c.13-5.5 1.844-9.844 3.93-9.844m2.848.394a10.5 10.5 0 0 1 7.632 9.45h-5.235c-.086-3.721-.9-7.39-2.397-9.45"
    />
  </svg>
);
export default SvgWorldwide;
