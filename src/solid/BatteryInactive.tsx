import * as React from 'react';
import { SVGProps } from 'react';
const SvgBatteryInactive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.501 16.282 18.374 2.408a1.8 1.8 0 0 0-.75-.158h-1.125V1.125C16.499.503 15.996 0 15.375 0h-6.75c-.621 0-1.124.502-1.124 1.125V2.25H6.376c-1.035 0-1.875.84-1.875 1.875zM19.498 5.565l2.033-2.033a.756.756 0 0 0 0-1.065.756.756 0 0 0-1.065 0l-17.997 18a.756.756 0 0 0 0 1.066c.15.142.338.217.533.217a.77.77 0 0 0 .532-.218l.967-.967v1.56c0 1.035.84 1.875 1.875 1.875h11.248c1.035 0 1.874-.84 1.874-1.875z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryInactive;
