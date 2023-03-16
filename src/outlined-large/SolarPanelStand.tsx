import * as React from 'react';
import { SVGProps } from 'react';
const SvgSolarPanelStand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56.32 24H42.244l4.336-13h13.87l-4.13 13Zm-5.085 16H36.908l4.336-13h14.122l-4.13 13ZM28 53h3V43h-3v10ZM7.68 27h13.402l-4.335 13H3.55l4.13-13Zm5.085-16h13.654l-4.335 13H8.634l4.13-13Zm12.48 13 4.336-13H43.42l-4.336 13H25.246Zm-5.337 16 4.336-13h13.838l-4.336 13H19.908ZM63.712 8.614A1.506 1.506 0 0 0 62.501 8H11.666a1.5 1.5 0 0 0-1.43 1.046l-10.166 32A1.499 1.499 0 0 0 1.5 43h16.29c.01 0 .024.006.036.006.012 0 .023-.006.037-.006H25v10h-5.485a1.5 1.5 0 0 0 0 3H39.49a1.5 1.5 0 0 0 0-3H34V43h.79c.01 0 .023.006.035.006.014 0 .024-.006.037-.006h17.471a1.5 1.5 0 0 0 1.43-1.046l4.95-15.577c.178-.247.287-.548.287-.877l-.002-.022L63.93 9.954a1.501 1.501 0 0 0-.218-1.34Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSolarPanelStand;
