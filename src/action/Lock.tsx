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
      d="M18.227 22c.5 0 .906-.407.906-.907v-9.17c0-.5-.406-.906-.906-.906H5.907c-.5 0-.907.407-.907.907v9.169c0 .5.407.907.907.907h12.32ZM12.15 2a3.332 3.332 0 0 0-3.328 3.328v3.689h6.656V5.328A3.332 3.332 0 0 0 12.15 2Zm5.328 7.017h.75a2.91 2.91 0 0 1 2.906 2.907v9.169A2.91 2.91 0 0 1 18.227 24H5.907A2.91 2.91 0 0 1 3 21.093v-9.17a2.91 2.91 0 0 1 2.907-2.906h.914V5.328A5.334 5.334 0 0 1 12.15 0a5.334 5.334 0 0 1 5.328 5.328v3.689Zm-6.41 5.658a1 1 0 0 1 2 0v3.667a1 1 0 0 1-2 0v-3.667Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLock;
