import * as React from 'react';
import { SVGProps } from 'react';
const SvgError = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5ZM12 24C5.383 24 0 18.616 0 12 0 5.383 5.383 0 12 0c6.616 0 12 5.383 12 12 0 6.616-5.384 12-12 12Zm.678-8.19c.172.18.277.42.277.675a.929.929 0 0 1-.277.675c-.18.21-.427.285-.675.285a.993.993 0 0 1-.713-.285 1.043 1.043 0 0 1-.247-.675c0-.255.105-.495.285-.675.353-.352.99-.352 1.35 0Zm.277-3.233v-5.04c0-.532-.42-.96-.96-.96a.958.958 0 0 0-.96.96v5.04c0 .533.428.96.96.96.54 0 .96-.427.96-.96Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgError;
