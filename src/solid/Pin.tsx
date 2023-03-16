import * as React from 'react';
import { SVGProps } from 'react';
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.459 13.882.046.066c.055.082.114.162.173.25l6.618 9.366c.193.273.51.436.848.436.339 0 .655-.163.848-.436l6.604-9.36c.063-.087.124-.172.185-.25l.04-.06a8.895 8.895 0 0 0 1.374-6.154 8.968 8.968 0 0 0-3.059-5.535A9.218 9.218 0 0 0 12.143 0a9.22 9.22 0 0 0-5.994 2.205A8.965 8.965 0 0 0 3.091 7.74a8.894 8.894 0 0 0 1.373 6.154l-.005-.012Zm7.685-8.623a3.81 3.81 0 0 1 3.52 2.315 3.712 3.712 0 0 1-.827 4.09 3.85 3.85 0 0 1-4.15.814 3.752 3.752 0 0 1-2.353-3.466c0-2.073 1.705-3.753 3.81-3.753Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPin;
