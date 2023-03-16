import * as React from 'react';
import { SVGProps } from 'react';
const SvgDangerElectricity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="currentColor">
      <path d="M60.5 60.5h-57c-1.3 0-2.4-.7-3-1.8-.6-1.1-.6-2.4 0-3.5L29 6.2c.6-1.1 1.8-1.7 3-1.7 1.3 0 2.4.7 3 1.7l28.5 49c.6 1.1.6 2.4 0 3.5s-1.7 1.8-3 1.8ZM31.6 7.7l-28.5 49c-.1.2-.1.4 0 .5.1.1.2.3.4.3h57c.3 0 .4-.2.4-.2.1-.1.1-.3 0-.5l-28.5-49c-.1-.2-.3-.2-.4-.2-.1 0-.3-.1-.4.1Z" />
      <path d="M30.1 53.5c-.2 0-.4 0-.6-.1-1-.3-1.7-1.4-1.5-2.5l1-7.9h-2.6c-.7 0-1.4-.3-1.8-.9-.5-.6-.7-1.4-.6-2.2l2.2-13.3c.1-1.2 1.2-2.1 2.4-2.1h6.9c.8 0 1.5.4 2 1.1.5.8.6 1.8.3 2.6l-2 5.2h1.8c.9 0 1.6.5 2.1 1.2.5.8.5 1.9 0 2.7l-7.7 15c-.4.8-1.1 1.2-1.9 1.2Zm-.8-2.6s0 .1 0 0ZM27.1 40h5.4l-.9 6.4 5.2-10h-5.3l3.4-8.9h-5.7L27.1 40Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          transform="translate(0 4)"
          d="M0 0h64v56.5H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDangerElectricity;
