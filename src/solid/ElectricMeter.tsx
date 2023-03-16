import * as React from 'react';
import { SVGProps } from 'react';
const SvgElectricMeter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.552 14.61c.42 0 .75-.338.75-.75v-3c0-.413-.33-.75-.75-.75h-9a.752.752 0 0 0-.75.75v3c0 .412.338.75.75.75h9Zm-7.5-9.038a.752.752 0 0 0-.75.75v1.845c0 .42.337.75.75.75.42 0 .75-.33.75-.75V6.322c0-.412-.33-.75-.75-.75Zm3 0a.752.752 0 0 0-.75.75v1.845c0 .42.337.75.75.75.42 0 .75-.33.75-.75V6.322c0-.412-.33-.75-.75-.75Zm3 0a.752.752 0 0 0-.75.75v1.845c0 .42.337.75.75.75.42 0 .75-.33.75-.75V6.322c0-.412-.33-.75-.75-.75ZM5.985.001h12.022c1.237 0 2.243.997 2.243 2.234v15.472a2.238 2.238 0 0 1-2.243 2.235h-2.205v3.308c0 .412-.33.75-.75.75a.753.753 0 0 1-.75-.75v-3.308h-1.5v3.308c0 .412-.33.75-.75.75a.753.753 0 0 1-.75-.75v-3.308h-1.5v3.308c0 .412-.33.75-.75.75a.753.753 0 0 1-.75-.75v-3.308H5.985a2.236 2.236 0 0 1-2.235-2.235V2.235A2.235 2.235 0 0 1 5.985 0ZM9.802 13.11h-1.5v-1.5h1.5v1.5Zm4.5 0h1.5v-1.5h-1.5v1.5Zm-1.555 0h-1.5v-1.5h1.5v1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgElectricMeter;
