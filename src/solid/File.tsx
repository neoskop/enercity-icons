import * as React from 'react';
import { SVGProps } from 'react';
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.84 6.63a.727.727 0 0 1-.728-.72V1.823l4.815 4.807zm.66 6.105h-9a.747.747 0 0 1-.75-.75c0-.412.337-.75.75-.75h9c.42 0 .75.338.75.75 0 .42-.33.75-.75.75m0 3.135h-9a.75.75 0 0 1-.75-.75c0-.412.337-.75.75-.75h9c.42 0 .75.338.75.75 0 .413-.33.75-.75.75m0 3.135h-9a.75.75 0 0 1-.75-.75c0-.412.337-.75.75-.75h9c.42 0 .75.338.75.75 0 .413-.33.75-.75.75m5.032-12.892L15.637.218A.76.76 0 0 0 15.106 0H3c-.413 0-.75.33-.75.75v22.485c0 .42.337.75.75.75h18c.42 0 .75-.33.75-.75V6.645a.76.76 0 0 0-.218-.532"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFile;
