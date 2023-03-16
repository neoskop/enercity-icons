import * as React from 'react';
import { SVGProps } from 'react';
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.567 23.767C18.19 17.264 21 12.385 21 9.131 21 4.088 16.97 0 12 0S3 4.088 3 9.13c0 3.255 2.81 8.134 8.433 14.637a.75.75 0 0 0 1.134 0ZM4.5 9.131C4.5 4.91 7.863 1.5 12 1.5c4.137 0 7.5 3.412 7.5 7.63 0 2.679-2.483 7.084-7.5 12.994-5.017-5.91-7.5-10.315-7.5-12.993ZM12 13.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPin;
