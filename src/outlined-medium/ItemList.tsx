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
      d="M5.25 2.25H3a1.5 1.5 0 0 0-1.5 1.5V6A1.5 1.5 0 0 0 3 7.5h2.25A1.5 1.5 0 0 0 6.75 6V3.75a1.5 1.5 0 0 0-1.5-1.5ZM3 3.75h2.25V6H3V3.75ZM5.25 9H3a1.5 1.5 0 0 0-1.5 1.5v2.25a1.5 1.5 0 0 0 1.5 1.5h2.25a1.5 1.5 0 0 0 1.5-1.5V10.5A1.5 1.5 0 0 0 5.25 9ZM3 10.5h2.25v2.25H3V10.5Zm0 5.25h2.25a1.5 1.5 0 0 1 1.5 1.5v2.25a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5v-2.25a1.5 1.5 0 0 1 1.5-1.5Zm2.25 1.5H3v2.25h2.25v-2.25Zm4-13.5a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1H21.5a1 1 0 0 0 1-1v-.25a1 1 0 0 0-1-1H9.25Zm-1 7.75a1 1 0 0 1 1-1H21.5a1 1 0 0 1 1 1v.25a1 1 0 0 1-1 1H9.25a1 1 0 0 1-1-1v-.25Zm1 5.75a1 1 0 0 0-1 1v.25a1 1 0 0 0 1 1H21.5a1 1 0 0 0 1-1v-.25a1 1 0 0 0-1-1H9.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgItemList;
