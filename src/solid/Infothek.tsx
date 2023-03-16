import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfothek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 0A12 12 0 0 0 0 12a11.865 11.865 0 0 0 1.823 6.352L.75 22.305a.75.75 0 0 0 .945.945l3.953-1.05A11.865 11.865 0 0 0 12 24a12 12 0 0 0 0-24Zm0 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm1.5 12h-3a.75.75 0 1 1 0-1.5h.375V12H10.5a.75.75 0 1 1 0-1.5h2.25a.368.368 0 0 1 .367.367V16.5h.383a.75.75 0 1 1 0 1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgInfothek;
