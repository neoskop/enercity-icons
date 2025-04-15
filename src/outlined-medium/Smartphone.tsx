import * as React from 'react';
import { SVGProps } from 'react';
const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.328 22.5c.604 0 1.094-.49 1.094-1.094V2.594c0-.603-.49-1.094-1.094-1.094h-.596a1.106 1.106 0 0 1-1.106 1.094H9.462A1.106 1.106 0 0 1 8.357 1.5h-.513c-.603 0-1.094.49-1.094 1.094v18.812c0 .604.49 1.094 1.094 1.094zM7.844 0h8.484a2.597 2.597 0 0 1 2.594 2.594v18.812A2.597 2.597 0 0 1 16.328 24H7.844a2.597 2.597 0 0 1-2.594-2.594V2.594A2.597 2.597 0 0 1 7.844 0m1.95 20.25h4.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 1 1 0-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmartphone;
