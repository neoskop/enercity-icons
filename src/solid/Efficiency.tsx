import * as React from 'react';
import { SVGProps } from 'react';
const SvgEfficiency = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.91 16.5c-.51 0-1.365-.113-1.898-.465l3.285-3.525a.749.749 0 0 0 .143-.81.757.757 0 0 0-.69-.45H9.098l3.12-3.728c2.34.15 4.192 2.1 4.192 4.478 0 2.482-2.017 4.5-4.5 4.5ZM4.2 20.062l1.74-4.807a.735.735 0 0 0-.097-.683.734.734 0 0 0-.607-.322H2.078S6.068 7.5 6.075 7.5h4.275l-3.427 4.02a.75.75 0 0 0 .577 1.23h3.525L4.2 20.062ZM23.25 9h-2.543a9.163 9.163 0 0 0-.42-1.043l1.785-1.792c.3-.293.3-.765 0-1.058l-3.179-3.18a.735.735 0 0 0-1.058 0L16.08 3.682A8.531 8.531 0 0 0 15 3.225V.75a.752.752 0 0 0-.75-.75h-4.5A.752.752 0 0 0 9 .75v2.437c-.383.128-.75.285-1.11.458L6.166 1.927a.734.734 0 0 0-1.057 0l-3.18 3.18c-.3.293-.3.765 0 1.058l2.025 2.032-3.848 6.42a.745.745 0 0 0-.007.75c.135.24.382.383.652.383h3.413l-2.618 7.245a.741.741 0 0 0 .316.892.74.74 0 0 0 .937-.128l3.84-4.11c.772.796 1.71 1.006 2.362 1.118v2.483c0 .412.337.75.75.75h4.5c.412 0 .75-.338.75-.75v-2.58c.345-.12.682-.263 1.005-.42l1.83 1.822c.292.3.765.3 1.058 0l3.18-3.18c.3-.292.3-.765 0-1.057l-1.823-1.83c.157-.323.3-.66.42-1.005h2.58c.412 0 .75-.338.75-.75v-4.5a.752.752 0 0 0-.75-.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEfficiency;
