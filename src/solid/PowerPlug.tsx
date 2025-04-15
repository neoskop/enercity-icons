import * as React from 'react';
import { SVGProps } from 'react';
const SvgPowerPlug = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.992 16.995a.75.75 0 0 1-.75-.75c0-.413.337-.75.75-.75s.75.337.75.75c0 .412-.337.75-.75.75M12 0C5.378 0 0 5.378 0 12c0 3.03 1.133 5.924 3.196 8.152.277.3.75.323 1.057.038a.74.74 0 0 0 .037-1.057A10.48 10.48 0 0 1 1.5 12C1.5 6.21 6.21 1.5 12 1.5S22.5 6.21 22.5 12c0 4.207-2.497 7.994-6.367 9.652l-.008.008v-.008c-.307.142-.638.21-.967.21a2.42 2.42 0 0 1-2.31-1.74 4.864 4.864 0 0 0 4.004-4.777V13.74h.675c.42 0 .75-.33.75-.75V9.675c0-.413-.33-.75-.75-.75h-1.83V4.883a.75.75 0 0 0-.75-.75.75.75 0 0 0-.75.75v4.042H9.795V4.883c0-.413-.33-.75-.75-.75a.75.75 0 0 0-.75.75v4.042h-1.83a.75.75 0 0 0-.75.75v3.315c0 .42.337.75.75.75h.682v1.604a4.856 4.856 0 0 0 4.163 4.8 3.91 3.91 0 0 0 3.848 3.218c.532 0 1.057-.113 1.56-.33h.007l.007-.008a12 12 0 0 0 5.287-4.424A11.95 11.95 0 0 0 24 12c0-6.622-5.386-12-12-12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPowerPlug;
