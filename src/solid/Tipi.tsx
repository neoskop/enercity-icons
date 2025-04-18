import * as React from 'react';
import { SVGProps } from 'react';
const SvgTipi = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.333 16.913c.255-.503 1.079-.503 1.334 0l2.798 5.586H8.542zM9.75 13.5c.412 0 .75.337.75.75s-.338.75-.75.75a.75.75 0 0 1-.75-.75c0-.413.338-.75.75-.75m2.25 0c.412 0 .75.337.75.75s-.338.75-.75.75a.75.75 0 0 1-.75-.75c0-.413.338-.75.75-.75m2.25 0c.412 0 .75.337.75.75s-.338.75-.75.75a.75.75 0 0 1-.75-.75c0-.413.338-.75.75-.75m9 9h-1.77L12.824 3.967l1.358-2.902a.76.76 0 0 0-.368-.998.76.76 0 0 0-.998.368L12 2.19 11.183.436a.76.76 0 0 0-.998-.368.76.76 0 0 0-.368.998l1.358 2.902L2.52 22.499H.75a.75.75 0 0 0-.75.75c0 .413.338.75.75.75h22.5c.412 0 .75-.337.75-.75a.753.753 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTipi;
