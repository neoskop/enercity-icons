import * as React from 'react';
import { SVGProps } from 'react';
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.68 7.205-.855.847-2.872-2.872.855-.855a2.046 2.046 0 0 1 2.864.015c.78.786.788 2.069.008 2.865m1.05-3.923a3.546 3.546 0 0 0-4.98-.022l-13.5 13.5v5.002h4.995l13.5-13.5v-.008a3.537 3.537 0 0 0-.016-4.972"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPen;
