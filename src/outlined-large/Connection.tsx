import * as React from 'react';
import { SVGProps } from 'react';
const SvgConnection = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      d="M56.481 46.985c-1.57 0-3.099.497-4.368 1.42L40.287 37.558a10 10 0 0 0 .51-10.296l10.796-8.098a7.42 7.42 0 0 0 4.888 1.83 7.507 7.507 0 1 0-6.727-4.2l-10.767 8.068a9.95 9.95 0 0 0-12.916-.87L13.745 11.627a7.4 7.4 0 0 0 1.25-4.128 7.498 7.498 0 1 0-7.497 7.497 7.4 7.4 0 0 0 4.128-1.25l12.366 12.327a9.9 9.9 0 0 0-2 5.918c.001.813.106 1.623.31 2.41l-8.766 3.658a7.487 7.487 0 1 0 1.26 2.72l8.656-3.61a10.06 10.06 0 0 0 4.689 4l-1.95 7.817a6 6 0 0 0-.7 0 7.507 7.507 0 1 0 3.57.91l1.999-7.998H32a9.94 9.94 0 0 0 6.267-2.22l11.806 10.927a7.43 7.43 0 0 0-1.09 3.879 7.498 7.498 0 1 0 7.498-7.498m-48.983 0a4.499 4.499 0 1 1 4.498-4.498 4.51 4.51 0 0 1-4.498 4.498m17.994 13.996a4.499 4.499 0 1 1 4.498-4.499 4.51 4.51 0 0 1-4.498 4.499m30.99-51.984a4.498 4.498 0 1 1-4.5 4.499 4.51 4.51 0 0 1 4.5-4.499m-48.984 3a4.499 4.499 0 1 1 4.498-4.5 4.51 4.51 0 0 1-4.498 4.5m24.491 26.99a6.998 6.998 0 1 1 0-13.995 6.998 6.998 0 0 1 0 13.996m24.492 19.995a4.499 4.499 0 1 1 4.499-4.499 4.51 4.51 0 0 1-4.499 4.499"
    />
  </svg>
);
export default SvgConnection;
