import * as React from 'react';
import { SVGProps } from 'react';
const SvgBasicSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.375 17.25a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75Zm0-2.25a5.625 5.625 0 1 1 0-11.25 5.625 5.625 0 0 1 0 11.25Zm8.518 1.131 4.24 4.235a1.25 1.25 0 0 1-1.767 1.768l-4.241-4.235a1.25 1.25 0 0 1 1.768-1.768Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBasicSearch;
