import * as React from 'react';
import { SVGProps } from 'react';
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.995 5.298a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v3.298a1 1 0 0 1-1 1Zm0 1.163a5.534 5.534 0 1 0 0 11.07 5.534 5.534 0 0 0 0-11.07Zm0 2a3.537 3.537 0 0 1 3.534 3.534 3.538 3.538 0 0 1-3.534 3.535 3.539 3.539 0 0 1-3.534-3.535 3.538 3.538 0 0 1 3.534-3.534Zm-6.15-1.202a.997.997 0 0 0 1.415 0 .999.999 0 0 0 0-1.414L4.928 3.513a.999.999 0 1 0-1.414 1.414L5.846 7.26Zm-1.547 5.736H1a1 1 0 1 1 0-2h3.298a1 1 0 1 1 0 2Zm-.784 7.482a.997.997 0 0 0 1.414 0l2.332-2.332a.999.999 0 1 0-1.414-1.414l-2.332 2.332a.999.999 0 0 0 0 1.414Zm8.481 3.514a1 1 0 0 1-1-1v-3.298a1 1 0 1 1 2 0v3.298a1 1 0 0 1-1 1Zm7.068-3.514a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-2.332-2.332a.999.999 0 1 0-1.414 1.414l2.332 2.332Zm3.928-7.482h-3.299a1 1 0 1 1 0-2h3.3a1 1 0 1 1 0 2Zm-6.26-5.736a.997.997 0 0 0 1.414 0l2.332-2.332a.999.999 0 1 0-1.414-1.414l-2.332 2.332a.999.999 0 0 0 0 1.414Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSun;
