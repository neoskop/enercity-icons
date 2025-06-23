import * as React from 'react';
import { SVGProps } from 'react';
const SvgBatteryInactive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.002 11.5a2.5 2.5 0 0 1 2.5-2.5H23V3.5c0-.28.22-.5.5-.5h16.998c.28 0 .5.22.5.5V9h5.5c.59 0 1.14.21 1.57.56l2.13-2.13a5.487 5.487 0 0 0-3.7-1.43h-2.5V3.5c0-1.93-1.57-3.5-3.5-3.5H23.501A3.504 3.504 0 0 0 20 3.5V6h-2.5a5.51 5.51 0 0 0-5.5 5.5v34.13l3-3V11.5Zm33.996 47a2.5 2.5 0 0 1-2.5 2.5H17.502a2.5 2.5 0 0 1-2.5-2.5v-7.38l33.997-34V58.5Zm8.56-52.06a1.49 1.49 0 0 0-2.12 0l-3.63 3.63-2.81 2.8v.01l-33.996 34-3 2.99v.01l-5.56 5.56a1.49 1.49 0 0 0 0 2.12c.29.29.68.44 1.06.44s.77-.15 1.06-.44l3.44-3.44v4.38c0 3.03 2.47 5.5 5.5 5.5h28.997c3.03 0 5.5-2.47 5.5-5.5V14.12l5.558-5.56c.59-.59.59-1.53 0-2.12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBatteryInactive;
