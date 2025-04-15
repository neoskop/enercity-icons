import * as React from 'react';
import { SVGProps } from 'react';
const SvgLab = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.067 2.387A1.193 1.193 0 1 0 7.068 0a1.193 1.193 0 0 0 0 2.386M1.5 18.075v.022h8.842v-.022a4.426 4.426 0 0 0-3.21-4.245.75.75 0 0 1-.54-.72V9.705H5.228v3.412a.76.76 0 0 1-.548.72 4.42 4.42 0 0 0-3.18 4.238m6.592-8.37v2.865c2.228.885 3.75 3.067 3.75 5.505A5.933 5.933 0 0 1 5.918 24 5.926 5.926 0 0 1 0 18.075c0-2.43 1.5-4.613 3.728-5.498V9.705h-.443a.75.75 0 0 1-.75-.75c0-.413.337-.75.75-.75H8.46c.412 0 .75.337.75.75 0 .412-.338.75-.75.75zm8.655 4.147c0 .105-.022.21-.075.316l-1.815 3.93h5.16L18.18 14.13a.74.74 0 0 1-.067-.315V10.98h-1.366zm2.866-.202 4.296 9.285a.74.74 0 0 1-.051.72.74.74 0 0 1-.63.345h-11.58a.74.74 0 0 1-.63-.345.75.75 0 0 1-.053-.72l4.283-9.247V10.98h-.398a.753.753 0 0 1-.75-.75c0-.412.338-.75.75-.75h5.175c.413 0 .75.338.75.75s-.337.75-.75.75h-.412zm-7.925-9.558a1.193 1.193 0 1 1-2.386 0 1.193 1.193 0 0 1 2.386 0m6.31 2.347a1.193 1.193 0 1 0 2.387 0 1.193 1.193 0 0 0-2.387 0m-2.034-.732a1.193 1.193 0 1 1-2.387 0 1.193 1.193 0 0 1 2.387 0m1.193-2.46A1.194 1.194 0 1 0 17.158.86a1.194 1.194 0 0 0 0 2.387M6.347 5.164a1.193 1.193 0 1 1-2.387 0 1.193 1.193 0 0 1 2.386 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLab;
