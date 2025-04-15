import * as React from 'react';
import { SVGProps } from 'react';
const SvgTraining = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23.528 10.476a.75.75 0 0 0 0-1.395l-11.25-4.53a.8.8 0 0 0-.556 0L.473 9.08a.75.75 0 0 0 0 1.395l11.25 4.47q.133.054.278.052a.7.7 0 0 0 .277-.052L21 11.48v5.017c0 .413.337.75.75.75s.75-.337.75-.75V10.88zM19.5 16.948v-3.45l-7.148 2.93a.9.9 0 0 1-.352.07.9.9 0 0 1-.352-.07L4.5 13.498v3.45c0 1.913 3.36 3.3 7.5 3.3s7.5-1.387 7.5-3.3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTraining;
