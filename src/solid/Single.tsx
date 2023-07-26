import * as React from 'react';
import { SVGProps } from 'react';
const SvgSingle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.243 18.291c-.12.214-.383.459-.925.459H6.682c-.542 0-.806-.245-.925-.459-.359-.617.103-1.566.335-1.977.143-.332 1.49-3.155 4.664-3.772-1.14-.578-1.945-1.93-1.945-3.496C8.81 6.95 10.238 5.25 12 5.25s3.19 1.7 3.19 3.796c0 1.566-.806 2.918-1.946 3.496 3.181.609 4.52 3.44 4.664 3.772.232.404.694 1.36.335 1.977Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSingle;
