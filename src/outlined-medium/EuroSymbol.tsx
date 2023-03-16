import * as React from 'react';
import { SVGProps } from 'react';
const SvgEuroSymbol = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.32 16.353a4.927 4.927 0 0 1-1.246.643c-1.8.608-3.751.12-5.091-1.273-.424-.44-.75-.94-.992-1.473h4.759a.75.75 0 1 0 0-1.5H7.557a5.52 5.52 0 0 1 0-1.5h5.193a.75.75 0 1 0 0-1.5H7.99a5.236 5.236 0 0 1 .993-1.473c1.692-1.758 4.356-2.027 6.336-.64a.75.75 0 1 0 .861-1.227c-2.59-1.817-6.07-1.469-8.279.827A6.725 6.725 0 0 0 6.383 9.75H4.5a.75.75 0 1 0 0 1.5h1.55a6.965 6.965 0 0 0 0 1.5H4.5a.75.75 0 1 0 0 1.5h1.884c.311.918.812 1.78 1.517 2.513 1.248 1.297 2.907 1.992 4.612 1.992.68 0 1.368-.11 2.04-.338a6.378 6.378 0 0 0 1.627-.836.75.75 0 1 0-.86-1.228Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEuroSymbol;
