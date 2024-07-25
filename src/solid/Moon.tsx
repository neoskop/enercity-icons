import * as React from 'react';
import { SVGProps } from 'react';
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.75 11.657c0 5.775-4.65 10.47-10.373 10.47-3.735 0-7.193-2.04-9.03-5.325a.747.747 0 0 1 .09-.862.755.755 0 0 1 .847-.203 8.588 8.588 0 0 0 3.293.645c4.89 0 8.865-4.027 8.865-8.977 0-1.553-.39-3.083-1.14-4.41a.748.748 0 0 1 .09-.863.743.743 0 0 1 .84-.202c3.96 1.597 6.517 5.415 6.517 9.727Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMoon;
