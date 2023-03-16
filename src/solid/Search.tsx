import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.727 10.845a.747.747 0 0 1-.75-.75 4.127 4.127 0 0 0-4.125-4.125.747.747 0 0 1-.75-.75c0-.413.338-.75.75-.75a5.632 5.632 0 0 1 5.625 5.625c0 .42-.33.75-.75.75Zm5.055 8.13-4.41-4.41a7.073 7.073 0 0 0 1.583-4.47C17.955 6.18 14.768 3 10.853 3 6.937 3 3.75 6.18 3.75 10.095a7.107 7.107 0 0 0 7.102 7.102 7.089 7.089 0 0 0 4.463-1.575l4.41 4.41c.142.15.337.225.525.225a.744.744 0 0 0 .532-.225.747.747 0 0 0 0-1.057Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSearch;
