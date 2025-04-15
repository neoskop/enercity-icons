import * as React from 'react';
import { SVGProps } from 'react';
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.12 1.963c3.05.84 5.642 3.678 5.642 8.408 0 0 0 4.414 1.855 7.219 0 0 .946 1.893-.945 2.207H3.328c-1.891-.316-.945-2.207-.945-2.207 1.891-2.839 1.891-7.219 1.891-7.219 0-4.73 2.594-7.532 5.642-8.408a2.107 2.107 0 0 1 4.204 0m1.051 18.884A3.14 3.14 0 0 1 12.018 24a3.163 3.163 0 0 1-3.154-3.153z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBell;
