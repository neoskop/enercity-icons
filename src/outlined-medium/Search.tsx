import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 10.102A5.609 5.609 0 0 1 10.852 4.5a5.608 5.608 0 0 1 5.601 5.602 5.608 5.608 0 0 1-5.601 5.602 5.608 5.608 0 0 1-5.602-5.602Zm15.53 8.876-4.412-4.412a7.065 7.065 0 0 0 1.585-4.464C17.953 6.186 14.768 3 10.852 3S3.75 6.186 3.75 10.102a7.11 7.11 0 0 0 7.102 7.102 7.064 7.064 0 0 0 4.454-1.579l4.413 4.413a.748.748 0 0 0 1.06 0 .75.75 0 0 0 0-1.06Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSearch;
