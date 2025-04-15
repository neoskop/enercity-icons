import * as React from 'react';
import { SVGProps } from 'react';
const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M36.993 7.356A1.5 1.5 0 0 0 35.5 6h-6l-.145.007A1.5 1.5 0 0 0 28 7.5V41h-2.5a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5H28v6.5l.007.145A1.5 1.5 0 0 0 29.5 58h6l.145-.007A1.5 1.5 0 0 0 37 56.5V50h2.5a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5H37V7.5zM34 41h-3V9h3zm-3 14v-5h3v5zM53.5 6a1.5 1.5 0 0 1 1.493 1.356L55 7.5v20h2.5A1.5 1.5 0 0 1 59 29v6a1.5 1.5 0 0 1-1.5 1.5H55v20a1.5 1.5 0 0 1-1.355 1.493L53.5 58h-6a1.5 1.5 0 0 1-1.493-1.355L46 56.5v-20h-2.5A1.5 1.5 0 0 1 42 35v-6a1.5 1.5 0 0 1 1.5-1.5H46v-20a1.5 1.5 0 0 1 1.355-1.493L47.5 6zM49 27.5h3V9h-3zm0 9V55h3V36.5zM10 23H7.5A1.5 1.5 0 0 1 6 21.5v-6A1.5 1.5 0 0 1 7.5 14H10V7.5a1.5 1.5 0 0 1 1.355-1.493L11.5 6h6a1.5 1.5 0 0 1 1.493 1.356L19 7.5V14h2.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5H19v33.5a1.5 1.5 0 0 1-1.355 1.493L17.5 58h-6a1.5 1.5 0 0 1-1.493-1.355L10 56.5zm3 0v32h3V23zm3-9V9h-3v5zm40 19.5H45v-3h11zM27 47h11v-3H27zm-7-27H9v-3h11z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSlider;
