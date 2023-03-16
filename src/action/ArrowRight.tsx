import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.182 11.47v-.007c0-.143-.03-.28-.08-.407l-.005-.017a1.115 1.115 0 0 0-.247-.37l-5.839-5.84a1.124 1.124 0 1 0-1.59 1.592l3.93 3.93-13.23.042a1.125 1.125 0 0 0 .004 2.25h.004l13.204-.042-4.016 4.015a1.124 1.124 0 1 0 1.59 1.59l5.946-5.944v-.001c.104-.104.188-.229.245-.368l.004-.015c.05-.126.079-.264.08-.408Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowRight;
