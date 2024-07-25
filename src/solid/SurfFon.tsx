import * as React from 'react';
import { SVGProps } from 'react';
const SvgSurfFon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.5 10.5h-.75V4.02c0-.975-.795-1.77-1.77-1.77H4.02c-.975 0-1.77.795-1.77 1.77v10.23H.75A.752.752 0 0 0 0 15v1.177a2.577 2.577 0 0 0 2.572 2.573H16.5V21c0 .825.675 1.5 1.5 1.5h4.5c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5Zm0 10.5H18v-9h4.5v9Zm-21-4.823v-.427h7.935l.532.532c.143.136.33.218.533.218h3c.203 0 .39-.082.533-.218l.532-.532H16.5v1.5H2.572c-.592 0-1.072-.48-1.072-1.073Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSurfFon;
