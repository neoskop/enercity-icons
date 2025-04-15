import * as React from 'react';
import { SVGProps } from 'react';
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.264 2.25h3.31l-7.268 8.275 8.49 11.225h-6.662l-5.217-6.821-5.972 6.821h-3.31l7.699-8.85L1.203 2.25h6.829l4.713 6.231zm-1.159 17.557h1.835L7.067 4.121H5.096z"
    />
  </svg>
);
export default SvgTwitter;
