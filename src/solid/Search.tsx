import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.728 10.845a.747.747 0 0 1-.75-.75 4.127 4.127 0 0 0-4.126-4.125.747.747 0 0 1-.75-.75c0-.413.338-.75.75-.75a5.63 5.63 0 0 1 5.625 5.625c0 .42-.33.75-.75.75m5.054 8.13-4.41-4.41a7.07 7.07 0 0 0 1.583-4.47C17.955 6.18 14.768 3 10.853 3S3.75 6.18 3.75 10.095a7.107 7.107 0 0 0 7.102 7.102 7.1 7.1 0 0 0 4.463-1.575l4.41 4.41c.142.15.337.225.525.225a.74.74 0 0 0 .532-.225.747.747 0 0 0 0-1.057"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
