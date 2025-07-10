import * as React from 'react';
import { SVGProps } from 'react';
const SvgCarreer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.883 13.388v1.462c0 .42-.338.75-.75.75h-2.948c-.42 0-.75-.33-.75-.75v-1.463H.007v6.173c0 1.095 1.133 1.943 2.588 1.943h18.81c1.455 0 2.595-.848 2.595-1.943v-6.172zm.69-9.645V5.25H9.426v-1.5l3.3-.004zm6.832 1.507h-5.332V3.743c0-.825-.675-1.493-1.493-1.493H9.428c-.826 0-1.493.668-1.493 1.493V5.25h-5.34C1.163 5.25 0 6.285 0 7.545v4.342h9.435v-1.462c0-.413.33-.75.75-.75h2.948c.412 0 .75.337.75.75v1.462H24V7.546c0-1.26-1.163-2.295-2.595-2.295m-10.47 8.85h1.447v-2.925h-1.447z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCarreer;
