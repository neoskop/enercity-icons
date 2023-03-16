import * as React from 'react';
import { SVGProps } from 'react';
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.685 22.688c-.142.225-.315.45-.517.645a.732.732 0 0 1-1.058 0c-.008 0-.008-.015-.015-.023-.008 0-.015-.007-.022-.007a.756.756 0 0 1 0-1.065c.134-.135.262-.285.39-.428a2.374 2.374 0 0 0-.346-2.895 2.35 2.35 0 0 0-1.672-.697h-.008a2.392 2.392 0 0 0-1.68.705.782.782 0 0 1-.532.217.768.768 0 0 1-.532-.217.756.756 0 0 1 0-1.065c.93-.923.937-2.438.007-3.36a2.379 2.379 0 0 0-3.36.007l-5.962 5.963a3.147 3.147 0 0 1-4.455 0 3.15 3.15 0 0 1 0-4.455.756.756 0 0 1 1.064 0 .756.756 0 0 1 0 1.065 1.648 1.648 0 0 0 0 2.332 1.661 1.661 0 0 0 2.333 0l5.963-5.962c.922-.93.93-2.438.007-3.368a2.388 2.388 0 0 0-3.367.015.75.75 0 0 1-1.058-1.065c.45-.45.697-1.05.697-1.68a2.316 2.316 0 0 0-.69-1.68 2.379 2.379 0 0 0-3.36.008.756.756 0 0 1-1.065 0 .747.747 0 0 1 0-1.058A13.121 13.121 0 0 1 10.793.75c3.277 0 6.36 1.2 8.782 3.368l1.838-1.845a.756.756 0 0 1 1.064 0c.293.3.293.772 0 1.065l-1.845 1.837c4.448 4.973 4.463 12.518.053 17.513Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgUmbrella;
