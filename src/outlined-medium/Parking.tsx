import * as React from 'react';
import { SVGProps } from 'react';
const SvgParking = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.5 12c0 5.79 4.71 10.5 10.5 10.5S22.5 17.79 22.5 12 17.79 1.5 12 1.5 1.5 6.21 1.5 12M0 12C0 5.384 5.384 0 12 0s12 5.384 12 12-5.384 12-12 12S0 18.616 0 12m10.5.018c1.233.034 3.075.049 3.684-.555A2.73 2.73 0 0 0 15 9.51c0-.736-.29-1.43-.816-1.951-.817-.812-2.376-.827-3.684-.815zm-.75-6.767.524-.005h.012c1.54-.02 3.65-.045 4.954 1.248A4.22 4.22 0 0 1 16.5 9.51a4.22 4.22 0 0 1-1.26 3.018c-.866.858-2.39 1.006-3.848 1.006q-.394-.002-.774-.014l-.118-.003V18A.75.75 0 1 1 9 18V6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgParking;
