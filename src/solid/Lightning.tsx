import * as React from 'react';
import { SVGProps } from 'react';
const SvgLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.472 11.302 12.6 23.318a1.544 1.544 0 0 1-1.755.607c-.668-.21-1.095-.803-1.095-1.515V15H3.87c-.644 0-1.2-.316-1.462-.818-.247-.465-.202-1.02.12-1.485L11.4.68a1.55 1.55 0 0 1 1.755-.607c.667.21 1.095.803 1.095 1.515v7.41h5.879c.645 0 1.2.315 1.462.818.248.465.203 1.02-.12 1.485"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLightning;
