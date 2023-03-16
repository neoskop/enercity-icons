import * as React from 'react';
import { SVGProps } from 'react';
const SvgHouseConnection = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m31.906 3.519-24.4 22.093a1.502 1.502 0 0 1-2.014-2.225l25.404-23a1.504 1.504 0 0 1 2.009-.004l25.598 23a1.502 1.502 0 0 1-2.006 2.233L31.906 3.519ZM30 58.999c0 1.103.897 2 2 2s2-.897 2-2c0-1.102-.897-2-2-2s-2 .898-2 2Zm6.745-1.5H62.5a1.5 1.5 0 0 1 0 3H36.745C36.104 62.52 34.23 64 32 64s-4.104-1.479-4.745-3.5H1.5a1.5 1.5 0 0 1 0-3h25.755a4.99 4.99 0 0 1 3.245-3.245V50h-18a1.5 1.5 0 0 1-1.5-1.5v-21a1.5 1.5 0 0 1 3 0V47h36V27.5a1.5 1.5 0 0 1 3 0v21a1.5 1.5 0 0 1-1.5 1.5h-18v4.255a4.99 4.99 0 0 1 3.245 3.245Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHouseConnection;
