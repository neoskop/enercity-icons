import * as React from 'react';
import { SVGProps } from 'react';
const SvgSolarPanelStand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.82 9.008c-.014 0-.025-.008-.04-.008h-5.135l1.406-4.5h5.179l-1.41 4.508ZM18.95 15h-5.18l1.407-4.5h5.179L18.949 15ZM3.177 10.5h4.429L6.2 15H1.77l1.407-4.5Zm1.875-6h4.429L8.074 9H3.646l1.406-4.5ZM9.645 9l1.406-4.5h4.43L14.074 9H9.645ZM7.77 15l1.406-4.5h4.43L12.199 15H7.77ZM23.854 3.305A.752.752 0 0 0 23.25 3H4.5a.75.75 0 0 0-.715.526l-3.75 12a.747.747 0 0 0 .715.974h9v3H6.577a.75.75 0 1 0 0 1.5h7.763a.75.75 0 1 0 0-1.5h-3.09v-3h8.25a.749.749 0 0 0 .715-.527l3.75-12a.75.75 0 0 0-.11-.668Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSolarPanelStand;
