import * as React from 'react';
import { SVGProps } from 'react';
const SvgSolarPanel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 22.002v-5.336h8c.044 0 .08-.02.123-.025l.73 5.361H13Zm-10.123-5.36c.042.004.08.024.123.024h8v5.336H2.146l.731-5.36ZM11 1.996v5.337H4.146l.727-5.337H11Zm8.854 5.337H13V1.997h6.127l.727 5.337ZM13 9.331h7c.044 0 .08-.019.123-.025l.73 5.362H13V9.331Zm-9.123-.025c.042.006.08.025.123.025h7v5.337H3.146l.731-5.362ZM20.991.864A1 1 0 0 0 20 0H4a1 1 0 0 0-.99.864l-3 22.002A1 1 0 0 0 1 24h22a1 1 0 0 0 .99-1.134l-3-22.002Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSolarPanel;
