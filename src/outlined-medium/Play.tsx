import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.547 5.999a.3.3 0 0 0-.158.04.25.25 0 0 0-.14.224v11.47c0 .122.077.188.14.224.049.027.18.08.324-.008l9.161-5.735a.25.25 0 0 0 0-.431L8.713 6.047A.3.3 0 0 0 8.547 6m-.003 13.498a1.8 1.8 0 0 1-.881-.228 1.74 1.74 0 0 1-.913-1.536V6.263c0-.645.342-1.218.912-1.535a1.82 1.82 0 0 1 1.846.048l9.161 5.735a1.746 1.746 0 0 1 0 2.974L9.508 19.22a1.8 1.8 0 0 1-.964.277"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlay;
