import * as React from 'react';
import { SVGProps } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.375.75a4.125 4.125 0 0 0-3.939 5.354L8.612 9.53a4.125 4.125 0 1 0 .124 5.553l5.65 2.99a4.125 4.125 0 1 0 .878-1.657l-5.65-2.99a4.132 4.132 0 0 0-.05-2.28l5.824-3.426A4.125 4.125 0 1 0 18.375.75Zm0 1.875a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm-12.75 7.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm15 9a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgShare;
