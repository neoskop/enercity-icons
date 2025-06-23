import * as React from 'react';
import { SVGProps } from 'react';
const SvgGlassOfWater = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.805.255A.735.735 0 0 0 20.243 0H3.75c-.21 0-.412.09-.555.255A.784.784 0 0 0 3 .84l2.685 22.5c.045.375.368.66.75.66h11.123a.76.76 0 0 0 .75-.66L20.993.84a.75.75 0 0 0-.188-.585Zm-1.972 5.97c-.788-.367-1.748-.69-3.255-.69-1.973 0-3.008.532-3.923 1.005-.877.45-1.635.84-3.24.84-1.605 0-2.302-.375-3.135-.81l-.09-.045-.6-5.025h14.813l-.57 4.725Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGlassOfWater;
