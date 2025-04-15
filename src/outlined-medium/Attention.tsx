import * as React from 'react';
import { SVGProps } from 'react';
const SvgAttention = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.752 8.25h-1.5c-.218 0-.42.09-.562.255a.74.74 0 0 0-.18.592l.742 6a.75.75 0 0 0 .742.66.75.75 0 0 0 .743-.66l.758-6a.74.74 0 0 0-.18-.592.74.74 0 0 0-.563-.255m.375 9.375a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M23.672 18.938 14.034 2.663A2.34 2.34 0 0 0 12.003 1.5c-.84 0-1.605.435-2.033 1.163L.332 18.938a2.35 2.35 0 0 0-.023 2.37A2.33 2.33 0 0 0 2.364 22.5h19.268c.862 0 1.627-.442 2.055-1.192.427-.75.42-1.636-.023-2.37zm-1.282 1.627a.86.86 0 0 1-.75.435H2.364a.86.86 0 0 1-.75-.435.85.85 0 0 1 0-.863L11.26 3.42a.84.84 0 0 1 .743-.42.84.84 0 0 1 .742.42l9.638 16.282a.81.81 0 0 1 0 .863z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAttention;
