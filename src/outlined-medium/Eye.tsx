import * as React from 'react';
import { SVGProps } from 'react';
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17.454c-4.12 0-7.71-4.004-8.8-5.352C4.29 10.753 7.88 6.75 12 6.75s7.71 4.003 8.801 5.352c-1.09 1.348-4.68 5.352-8.8 5.352M1.64 12.538c.188.262 4.656 6.416 10.36 6.416 5.705 0 10.173-6.154 10.36-6.416a.75.75 0 0 0 0-.873C22.174 11.404 17.706 5.25 12 5.25S1.828 11.403 1.64 11.665a.75.75 0 0 0 0 .873m8.11-.436c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25-2.25-1.01-2.25-2.25m-1.5 0a3.754 3.754 0 0 0 3.75 3.75 3.754 3.754 0 0 0 3.75-3.75A3.754 3.754 0 0 0 12 8.352a3.754 3.754 0 0 0-3.75 3.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEye;
