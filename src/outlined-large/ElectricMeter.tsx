import * as React from 'react';
import { SVGProps } from 'react';
const SvgElectricMeter = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M51 47.466a2.553 2.553 0 0 1-2.55 2.55h-32.9a2.553 2.553 0 0 1-2.55-2.55V5.55A2.553 2.553 0 0 1 15.55 3h32.9A2.553 2.553 0 0 1 51 5.55zM48.45 0h-32.9A5.555 5.555 0 0 0 10 5.55v41.916a5.555 5.555 0 0 0 5.55 5.55h5.605v9.483a1.5 1.5 0 0 0 3 0v-9.483h6.5v9.483a1.5 1.5 0 0 0 3 0v-9.483h6.5v9.483a1.5 1.5 0 0 0 3 0v-9.483h5.295a5.555 5.555 0 0 0 5.55-5.55V5.55A5.555 5.555 0 0 0 48.45 0M22.655 23.124a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 1.5 1.5m11-1.5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 3 0zm8 1.5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 1.5 1.5m2.783 13.626H38.25v-6.33h6.188zm-18.377 0h-6.188v-6.33h6.188zm9.189 0h-6.188v-6.33h6.188zm-16.877-9.33h27.565a1.5 1.5 0 0 1 1.5 1.5v9.33a1.5 1.5 0 0 1-1.5 1.5H18.373a1.5 1.5 0 0 1-1.5-1.5v-9.33a1.5 1.5 0 0 1 1.5-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgElectricMeter;
