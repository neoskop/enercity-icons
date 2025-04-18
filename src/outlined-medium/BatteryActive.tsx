import * as React from 'react';
import { SVGProps } from 'react';
const SvgBatteryActive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.248 22.5a.753.753 0 0 0 .752-.752V4.502a.753.753 0 0 0-.752-.752H15V1.5H9v2.25H6.752A.753.753 0 0 0 6 4.502v17.246c0 .415.338.752.752.752zM16.5 2.25h.748A2.255 2.255 0 0 1 19.5 4.502v17.246A2.255 2.255 0 0 1 17.248 24H6.752A2.255 2.255 0 0 1 4.5 21.748V4.502A2.255 2.255 0 0 1 6.752 2.25H7.5V1.5C7.5.673 8.173 0 9 0h6c.827 0 1.5.673 1.5 1.5zM12.75 12h2.3c.256 0 .49.143.613.374a.71.71 0 0 1-.033.735l-3.132 4.583a.69.69 0 0 1-.765.279.69.69 0 0 1-.483-.67V14.25h-2.3a.7.7 0 0 1-.613-.374.71.71 0 0 1 .033-.735l3.133-4.584a.68.68 0 0 1 .764-.278.69.69 0 0 1 .483.67z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryActive;
