import * as React from 'react';
import { SVGProps } from 'react';
const SvgItemList = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.321 3H4.93C5.52 3 6 3.48 6 4.071V5.68c0 .59-.48 1.07-1.071 1.07H3.32c-.591 0-1.071-.48-1.071-1.071V4.07C2.25 3.48 2.73 3 3.321 3Zm0 6.75H4.93c.59 0 1.07.48 1.07 1.071v1.608c0 .591-.48 1.071-1.071 1.071H3.32c-.591 0-1.071-.48-1.071-1.071V10.82c0-.591.48-1.071 1.071-1.071Zm0 6.75H4.93c.59 0 1.07.48 1.07 1.071v1.608c0 .591-.48 1.071-1.071 1.071H3.32c-.591 0-1.071-.48-1.071-1.071V17.57c0-.591.48-1.071 1.071-1.071ZM9.25 3.75a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1h11.5a1 1 0 0 0 1-1v-.25a1 1 0 0 0-1-1H9.25Zm-1 7.75a1 1 0 0 1 1-1h11.5a1 1 0 0 1 1 1v.25a1 1 0 0 1-1 1H9.25a1 1 0 0 1-1-1v-.25Zm1 5.75a1 1 0 0 0-1 1v.25a1 1 0 0 0 1 1h11.5a1 1 0 0 0 1-1v-.25a1 1 0 0 0-1-1H9.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgItemList;
