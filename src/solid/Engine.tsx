import * as React from 'react';
import { SVGProps } from 'react';
const SvgEngine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 9.75V18a2.257 2.257 0 0 1-2.25 2.25H19.5a.75.75 0 0 1-.75-.75V18H18v3c0 .413-.337.75-.75.75h-9a.73.73 0 0 1-.578-.277L5.438 18.75H3.75A.747.747 0 0 1 3 18v-3.375H1.5v2.625c0 .413-.337.75-.75.75a.747.747 0 0 1-.75-.75V10.5c0-.412.33-.75.75-.75.413 0 .75.338.75.75v2.625H3V9.75c0-.412.33-.75.75-.75h1.237V7.5c0-.412.339-.75.75-.75h3.638V4.5H6.75A.747.747 0 0 1 6 3.75c0-.413.33-.75.75-.75h6.75c.412 0 .75.337.75.75 0 .412-.338.75-.75.75h-2.625v2.25h3.862a.73.73 0 0 1 .578.277l2.842 3.473h.593V8.25c0-.412.337-.75.75-.75h2.25A2.257 2.257 0 0 1 24 9.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEngine;
