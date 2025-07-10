import * as React from 'react';
import { SVGProps } from 'react';
const SvgBusinessBuilding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="currentColor"
      d="M23.25 5.25h-4.5V.75A.75.75 0 0 0 18 0H6a.75.75 0 0 0-.75.75v4.5H.75A.75.75 0 0 0 0 6v17.25a.75.75 0 0 0 .75.75H6q.053.005.105 0h11.79q.052.005.105 0h5.25a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75M1.5 6.75h3.75V22.5H1.5zM6.75 6V1.5h10.5v21H6.75zM22.5 22.5h-3.75V6.75h3.75z"
    />
    <path
      fill="currentColor"
      d="M15 9H9a.75.75 0 0 0 0 1.5h6A.75.75 0 1 0 15 9m0-3.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5m0 7.5H9a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5m0 3.75H9A.75.75 0 1 0 9 18h6a.75.75 0 1 0 0-1.5"
    />
  </svg>
);
export default SvgBusinessBuilding;
