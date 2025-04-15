import * as React from 'react';
import { SVGProps } from 'react';
const SvgHotWaterBottle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.008 7.433-2.91-1.936.6-1.822c.104-.33.052-.697-.158-.975a1.05 1.05 0 0 0-.87-.45h-.42A2.257 2.257 0 0 0 12 0a2.257 2.257 0 0 0-2.25 2.25h-.42c-.345 0-.675.165-.877.45a1.1 1.1 0 0 0-.15.975l.6 1.822-2.948 1.966C5.032 8.168 4.5 9.217 4.5 10.35v11.063C4.5 22.837 5.7 24 7.178 24h9.645c1.477 0 2.677-1.163 2.677-2.587V10.35c0-1.133-.532-2.182-1.492-2.917M12 1.5c.412 0 .75.337.75.75h-1.5c0-.413.338-.75.75-.75"
    />
  </svg>
);
export default SvgHotWaterBottle;
