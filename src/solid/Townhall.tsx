import * as React from 'react';
import { SVGProps } from 'react';
const SvgTownhall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2v12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2V8a1 1 0 0 1 0-2h2zm14 1v1H6V5zm-9 9a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTownhall;
