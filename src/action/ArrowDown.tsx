import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.14 20.609h.007c.143 0 .28-.03.406-.079l.018-.006c.14-.057.266-.142.37-.247l5.839-5.838a1.124 1.124 0 1 0-1.59-1.591l-3.93 3.93-.043-13.23a1.125 1.125 0 0 0-2.25.005v.003l.042 13.204-4.015-4.016a1.124 1.124 0 1 0-1.591 1.591l5.945 5.945.001.001c.104.104.229.187.367.244l.016.005c.126.05.264.078.408.079Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowDown;
