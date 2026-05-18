import * as React from 'react';
import { SVGProps } from 'react';
const SvgTownhall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2v12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2V8a1 1 0 0 1 0-2h2V4Zm5 16v-6a1 1 0 1 0-2 0v6H4V8h16v12h-3v-6a1 1 0 1 0-2 0v6h-2v-6a1 1 0 1 0-2 0v6H9Zm9-15v1H6V5h12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTownhall;
