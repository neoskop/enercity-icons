import * as React from 'react';
import { SVGProps } from 'react';
const SvgBusinessBuilding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.25 5.25h-4.5V.75A.75.75 0 0 0 18 0H6a.75.75 0 0 0-.75.75v4.5H.75A.75.75 0 0 0 0 6v17.25a.75.75 0 0 0 .75.75H6c.035.003.07.003.105 0h11.79c.035.003.07.003.105 0h5.25a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75ZM1.5 6.75h3.75V22.5H1.5V6.75ZM6.75 6V1.5h10.5v21H6.75V6ZM22.5 22.5h-3.75V6.75h3.75V22.5Z"
      fill="currentColor"
    />
    <path
      d="M15 9H9a.75.75 0 0 0 0 1.5h6A.75.75 0 1 0 15 9Zm0-3.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5Zm0 7.5H9a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5Zm0 3.75H9A.75.75 0 1 0 9 18h6a.75.75 0 1 0 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBusinessBuilding;
