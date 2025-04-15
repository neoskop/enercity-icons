import * as React from 'react';
import { SVGProps } from 'react';
const SvgSolarPanel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 8.243V1.5h-6a.756.756 0 0 0-.742.638L3.57 8.243zm0 6.015V9.743H3.338l-.698 4.515zm10.11 0h-8.61V9.741h7.912zm.96 7.98a.76.76 0 0 0 .173-.6l-.908-5.88H12.75V22.5h9a.76.76 0 0 0 .57-.262m-11.07-6.48V22.5h-9a.76.76 0 0 1-.57-.262.76.76 0 0 1-.172-.6l.907-5.88zm1.5-7.515h7.68l-.937-6.106a.756.756 0 0 0-.743-.637h-6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSolarPanel;
