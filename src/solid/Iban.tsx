import * as React from 'react';
import { SVGProps } from 'react';
const SvgIban = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.076 10.457h-2.45v8.664h2.45zm-9.496 0h2.72v8.664H7.58zm-4.324 0h-.944A1.313 1.313 0 0 1 1 9.145v-2.48c0-.488.27-.937.704-1.162L11.853.152c.383-.203.84-.203 1.222 0L23.23 5.495c.435.225.705.675.705 1.162v2.48c0 .728-.592 1.313-1.312 1.313v.007h-.944v8.664h.952c.727 0 1.311.592 1.311 1.311v2.256c0 .727-.592 1.312-1.311 1.312H2.312A1.313 1.313 0 0 1 1 22.688v-2.256c0-.727.592-1.311 1.312-1.311h.944zm16.923 8.656h-1.604v-8.656h1.604zm-8.38 0h1.327v-8.656H11.8zm-5.725 0H4.747v-8.656h1.327z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIban;
