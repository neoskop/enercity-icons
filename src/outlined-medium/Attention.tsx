import * as React from 'react';
import { SVGProps } from 'react';
const SvgAttention = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.752 8.25h-1.5c-.218 0-.42.09-.563.255a.735.735 0 0 0-.18.592l.743 6a.75.75 0 0 0 .742.66.752.752 0 0 0 .743-.66l.758-6a.743.743 0 0 0-.18-.592.735.735 0 0 0-.563-.255Zm.375 9.375a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.672 18.938 14.034 2.663A2.342 2.342 0 0 0 12.002 1.5c-.84 0-1.605.435-2.033 1.163L.332 18.937a2.35 2.35 0 0 0-.023 2.37A2.333 2.333 0 0 0 2.364 22.5h19.268c.862 0 1.627-.442 2.055-1.192.427-.75.42-1.636-.023-2.37h.008Zm-1.282 1.627a.859.859 0 0 1-.75.435H2.364a.859.859 0 0 1-.75-.435.845.845 0 0 1 0-.863L11.26 3.42a.84.84 0 0 1 .743-.42.84.84 0 0 1 .742.42l9.638 16.282a.811.811 0 0 1 0 .863h.008Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAttention;
