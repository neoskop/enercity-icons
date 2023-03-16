import * as React from 'react';
import { SVGProps } from 'react';
const SvgEngine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.5 18c0 .413-.337.75-.75.75h-1.5v-1.5a.752.752 0 0 0-.75-.75h-2.25a.752.752 0 0 0-.75.75v3H8.603l-2.235-2.723a.728.728 0 0 0-.578-.277H4.5V10.5h1.237c.413 0 .75-.338.75-.75v-1.5h7.898l2.842 3.473c.143.18.352.277.578.277H19.5c.413 0 .75-.338.75-.75V9h1.5c.413 0 .75.337.75.75V18Zm-.75-10.5H19.5a.752.752 0 0 0-.75.75v2.25h-.593l-2.842-3.473a.73.73 0 0 0-.578-.277h-3.862V4.5H13.5c.412 0 .75-.338.75-.75A.752.752 0 0 0 13.5 3H6.75c-.42 0-.75.337-.75.75 0 .412.33.75.75.75h2.625v2.25H5.737a.753.753 0 0 0-.75.75V9H3.75c-.42 0-.75.337-.75.75v3.375H1.5V10.5a.752.752 0 0 0-.75-.75c-.42 0-.75.338-.75.75v6.75c0 .413.33.75.75.75.413 0 .75-.337.75-.75v-2.625H3V18c0 .413.33.75.75.75h1.688l2.234 2.722a.73.73 0 0 0 .578.278h9c.413 0 .75-.338.75-.75v-3h.75v1.5c0 .412.337.75.75.75h2.25A2.257 2.257 0 0 0 24 18V9.75a2.257 2.257 0 0 0-2.25-2.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEngine;
