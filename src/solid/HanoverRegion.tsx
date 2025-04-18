import * as React from 'react';
import { SVGProps } from 'react';
const SvgHanoverRegion = (props: SVGProps<SVGSVGElement>) => (
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
      d="m23.92 13.915-1.443-2.886-.733-5.872a.75.75 0 0 0-.328-.531l-6.75-4.5a.75.75 0 0 0-.711-.065l-5.25 2.25a.75.75 0 0 0-.44.837l.657 3.285-2.172 1.63L4.2 6.15a.75.75 0 0 0-.9 0L.3 8.4a.75.75 0 0 0-.15 1.05l2.1 2.8v4.25a.75.75 0 0 0 .3.6l2.858 2.143 2.171 4.343a.75.75 0 0 0 .67.414H12a.75.75 0 0 0 .47-.164l3.75-3a.75.75 0 0 0 .154-1.002l-.909-1.365 4.968-1.242a.7.7 0 0 0 .267-.127l3-2.25a.75.75 0 0 0 .221-.935"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHanoverRegion;
