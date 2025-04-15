import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.182 11.47v-.007c0-.143-.03-.28-.08-.407l-.005-.017a1.1 1.1 0 0 0-.247-.37l-5.839-5.84a1.124 1.124 0 1 0-1.59 1.592l3.93 3.93-13.23.042a1.125 1.125 0 0 0 .004 2.25h.004l13.204-.042-4.016 4.015a1.124 1.124 0 1 0 1.59 1.59l5.946-5.944v-.001q.158-.158.245-.368l.004-.015q.077-.19.08-.408"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRight;
