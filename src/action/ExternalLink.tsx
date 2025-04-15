import * as React from 'react';
import { SVGProps } from 'react';
const SvgExternalLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.063 3h-7.125a.937.937 0 0 0 0 1.875h4.86L14.423 8.25h-10.5A.94.94 0 0 0 3 9.188v10.875a.937.937 0 0 0 .938.937h10.875a.94.94 0 0 0 .937-.937v-10.5l3.375-3.376v4.86a.938.938 0 0 0 1.875 0v-7.11A.94.94 0 0 0 20.063 3m-6.188 16.125h-9v-9h7.672l-4.02 4.028a.93.93 0 0 0 0 1.32.924.924 0 0 0 1.32 0l4.028-4.02z"
    />
  </svg>
);
export default SvgExternalLink;
