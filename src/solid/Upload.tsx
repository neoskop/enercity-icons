import * as React from 'react';
import { SVGProps } from 'react';
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.3 13.08a.74.74 0 0 1-.532.217.74.74 0 0 1-.534-.217l-1.484-1.485v5.197c0 .412-.338.75-.75.75a.75.75 0 0 1-.75-.75v-5.197L9.765 13.08a.755.755 0 0 1-1.065 0 .746.746 0 0 1 0-1.057l2.768-2.768A.74.74 0 0 1 12 9.038q.156-.002.29.052c.09.037.174.098.242.165l2.767 2.768a.746.746 0 0 1 0 1.057m3.862-2.385c.016-.218.03-.443.03-.66C19.192 6.158 16.034 3 12.158 3a7.03 7.03 0 0 0-6.991 6.322A5.885 5.885 0 0 0 0 15.158c0 3.24 2.64 5.879 5.88 5.879h12.945A5.185 5.185 0 0 0 24 15.862a5.18 5.18 0 0 0-4.838-5.167"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUpload;
