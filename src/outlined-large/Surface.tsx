import * as React from 'react';
import { SVGProps } from 'react';
const SvgSurface = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 7a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-3 0v4A1.5 1.5 0 0 0 12 7m27.56 43.5 5.47-5.47a1.5 1.5 0 1 0-2.12-2.122l-7.592 7.593H13.5v-6.062l19.712-19.712a1.5 1.5 0 0 0-2.121-2.122L13.5 40.195V13.502h10.634l-5.316 5.316a1.5 1.5 0 0 0 2.12 2.122l7.438-7.438H50.5v5.757L39.125 30.632a1.5 1.5 0 1 0 2.122 2.12L50.5 23.5v27zM52 10.5H12a1.5 1.5 0 0 0-1.5 1.5v40a1.5 1.5 0 0 0 1.5 1.5h40a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5m-1.5-9a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0zM12 57a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 3 0v-4A1.5 1.5 0 0 0 12 57m38.5 1.5a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0zm8-45h4a1.5 1.5 0 0 0 0-3h-4a1.5 1.5 0 0 0 0 3m0 37h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1 0-3m-53-40h-4a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3m-4 40h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1 0-3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSurface;
