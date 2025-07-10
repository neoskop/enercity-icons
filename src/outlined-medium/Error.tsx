import * as React from 'react';
import { SVGProps } from 'react';
const SvgError = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5M12 24C5.384 24 0 18.616 0 12S5.384 0 12 0s12 5.384 12 12-5.384 12-12 12m.678-8.19c.172.18.277.42.277.675a.93.93 0 0 1-.277.675c-.18.21-.427.285-.675.285a1 1 0 0 1-.713-.285 1.04 1.04 0 0 1-.247-.675c0-.255.105-.495.285-.675.353-.352.99-.352 1.35 0m.277-3.233v-5.04c0-.532-.42-.96-.96-.96a.96.96 0 0 0-.96.96v5.04c0 .533.428.96.96.96.54 0 .96-.427.96-.96"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgError;
