import * as React from 'react';
import { SVGProps } from 'react';
const SvgBusinessBuilding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.25 5.25h-4.5V.75A.75.75 0 0 0 18 0H6a.75.75 0 0 0-.75.75v4.5H.75A.75.75 0 0 0 0 6v17.25a.75.75 0 0 0 .75.75h22.5a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75Zm-8.25 9H9a.75.75 0 1 1 0-1.5h6a.75.75 0 1 1 0 1.5Zm.75 3A.75.75 0 0 1 15 18H9a.75.75 0 1 1 0-1.5h6a.75.75 0 0 1 .75.75ZM15 10.5H9A.75.75 0 1 1 9 9h6a.75.75 0 1 1 0 1.5Zm0-3.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 1 1 0 1.5Zm-13.5 0h3.75V22.5H1.5V6.75Zm21 15.75h-3.75V6.75h3.75V22.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBusinessBuilding;
