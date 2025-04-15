import * as React from 'react';
import { SVGProps } from 'react';
const SvgGlassOfWater = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.805.255A.74.74 0 0 0 20.243 0H3.75c-.21 0-.412.09-.555.255A.78.78 0 0 0 3 .84l2.685 22.5c.045.375.368.66.75.66h11.123a.76.76 0 0 0 .75-.66L20.993.84a.75.75 0 0 0-.188-.585m-1.972 5.97c-.788-.367-1.748-.69-3.255-.69-1.973 0-3.008.532-3.923 1.005-.877.45-1.635.84-3.24.84s-2.302-.375-3.135-.81l-.09-.045-.6-5.025h14.813z"
    />
  </svg>
);
export default SvgGlassOfWater;
