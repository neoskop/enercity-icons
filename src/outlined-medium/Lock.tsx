import * as React from 'react';
import { SVGProps } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.299 22.5c.662 0 1.2-.538 1.2-1.2v-9.378a1.2 1.2 0 0 0-1.2-1.2h-12.6c-.66 0-1.2.537-1.2 1.2v9.377c0 .663.54 1.201 1.2 1.201zm-6.214-21a3.68 3.68 0 0 0-3.677 3.676v4.046h7.352V5.176A3.68 3.68 0 0 0 12.085 1.5m5.175 7.722h1.04c1.49 0 2.7 1.21 2.7 2.7v9.377A2.703 2.703 0 0 1 18.3 24H5.7A2.704 2.704 0 0 1 3 21.3v-9.378c0-1.49 1.212-2.7 2.7-2.7h1.21V5.176A5.18 5.18 0 0 1 12.084 0a5.18 5.18 0 0 1 5.175 5.176zm-6.01 5.514a.75.75 0 1 1 1.5 0v3.75a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLock;
