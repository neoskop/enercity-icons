import * as React from 'react';
import { SVGProps } from 'react';
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 6.75v.866l-.043.005C7.427 8.2 3.45 10.833 1.01 15.448c-1.085 2.053 1.272 4.205 3.218 2.937l.3-.192c2.323-1.44 4.963-2.253 7.953-2.434l.268-.013v.754c0 1.933 2.277 2.966 3.732 1.693l6-5.25a2.25 2.25 0 0 0-.132-3.493l-6-4.5c-1.483-1.112-3.6-.054-3.6 1.8m2.25 0 6 4.5-6 5.25v-3q-6.896-.327-12 3 3.57-6.75 12-6.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgForward;
