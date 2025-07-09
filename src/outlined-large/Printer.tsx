import * as React from 'react';
import { SVGProps } from 'react';
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={64}
    fill="none"
    viewBox="0 0 65 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M51.804 52.866h9.201V31.977c0-2.537-2.063-4.6-4.601-4.6h-6.023l-.036.004-.04.004H13.7l-.04-.004-.037-.004H7.601a4.605 4.605 0 0 0-4.6 4.6v20.889h9.2v-6.634a1.5 1.5 0 0 1 1.5-1.5h36.603a1.5 1.5 0 0 1 1.5 1.5zM15.2 61h33.604V47.732H15.2zm33.604-36.623H15.2V3h33.604zm3 0h4.6c4.192 0 7.601 3.41 7.601 7.6v22.389a1.5 1.5 0 0 1-1.5 1.5H51.804V62.5a1.5 1.5 0 0 1-1.5 1.5H13.7a1.5 1.5 0 0 1-1.5-1.5v-6.634H1.5a1.5 1.5 0 0 1-1.5-1.5V31.977c0-4.19 3.41-7.6 7.601-7.6h4.6V1.5A1.5 1.5 0 0 1 13.7 0h36.603a1.5 1.5 0 0 1 1.5 1.5zm-42.17 8.15h4.067a1.5 1.5 0 0 1 0 3H9.635a1.5 1.5 0 1 1 0-3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPrinter;
