import * as React from 'react';
import { SVGProps } from 'react';
const SvgAnnualReport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.75 4.5H8.25a.75.75 0 0 1-.75-.75c0-.413.338-.75.75-.75h10.5c.413 0 .75.337.75.75 0 .412-.337.75-.75.75M18 21.75c0 .413-.337.75-.75.75H3.75a.75.75 0 0 1-.75-.75V5.25c0-.412.337-.75.75-.75h.75v14.25A2.257 2.257 0 0 0 6.75 21H18zM13.5 7.523H8.25a.75.75 0 0 1-.75-.75c0-.42.338-.75.75-.75h5.25c.412 0 .75.33.75.75 0 .412-.338.75-.75.75m3.375 5.602c.21 0 .375.165.375.375 0 2.07-1.68 3.75-3.75 3.75s-3.75-1.68-3.75-3.75 1.68-3.75 3.75-3.75c.21 0 .375.165.375.375v3zm1.125-.75h-3a.35.35 0 0 1-.262-.113.35.35 0 0 1-.113-.262V9c0-.21.172-.375.375-.375A3.38 3.38 0 0 1 18.375 12a.376.376 0 0 1-.375.375M20.25 0H6.75A2.257 2.257 0 0 0 4.5 2.25V3h-.75A2.257 2.257 0 0 0 1.5 5.25v16.5A2.257 2.257 0 0 0 3.75 24h13.5a2.257 2.257 0 0 0 2.25-2.25V21h.75a2.257 2.257 0 0 0 2.25-2.25V2.25A2.257 2.257 0 0 0 20.25 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAnnualReport;
