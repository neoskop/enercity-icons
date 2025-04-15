import * as React from 'react';
import { SVGProps } from 'react';
const SvgPaperlessAlternative = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.097 17.017-5.145-5.092a3.67 3.67 0 0 1 2.145-.698 3.68 3.68 0 0 1 3.675 3.675c0 .788-.255 1.515-.675 2.115m-3 1.56a3.68 3.68 0 0 1-3.675-3.675c0-.682.195-1.312.525-1.86l5.047 4.995a3.63 3.63 0 0 1-1.897.54m-5.67-12.329V1.501l4.935 4.964h-4.695c-.127 0-.24-.098-.24-.217m6.42 3.54V6.15a.72.72 0 0 0-.218-.524L13.275.218a.74.74 0 0 0-.533-.217H1.5A.746.746 0 0 0 .75.75v22.5c0 .412.337.75.75.75h16.597c.412 0 .75-.338.75-.75v-3.233a5.1 5.1 0 0 0 2.79-1.35q.013-.012.037-.023c.008-.007.008-.015.015-.021a5.16 5.16 0 0 0 1.583-3.721c0-2.602-1.928-4.747-4.425-5.115"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPaperlessAlternative;
