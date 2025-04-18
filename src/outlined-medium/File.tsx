import * as React from 'react';
import { SVGProps } from 'react';
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.75 1.5v20.992h16.5V8.136h-4.412a2.227 2.227 0 0 1-2.225-2.224V1.5zm12.088 5.136h4.088l-4.813-4.813v4.09c0 .398.325.723.725.723M15.63.22l5.9 5.9c.14.14.22.33.22.53v16.592a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V.75A.75.75 0 0 1 3 0h12.1a.75.75 0 0 1 .53.22M7.5 11.24h9a.75.75 0 1 1 0 1.5h-9a.75.75 0 1 1 0-1.5m9 3.134h-9a.75.75 0 1 0 0 1.5h9a.75.75 0 1 0 0-1.5m-9 3.134h9a.75.75 0 1 1 0 1.5h-9a.75.75 0 1 1 0-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFile;
