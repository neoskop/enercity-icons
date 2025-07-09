import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 10.103A5.61 5.61 0 0 1 10.852 4.5a5.61 5.61 0 0 1 5.601 5.602 5.61 5.61 0 0 1-5.601 5.602 5.61 5.61 0 0 1-5.602-5.602m15.53 8.875-4.412-4.412a7.07 7.07 0 0 0 1.585-4.464C17.954 6.186 14.768 3 10.853 3S3.75 6.186 3.75 10.102s3.186 7.102 7.102 7.102a7.06 7.06 0 0 0 4.454-1.578l4.413 4.413a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
