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
      d="M19.5 12a1.6 1.6 0 0 1-.767 1.362l-9.411 5.884a1.74 1.74 0 0 1-1.703.058 1.6 1.6 0 0 1-.869-1.42V6.117c0-.589.333-1.131.87-1.42a1.71 1.71 0 0 1 1.702.064l9.41 5.884c.482.3.768.808.768 1.356"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlay;
