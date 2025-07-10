import * as React from 'react';
import { SVGProps } from 'react';
const SvgDangerElectricity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23.718 19.2 13.953 2.625C13.578 1.875 12.826 1.5 12 1.5s-1.502.375-1.953 1.125L.282 19.2a2.24 2.24 0 0 0 0 2.175c.45.75 1.126 1.125 1.953 1.125h19.53c.826 0 1.503-.375 1.953-1.125a2.24 2.24 0 0 0 0-2.175m-8.788-5.925-3.606 6.075c-.15.3-.601.15-.526-.225l.601-3.9H9.371c-.3 0-.45-.3-.45-.525l.976-5.4c0-.225.225-.375.45-.375h3.23c.3 0 .526.375.376.675l-1.202 3h1.803c.376 0 .6.375.376.675"
    />
  </svg>
);
export default SvgDangerElectricity;
