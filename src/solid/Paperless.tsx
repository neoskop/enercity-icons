import * as React from 'react';
import { SVGProps } from 'react';
const SvgPaperless = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.925 19.868a11.87 11.87 0 0 0 2.993-7.905C23.918 5.355 18.563 0 11.955 0A11.9 11.9 0 0 0 4.05 2.993l2.295 2.294a1.5 1.5 0 0 1 1.185-.585h5.67v.008c.195 0 .39.067.533.21l3.847 3.848c.143.142.21.337.21.532h.008v7.44zm-1.057 1.065a11.9 11.9 0 0 1-7.913 2.985C5.355 23.918 0 18.563 0 11.963c0-3.03 1.133-5.797 2.985-7.913L6.03 7.095v10.073c0 .825.668 1.492 1.5 1.492h8.768c.367 0 .69-.135.952-.345zm-3.57-5.693v-5.19H13.2a.75.75 0 0 1-.75-.75V6.203H7.53v.269zM7.53 17.168l8.565-.008L7.53 8.595z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPaperless;
