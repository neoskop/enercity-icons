import * as React from 'react';
import { SVGProps } from 'react';
const SvgEnergyFire = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.998 15.847c.12 6.868-6.344 8.128-6.412 8.136-.044.007-.09.015-.134.015a.75.75 0 0 1-.594-1.207c.016-.016.969-1.32.466-2.595-.172-.45-.653-.923-1.155-1.418-.832-.817-1.89-1.859-2.16-3.434-.982 1.073-1.529 2.205-1.627 3.39-.188 2.28 1.35 3.989 1.365 4.004.217.24.255.577.112.862a.746.746 0 0 1-.772.39C10.012 23.975 3 22.88 3 15.854 3 9.952 6.098 4.816 12.464.144a.75.75 0 0 1 .72-.09c.24.097.413.315.457.57.676 3.93 2.61 6.517 4.32 8.796 1.538 2.055 2.992 3.997 3.038 6.427Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEnergyFire;
