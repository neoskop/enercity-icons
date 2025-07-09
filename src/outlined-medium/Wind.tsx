import * as React from 'react';
import { SVGProps } from 'react';
const SvgWind = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 9.75H2.25A.75.75 0 0 1 1.5 9c0-.412.337-.75.75-.75h10.5A2.257 2.257 0 0 0 15 6a2.257 2.257 0 0 0-2.25-2.25A.75.75 0 0 1 12 3c0-.413.338-.75.75-.75 2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75m-3 12A.75.75 0 0 1 9 21c0-.413.338-.75.75-.75A2.257 2.257 0 0 0 12 18a2.257 2.257 0 0 0-2.25-2.25h-7.5A.75.75 0 0 1 1.5 15c0-.412.337-.75.75-.75h7.5c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75"
    />
    <path
      fill="currentColor"
      d="M19.5 12.75H2.25A.75.75 0 0 1 1.5 12c0-.412.337-.75.75-.75H19.5c.825 0 1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5a.75.75 0 0 1-.75-.75c0-.412.337-.75.75-.75a3 3 0 1 1 0 6"
    />
  </svg>
);
export default SvgWind;
