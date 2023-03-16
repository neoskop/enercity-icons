import * as React from 'react';
import { SVGProps } from 'react';
const SvgSocket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56.5 61c2.481 0 4.5-2.019 4.5-4.5v-49C61 5.019 58.981 3 56.5 3h-49A4.505 4.505 0 0 0 3 7.5v49C3 58.981 5.019 61 7.5 61h49ZM7.5 0h49C60.636 0 64 3.364 64 7.5v49c0 4.136-3.364 7.5-7.5 7.5h-49C3.364 64 0 60.636 0 56.5v-49C0 3.364 3.364 0 7.5 0ZM12 32c0-11.028 8.972-20 20-20s20 8.972 20 20-8.972 20-20 20a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 3 0v3.424C42.173 48.161 49 40.868 49 32s-6.827-16.161-15.5-16.924V18.5a1.5 1.5 0 0 1-3 0v-3.424C21.827 15.839 15 23.132 15 32c0 7.232 4.618 13.696 11.492 16.083a1.501 1.501 0 0 1-.984 2.834C17.429 48.111 12 40.509 12 32Zm27-2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2Zm0-3c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5Zm-14 7c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Zm0-7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSocket;
