import * as React from 'react';
import { SVGProps } from 'react';
const SvgInformation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.25c-.463 0-.829.14-1.097.421-.269.282-.403.64-.403 1.074 0 .441.137.802.412 1.083.274.282.637.422 1.088.422.45 0 .813-.14 1.088-.422.274-.28.412-.642.412-1.083 0-.435-.136-.792-.407-1.074-.272-.28-.637-.421-1.093-.421Zm-1.125 13.217h2.25V9.75h-2.25v8.717ZM12 0c6.627 0 12 5.373 12 12a11.998 11.998 0 0 1-12 12C5.372 24 0 18.628 0 12 0 5.373 5.372 0 12 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgInformation;
