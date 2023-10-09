import * as React from 'react';
import { SVGProps } from 'react';
const SvgIban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.076 10.457h-2.45v8.664h2.45v-8.664Zm-3.95 0H11.8v8.656h1.326v-8.656Zm-5.546 0h2.72v8.664H7.58v-8.664Zm-2.833 0h1.327v8.656H4.747v-8.656Zm-1.491 0h-.944A1.313 1.313 0 0 1 1 9.145v-2.48c0-.488.27-.937.704-1.162L11.852.152c.383-.203.84-.203 1.222 0l10.155 5.343c.435.225.705.675.705 1.162v2.48c0 .728-.592 1.313-1.312 1.313v.007h-.944v8.664h.952c.727 0 1.311.592 1.311 1.312v2.256c0 .727-.592 1.311-1.311 1.311H2.312A1.313 1.313 0 0 1 1 22.69v-2.256c0-.727.592-1.312 1.312-1.312h.944v-8.664Zm0-1.499H2.49v-2.18l9.97-5.248 9.976 5.246v2.181H3.256Zm15.319 1.499v8.656h1.604v-8.656h-1.604ZM2.491 22.501h19.944v-1.889H2.49v1.89Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgIban;
