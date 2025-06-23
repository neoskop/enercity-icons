import * as React from 'react';
import { SVGProps } from 'react';
const SvgIban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.608 27.276h-7.713v24.546h7.713V27.276Zm-26.834 0h8.471v24.546h-8.471V27.276Zm-10.65 0H4.027A3.031 3.031 0 0 1 1 24.249v-6.723c0-1.13.62-2.158 1.618-2.678L30.162.352a2.99 2.99 0 0 1 2.817 0l27.543 14.496a3.019 3.019 0 0 1 1.619 2.678v6.723a3.031 3.031 0 0 1-3.027 3.027h-3.097v24.546h3.087a3.031 3.031 0 0 1 3.027 3.027v6.124A3.031 3.031 0 0 1 59.104 64H4.027A3.031 3.031 0 0 1 1 60.973v-6.124a3.031 3.031 0 0 1 3.027-3.027h3.097V27.276Zm7.643 24.546H10.11V27.276h4.656v24.546Zm14.476 0h4.655V27.276h-4.655v24.546Zm23.777 0h-5.415V27.276h5.415v24.546ZM31.59 3 3.997 17.526v6.723l55.117.03.03-6.753L31.59 3ZM4.027 54.819l-.03.03v6.124l55.117.03.03-6.154-55.117-.03Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgIban;
