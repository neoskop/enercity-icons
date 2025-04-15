import * as React from 'react';
import { SVGProps } from 'react';
const SvgBatteryInactive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.001 4.5c0-.412.338-.75.75-.75h2.25V1.5H15v2.25h2.061l1.237-1.237a2.24 2.24 0 0 0-1.05-.263h-.75V1.5A1.5 1.5 0 0 0 15 0H9c-.825 0-1.499.675-1.499 1.5v.75h-.75a2.257 2.257 0 0 0-2.25 2.25v11.813l1.5-1.5zM18 21.75c0 .413-.338.75-.75.75H6.75a.75.75 0 0 1-.75-.75v-2.692l12-12zm3.53-19.283a.77.77 0 0 0-.952-.097l-.053.052c-.023.008-.038.023-.06.045l-1.147 1.155c-.02.015-16.85 16.846-16.85 16.846a.756.756 0 0 0 0 1.064c.15.143.338.218.533.218a.77.77 0 0 0 .532-.218l.967-.974v1.192A2.257 2.257 0 0 0 6.751 24H17.25a2.256 2.256 0 0 0 2.25-2.25V5.557l2.032-2.025a.756.756 0 0 0 0-1.065"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryInactive;
