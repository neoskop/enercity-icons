import * as React from 'react';
import { SVGProps } from 'react';
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.01 7.667 11.235-5.625L12.33.085a.7.7 0 0 0-.668 0L.758 5.537zm6.24 16.05v-11.25L0 6.842v10.785c0 .285.157.54.412.667l8.13 4.065 2.625 1.313zM23.242 5.544 12 11.162 6.69 8.507 17.925 2.89zM24 17.627V6.842l-11.25 5.625v11.242l10.83-5.415a.75.75 0 0 0 .42-.667"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPackage;
