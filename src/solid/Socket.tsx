import * as React from 'react';
import { SVGProps } from 'react';
const SvgSocket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 14.255A2.25 2.25 0 0 1 14.25 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-2.25 2.255Zm-9 0A2.25 2.25 0 0 1 5.25 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-2.25 2.255ZM12.742 0a.44.44 0 0 1 .008.106v3.5a.749.749 0 0 1-.75.752.748.748 0 0 1-.75-.751V.106c0-.038 0-.076.008-.106C4.973.383 0 5.606 0 12c0 6.387 4.965 11.61 11.25 12v-3.073c0-.413.338-.751.75-.751s.75.338.75.75V24C19.035 23.61 24 18.387 24 12 24 5.606 19.027.383 12.742 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSocket;
