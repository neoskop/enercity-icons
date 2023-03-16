import * as React from 'react';
import { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56 13.201H9v-5.2h47v5.2Zm-18.775 21.9h-4.89a1.5 1.5 0 0 0 0 3h4.14v17.972l-7.95-3.975V36.6c0-.324-.105-.64-.299-.9L13.601 16.201h37.798l-14.174 18.9ZM57.5 5h-50A1.5 1.5 0 0 0 6 6.5v8.2a1.5 1.5 0 0 0 1.5 1.5h2.35l15.675 20.9v15.924a1.5 1.5 0 0 0 .829 1.342l10.95 5.475a1.51 1.51 0 0 0 1.46-.066c.441-.273.711-.757.711-1.276V37.1L55.15 16.201h2.35a1.5 1.5 0 0 0 1.5-1.5v-8.2A1.5 1.5 0 0 0 57.5 5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFilter;
