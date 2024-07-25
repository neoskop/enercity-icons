import * as React from 'react';
import { SVGProps } from 'react';
const SvgGoal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.54 12.902 8.375 9.68a.425.425 0 0 0-.703 0L1.073 20.63a.427.427 0 0 0 .352.664h23.15a.421.421 0 0 0 .352-.656L14.773 4.192a.418.418 0 0 0-.703 0l-4.441 7.35"
      fill="currentColor"
    />
    <path
      d="m11.56 11.036 2.97 1.376c.304.136.312.56.025.712L11 14.988v-3.592c0-.288.296-.48.56-.36Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGoal;
