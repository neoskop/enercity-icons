import * as React from 'react';
import { SVGProps } from 'react';
const SvgThumbsDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M58.5 33h-18a1.5 1.5 0 0 1 0-3h15c1.379 0 2.5-1.121 2.5-2.5S56.879 25 55.5 25h-15a1.5 1.5 0 0 1 0-3h12c1.379 0 2.5-1.121 2.5-2.5S53.879 17 52.5 17h-12a1.5 1.5 0 0 1 0-3h9c1.379 0 2.5-1.121 2.5-2.5S50.879 9 49.5 9H17v26.058c11.771.826 16 11.362 16 20.442 0 1.3.632 3.5 3 3.5 2.062 0 3-1.814 3-3.5v-16a1.5 1.5 0 0 1 1.5-1.5h18c1.379 0 2.5-1.121 2.5-2.5S59.879 33 58.5 33ZM14 7.5c0-.827-.673-1.5-1.5-1.5h-8C3.673 6 3 6.673 3 7.5v29c0 .827.673 1.5 1.5 1.5h8c.827 0 1.5-.673 1.5-1.5v-29Zm50 28c0 3.032-2.468 5.5-5.5 5.5H42v14.5c0 3.151-2.103 6.5-6 6.5-3.939 0-6-3.27-6-6.5 0-8.129-3.536-16.771-13.297-17.436C16.064 39.773 14.429 41 12.5 41h-8A4.505 4.505 0 0 1 0 36.5v-29C0 5.019 2.019 3 4.5 3h8c1.953 0 3.603 1.258 4.224 3H49.5c3.032 0 5.5 2.468 5.5 5.5a5.45 5.45 0 0 1-.766 2.785A5.506 5.506 0 0 1 58 19.5a5.45 5.45 0 0 1-.766 2.785A5.506 5.506 0 0 1 61 27.5a5.45 5.45 0 0 1-.766 2.785A5.506 5.506 0 0 1 64 35.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgThumbsDown;
