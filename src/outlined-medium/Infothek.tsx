import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfothek = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 24a11.87 11.87 0 0 1-6.352-1.823L1.695 23.25a.75.75 0 0 1-.945-.945l1.05-3.953A11.87 11.87 0 0 1 0 12a12 12 0 1 1 12 12m-6.225-3.383a.75.75 0 0 1 .42.128A10.4 10.4 0 0 0 12 22.5 10.5 10.5 0 1 0 1.5 12a10.4 10.4 0 0 0 1.755 5.805.75.75 0 0 1 .105.615l-.802 3 3-.803a1 1 0 0 1 .217 0M12 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.125 7.5h.375a.75.75 0 1 1 0 1.5h-3a.75.75 0 1 1 0-1.5h.375V12H10.5a.75.75 0 0 1 0-1.5h2.25a.366.366 0 0 1 .375.367z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfothek;
