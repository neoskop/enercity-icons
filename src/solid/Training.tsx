import * as React from 'react';
import { SVGProps } from 'react';
const SvgTraining = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23.527 10.476a.75.75 0 0 0 0-1.395l-11.25-4.53a.786.786 0 0 0-.554 0L.473 9.08a.75.75 0 0 0 0 1.395l11.25 4.47a.71.71 0 0 0 .277.052.702.702 0 0 0 .277-.052L21 11.48v5.017c0 .413.337.75.75.75s.75-.337.75-.75V10.88l1.027-.405ZM19.5 16.948v-3.45l-7.148 2.93a.909.909 0 0 1-.352.07.909.909 0 0 1-.352-.07L4.5 13.498v3.45c0 1.913 3.36 3.3 7.5 3.3 4.14 0 7.5-1.387 7.5-3.3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTraining;
