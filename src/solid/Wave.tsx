import * as React from 'react';
import { SVGProps } from 'react';
const SvgWave = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.875 11.89 17.7 20.132c-1.117 1.807-2.97 3.09-5.212 3.615a9.903 9.903 0 0 1-7.478-1.245C.592 19.742.75 14.455.75 14.237V3.752c0-.375.27-.69.637-.743.068-.015 1.575-.225 2.708.75.772.66 1.162 1.673 1.162 2.993.008.72.24 1.927.728 2.22.007 0 .015.007.03.007.09-.09.217-.3.292-.427l4.216-6.615a2.533 2.533 0 0 1 3.48-.81c.3.18.554.427.75.705l.367-.615a2.522 2.522 0 0 1 3.495-.833c.57.353.975.915 1.133 1.575.142.608.044 1.23-.248 1.778.36.037.72.15 1.05.352a2.546 2.546 0 0 1 .817 3.495l-.3.48a2.4 2.4 0 0 1 .983.338 2.54 2.54 0 0 1 .825 3.488Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgWave;
