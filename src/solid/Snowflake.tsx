import * as React from 'react';
import { SVGProps } from 'react';
const SvgSnowflake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.626 13.98a.75.75 0 0 0-.983-.39l-3.105 1.32-2.602-1.5v-2.82l2.602-1.5 3.105 1.32a.75.75 0 0 0 .983-.39.751.751 0 0 0-.398-1.02l-2.062-.877 1.942-1.125a.753.753 0 0 0-.75-1.306l-1.942 1.125.27-2.25a.755.755 0 0 0-1.5-.18l-.405 3.346-2.572 1.5-2.46-1.41V4.874l2.7-2.025a.75.75 0 0 0-.9-1.2L12.748 3V.75a.75.75 0 1 0-1.5 0V3l-1.8-1.35a.75.75 0 0 0-.9 1.2l2.7 2.025v2.947L8.78 9.277l-2.573-1.5-.405-3.337a.755.755 0 1 0-1.5.18l.27 2.25-1.935-1.147a.753.753 0 1 0-.75 1.304L3.83 8.152 1.768 9a.75.75 0 1 0 .585 1.38l3.105-1.32 2.603 1.5v2.82l-2.603 1.5-3.105-1.29a.75.75 0 0 0-.982.39.75.75 0 0 0 .397 1.02l2.063.877-1.943 1.126a.753.753 0 0 0 .75 1.305l1.943-1.125-.27 2.25a.75.75 0 0 0 .66.817h.09a.75.75 0 0 0 .75-.66l.405-3.345 2.573-1.5 2.46 1.432v2.948l-2.7 2.025a.75.75 0 1 0 .9 1.2l1.8-1.35v2.25a.75.75 0 1 0 1.5 0V21l1.8 1.35a.75.75 0 1 0 .9-1.2l-2.7-2.025v-2.948l2.467-1.454 2.572 1.5.405 3.345a.75.75 0 0 0 .75.66h.09a.75.75 0 0 0 .66-.84l-.27-2.25 1.943 1.124a.753.753 0 0 0 .75-1.305l-1.942-1.125L22.229 15a.752.752 0 0 0 .397-1.02Zm-8.19-.533-2.438 1.433-2.437-1.433v-2.894l2.438-1.433 2.437 1.433v2.894Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSnowflake;
