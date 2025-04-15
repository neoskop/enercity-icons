import * as React from 'react';
import { SVGProps } from 'react';
const SvgDangerElectricity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M21.86 22.5H2.253C1.427 22.5.75 22.125.3 21.375a2.24 2.24 0 0 1 0-2.175l9.766-16.575A2.27 2.27 0 0 1 12.019 1.5c.751 0 1.502.375 1.953 1.125L23.737 19.2a2.24 2.24 0 0 1 0 2.175c-.375.675-1.127 1.125-1.878 1.125M11.417 3.3 1.653 19.875c-.226.3-.076.6 0 .75.075.075.225.3.676.3h19.53c.376 0 .601-.225.676-.3s.226-.375 0-.75L12.695 3.3a.89.89 0 0 0-.676-.375.69.69 0 0 0-.601.375"
    />
    <path
      fill="currentColor"
      d="M14.648 12.6H12.77l1.277-2.925c.15-.3-.075-.675-.376-.675h-3.154c-.226 0-.376.15-.451.375l-.977 5.4c-.075.3.15.525.451.525h2.028l-.6 3.9c-.076.3.375.525.525.225l3.53-6.075c.15-.375-.075-.75-.375-.75"
    />
  </svg>
);
export default SvgDangerElectricity;
