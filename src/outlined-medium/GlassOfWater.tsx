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
      d="M20.813.255A.76.76 0 0 0 20.25 0H3.75c-.217 0-.42.09-.562.255A.75.75 0 0 0 3 .84l2.685 22.5c.045.375.368.66.743.66h11.13a.747.747 0 0 0 .742-.66L20.993.84a.76.76 0 0 0-.188-.585zM19.403 1.5l-.563 4.725c-.787-.367-1.755-.69-3.262-.69-1.973 0-3.008.532-3.923 1.005-.877.45-1.627.84-3.24.84-1.612 0-2.302-.375-3.127-.803l-.09-.045-.6-5.024H19.41zm-2.505 21H7.103L5.408 8.303c.727.322 1.612.577 3.007.577 1.973 0 3.008-.533 3.923-1.005.877-.45 1.627-.84 3.24-.84 1.485 0 2.28.367 3.067.773L16.89 22.5z"
    />
  </svg>
);
export default SvgGlassOfWater;
