import * as React from 'react';
import { SVGProps } from 'react';
const SvgTraining = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 16.531c0 1.05-2.464 2.219-6 2.219s-6-1.17-6-2.219v-3.504l5.683 2.652a.745.745 0 0 0 .634 0L18 13.027v3.504ZM12 5.328l9.477 4.422L12 14.172 2.523 9.75 12 5.328ZM23.567 9.07l-11.25-5.25a.751.751 0 0 0-.634 0L.433 9.07a.75.75 0 0 0 0 1.36L4.5 12.327v4.203c0 2.442 3.773 3.719 7.5 3.719s7.5-1.277 7.5-3.719v-4.203l1.5-.7V16.5a.75.75 0 1 0 1.5 0v-5.573l1.067-.498a.749.749 0 0 0 0-1.359Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTraining;
