import * as React from 'react';
import { SVGProps } from 'react';
const SvgCity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.5 22.5H18v-2.189h4.5zm-15-12v12h9v-12zm-1.5 3v9H1.5v-9zm11.25-6V9H6.75V7.5zm5.25-2.25h-9.75V6H18a.75.75 0 0 1 .75.75v.75h3.75zm0-1.5h-9.75V1.5h9.75zm0 15.061H18V16.5h4.5zm0-3.812H18v-2.25h4.5zm-3.75-6v.75a.75.75 0 0 1-.75.75v.75h4.5V9zM12 0h11.25a.75.75 0 0 1 .75.75v22.5a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75v-10.5A.75.75 0 0 1 .75 12H6v-1.5a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 6 6h5.25V.75A.75.75 0 0 1 12 0M3 15.75a.75.75 0 1 1 1.5 0v.75a.75.75 0 1 1-1.5 0zm.75 3a.75.75 0 0 0-.75.75v.75a.75.75 0 1 0 1.5 0v-.75a.75.75 0 0 0-.75-.75M9 13.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 1 1 0 1.5h-4.5A.75.75 0 0 1 9 13.5m.75 2.25a.75.75 0 1 0 0 1.5h4.5a.75.75 0 1 0 0-1.5zM9 19.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 1 1 0 1.5h-4.5A.75.75 0 0 1 9 19.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCity;
