import * as React from 'react';
import { SVGProps } from 'react';
const SvgExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.063 3h-7.125a.937.937 0 0 0 0 1.875h4.86L14.422 8.25h-10.5A.938.938 0 0 0 3 9.188v10.874a.937.937 0 0 0 .938.938h10.874a.938.938 0 0 0 .938-.938v-10.5l3.375-3.374v4.86a.938.938 0 0 0 1.875 0v-7.11A.938.938 0 0 0 20.062 3Zm-6.188 16.125h-9v-9h7.672l-4.02 4.027a.93.93 0 0 0 0 1.32.924.924 0 0 0 1.32 0l4.028-4.02v7.673Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgExternalLink;
