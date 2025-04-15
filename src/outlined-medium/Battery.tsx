import * as React from 'react';
import { SVGProps } from 'react';
const SvgBattery = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 4.502c0-.414.337-.752.752-.752H9V1.5h6v2.25h2.248c.414 0 .752.338.752.752v17.246a.753.753 0 0 1-.752.752H6.752A.753.753 0 0 1 6 21.748zM6.752 24h10.496a2.255 2.255 0 0 0 2.252-2.252V4.502a2.255 2.255 0 0 0-2.252-2.252H16.5V1.5C16.5.673 15.827 0 15 0H9c-.827 0-1.5.673-1.5 1.5v.75h-.748A2.255 2.255 0 0 0 4.5 4.502v17.246A2.255 2.255 0 0 0 6.752 24m5.895-12.054 2.14.661a.29.29 0 0 1 .147.462l-5.41 6.317c-.216.265-.646.03-.524-.285l2.232-5.128-2.112-1.555a.287.287 0 0 1-.033-.438l5.463-5.14c.237-.234.585.023.449.323z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBattery;
