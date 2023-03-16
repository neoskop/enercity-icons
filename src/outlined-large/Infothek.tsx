import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfothek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="currentColor">
      <path d="M32 4A28 28 0 0 0 4 32a27.72 27.72 0 0 0 4.31 14.92l-2.49 9.43a1.5 1.5 0 0 0 1.83 1.83l9.43-2.49A27.72 27.72 0 0 0 32 60a28 28 0 1 0 0-56Zm0 53a24.78 24.78 0 0 1-13.83-4.18 1.47 1.47 0 0 0-.83-.25c-.13-.02-.26-.02-.39 0l-7.57 2 2-7.57a1.46 1.46 0 0 0-.2-1.22A25 25 0 1 1 32 57Z" />
      <path d="M31.5 24a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM35 41h-1V28a1 1 0 0 0-1-1h-4a2 2 0 0 0 0 4h1v10h-1a2 2 0 0 0 0 4h6a2 2 0 0 0 0-4Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          transform="translate(4 4)"
          d="M0 0h56v56H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInfothek;
