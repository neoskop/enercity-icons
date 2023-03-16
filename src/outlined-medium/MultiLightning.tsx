import * as React from 'react';
import { SVGProps } from 'react';
const SvgMultiLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 16.492V12.75a.752.752 0 0 0-.75-.75h-3.502l1.026-1.5L15.81 9 18 5.813V9.75c0 .412.337.75.75.75h3.494L18 16.492Zm-8.865 5.954c-.045.061-.067.054-.09.054-.03-.015-.045-.03-.045-.084V14.25a.752.752 0 0 0-.75-.75H1.62c-.03 0-.044 0-.067-.008l8.812-11.94c.037-.06.067-.052.09-.052.03.015.045.03.045.083V9.75c0 .412.338.75.75.75h1.703l-.728 1.057a1.21 1.21 0 0 0-.09 1.26c.217.42.645.683 1.117.683h2.49l-6.607 8.947ZM23.864 9.675A1.261 1.261 0 0 0 22.747 9H19.5V4.973c0-.533-.345-.998-.856-1.163a1.26 1.26 0 0 0-1.41.473L13.987 9H12V1.583c0-.705-.428-1.305-1.095-1.508a1.54 1.54 0 0 0-1.755.6L.285 12.697c-.33.465-.375 1.02-.127 1.485.263.503.817.818 1.462.818H7.5v7.416c0 .706.428 1.306 1.095 1.509a1.547 1.547 0 0 0 1.755-.601l6.15-8.34v2.543c0 .555.315 1.012.802 1.17.113.038.225.053.338.053.375 0 .727-.188.974-.525l5.16-7.29c.263-.368.3-.848.09-1.26Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMultiLightning;
