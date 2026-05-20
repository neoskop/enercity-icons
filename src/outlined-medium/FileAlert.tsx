import * as React from 'react';
import { SVGProps } from 'react';
const SvgFileAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.01 16a1 1 0 0 1 0 2H12a1 1 0 1 1 0-2h.01ZM12 10a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 2a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 20 8v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h7ZM7 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h-3a2 2 0 0 1-2-2V4H7Zm8 3h1.586L15 5.414V7Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFileAlert;
