import * as React from 'react';
import { SVGProps } from 'react';
const SvgInformation = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M12 5.25q-.695 0-1.097.421-.403.423-.403 1.074 0 .662.412 1.083.411.423 1.088.422.675 0 1.088-.422.412-.42.412-1.083 0-.652-.407-1.074-.409-.42-1.093-.421m-1.125 13.217h2.25V9.75h-2.25zM12 0c6.627 0 12 5.373 12 12a12 12 0 0 1-12 12C5.372 24 0 18.628 0 12 0 5.373 5.372 0 12 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInformation;
