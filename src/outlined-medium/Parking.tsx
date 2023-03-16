import * as React from 'react';
import { SVGProps } from 'react';
const SvgParking = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 12c0 5.79 4.71 10.5 10.5 10.5S22.5 17.79 22.5 12 17.79 1.5 12 1.5 1.5 6.21 1.5 12ZM0 12C0 5.383 5.383 0 12 0c6.616 0 12 5.383 12 12 0 6.616-5.384 12-12 12-6.617 0-12-5.384-12-12Zm10.5.018c1.233.034 3.075.049 3.684-.555A2.733 2.733 0 0 0 15 9.51c0-.736-.29-1.43-.816-1.951-.817-.812-2.376-.827-3.684-.815v5.274Zm-.75-6.767.524-.005h.012c1.54-.02 3.65-.045 4.954 1.248A4.22 4.22 0 0 1 16.5 9.51a4.22 4.22 0 0 1-1.26 3.018c-.866.858-2.39 1.006-3.848 1.006-.264 0-.52-.007-.774-.014l-.118-.003V18A.75.75 0 1 1 9 18V6a.75.75 0 0 1 .75-.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgParking;
