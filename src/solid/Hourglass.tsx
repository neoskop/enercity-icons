import * as React from 'react';
import { SVGProps } from 'react';
const SvgHourglass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.75 6.435V4.5h.39c.607 0 1.11-.502 1.11-1.11V1.11c0-.608-.503-1.11-1.11-1.11H4.86c-.607 0-1.11.502-1.11 1.11v2.28c0 .607.503 1.11 1.11 1.11h.39v1.935c0 .833.39 1.628 1.043 2.13L10.77 12l-4.477 3.435a2.701 2.701 0 0 0-1.043 2.13V19.5h-.39c-.607 0-1.11.503-1.11 1.11v2.28c0 .607.503 1.11 1.11 1.11h14.28c.607 0 1.11-.503 1.11-1.11v-2.28c0-.607-.503-1.11-1.11-1.11h-.39v-1.935a2.7 2.7 0 0 0-1.043-2.13L13.23 12l4.477-3.435a2.701 2.701 0 0 0 1.043-2.13Zm-1.957 10.193c.285.217.457.57.457.937V19.5H6.75v-1.935c0-.367.173-.72.457-.938L12 12.946l4.793 3.683Zm.457-10.193c0 .368-.172.72-.457.938L12 11.054 7.207 7.372a1.187 1.187 0 0 1-.457-.937V4.5h10.5v1.935Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHourglass;
