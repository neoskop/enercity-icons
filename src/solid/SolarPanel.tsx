import * as React from 'react';
import { SVGProps } from 'react';
const SvgSolarPanel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 8.242V1.5h-6a.756.756 0 0 0-.742.638L3.57 8.242h7.68Zm0 6.016V9.743H3.338l-.698 4.515h8.61Zm10.11 0h-8.61V9.741h7.912l.698 4.515Zm.96 7.98a.757.757 0 0 0 .173-.6l-.908-5.88H12.75V22.5h9a.758.758 0 0 0 .57-.262Zm-11.07-6.48V22.5h-9a.76.76 0 0 1-.57-.262.757.757 0 0 1-.172-.6l.907-5.88h8.835Zm1.5-7.515h7.68l-.937-6.106a.756.756 0 0 0-.743-.637h-6v6.743Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSolarPanel;
