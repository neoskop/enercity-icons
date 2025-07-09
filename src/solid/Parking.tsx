import * as React from 'react';
import { SVGProps } from 'react';
const SvgParking = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.393 13.537c1.454 0 2.984-.15 3.847-1.005a4.22 4.22 0 0 0 1.26-3.015 4.22 4.22 0 0 0-1.26-3.015c-1.304-1.296-3.425-1.266-4.962-1.245H9.75a.75.75 0 0 0-.75.75V18c0 .412.338.75.75.75s.75-.338.75-.75v-4.478c.292.008.585.015.893.015M0 12C0 5.385 5.384 0 12 0s12 5.385 12 12-5.385 12-12 12S0 18.615 0 12m15-2.482a2.73 2.73 0 0 0-.818-1.95c-.817-.81-2.377-.826-3.682-.818v5.272c1.23.038 3.074.045 3.682-.555A2.73 2.73 0 0 0 15 9.518"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgParking;
