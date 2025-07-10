import * as React from 'react';
import { SVGProps } from 'react';
const SvgSolarPanelStand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.788 4.5 14.438 9H9.261l1.35-4.5.226-.75.225-.75h5.174l-.224.75zM5.886 15l1.351-4.5H1.604L.036 15.525a.747.747 0 0 0 .712.975h4.688l.225-.75zm1.576 0-.225.75-.225.75h5.176l.225-.75.224-.75 1.35-4.5H8.814zM23.859 3.308A.75.75 0 0 0 23.25 3h-5.438l-.224.75-.226.75-1.35 4.5h6.383l1.568-5.025a.75.75 0 0 0-.105-.667M15.563 10.5h6.361l-1.71 5.475a.74.74 0 0 1-.714.525h-5.737l.225-.75.225-.75zM3.643 9h4.044l1.35-4.5.225-.75.225-.75H4.5a.74.74 0 0 0-.714.525L2.076 9h1.568m7.607 10.5h3.09a.75.75 0 1 1 0 1.5H6.576a.75.75 0 1 1 0-1.5H9.75V18h1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSolarPanelStand;
