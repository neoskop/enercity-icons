import * as React from 'react';
import { SVGProps } from 'react';
const SvgGoal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={24}
    viewBox="0 0 27 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.543 12.902 8.378 9.68a.425.425 0 0 0-.703 0L1.076 20.63a.427.427 0 0 0 .352.664h23.15a.421.421 0 0 0 .352-.656L14.776 4.192a.418.418 0 0 0-.703 0l-4.441 7.35"
      fill="currentColor"
    />
    <path
      d="M10.543 12.902 8.378 9.68a.425.425 0 0 0-.703 0L1.076 20.63a.427.427 0 0 0 .352.664h23.15a.421.421 0 0 0 .352-.656L14.776 4.192a.418.418 0 0 0-.703 0l-4.441 7.35m3.371.458v2.743"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="m11.562 11.036 2.972 1.376c.303.136.311.56.024.712l-3.555 1.864v-3.592c0-.288.296-.48.56-.36Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgGoal;
