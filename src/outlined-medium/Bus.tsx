import * as React from 'react';
import { SVGProps } from 'react';
const SvgBus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23.97 12.57c.015.06.023.12.023.188L24 15.78c0 .397-.15.772-.435 1.057a1.45 1.45 0 0 1-1.05.436H20.85a2.246 2.246 0 0 1-4.222 0H6.6a2.246 2.246 0 0 1-4.222 0H.75a.747.747 0 0 1-.75-.75V6.75C0 6.338.338 6 .75 6h20.438c.69 0 1.29.473 1.454 1.148zm-4.48-.6 2.793.022L21.187 7.5H19.49zM4.493 17.25a.748.748 0 0 0 .173-1.477H4.32a.74.74 0 0 0-.578.727c0 .413.33.75.75.75m14.25 0a.748.748 0 0 0 .172-1.477h-.345a.74.74 0 0 0-.578.727c0 .413.33.75.75.75m0-3c.982 0 1.822.637 2.122 1.523h1.634l-.007-2.279-3.015-.024a1.503 1.503 0 0 1-1.488-1.5V7.5H1.5v8.273h.862a2.245 2.245 0 0 1 4.253 0h9.998a2.255 2.255 0 0 1 2.13-1.523m-15.75-6h13.5c.412 0 .75.338.75.75v3.75c0 .413-.338.75-.75.75h-13.5a.747.747 0 0 1-.75-.75V9c0-.412.33-.75.75-.75m.75 1.5V12H6.74V9.75zm4.497 0V12h3V9.75zm4.5 2.25h3.002V9.75H12.74z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBus;
