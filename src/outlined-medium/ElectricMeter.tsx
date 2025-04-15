import * as React from 'react';
import { SVGProps } from 'react';
const SvgElectricMeter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.75 17.711c0 .407-.33.738-.738.738H5.988a.74.74 0 0 1-.738-.738V2.237c0-.406.331-.737.738-.737h12.024c.408 0 .738.33.738.737zM18.012.001H5.988A2.24 2.24 0 0 0 3.75 2.236V17.71a2.24 2.24 0 0 0 2.238 2.238h2.32v3.301a.75.75 0 1 0 1.5 0v-3.302h1.5v3.302a.75.75 0 1 0 1.5 0v-3.302h1.5v3.302a.75.75 0 1 0 1.5 0v-3.302h2.204a2.24 2.24 0 0 0 2.238-2.237V2.237A2.24 2.24 0 0 0 18.012 0M9.057 8.922a.75.75 0 0 0 .75-.75V6.329a.75.75 0 1 0-1.5 0v1.844c0 .415.336.75.75.75m3.75-.75a.75.75 0 1 1-1.5 0V6.329a.75.75 0 1 1 1.5 0zm2.25.75a.75.75 0 0 0 .75-.75V6.329a.75.75 0 1 0-1.5 0v1.844c0 .415.336.75.75.75m.75 4.19h-1.5v-1.5h1.5zm-6 0h-1.5v-1.5h1.5zm3 0h-1.5v-1.5h1.5zm-5.25-3h9a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgElectricMeter;
