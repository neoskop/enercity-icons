import * as React from 'react';
import { SVGProps } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 6.75a6.75 6.75 0 0 1 13.497-.199l.003.199v3h1a2 2 0 0 1 2 2V22a2 2 0 0 1-2 2H4.25a2 2 0 0 1-2-2V11.75a2 2 0 0 1 2-2h1v-3Zm11.25 0v3h-9v-3l.003-.169a4.5 4.5 0 0 1 8.997.169Zm-3.38 7.767a1.125 1.125 0 0 0-2.245.108v3.75l.005.108a1.125 1.125 0 0 0 2.245-.108v-3.75l-.005-.108Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLock;
