import * as React from 'react';
import { SVGProps } from 'react';
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.3 13.08a.736.736 0 0 1-.532.217.737.737 0 0 1-.534-.217l-1.484-1.485v5.197c0 .412-.338.75-.75.75a.752.752 0 0 1-.75-.75v-5.197L9.765 13.08a.755.755 0 0 1-1.065 0 .746.746 0 0 1 0-1.057l2.768-2.768A.74.74 0 0 1 12 9.038c.103 0 .202.015.29.052.09.037.174.098.242.165l2.767 2.768a.746.746 0 0 1 0 1.057Zm3.862-2.385c.016-.218.03-.443.03-.66C19.192 6.158 16.034 3 12.158 3a7.032 7.032 0 0 0-6.991 6.322A5.885 5.885 0 0 0 0 15.158c0 3.24 2.64 5.879 5.88 5.879h12.945A5.185 5.185 0 0 0 24 15.862a5.179 5.179 0 0 0-4.838-5.167Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgUpload;
