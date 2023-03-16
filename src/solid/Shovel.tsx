import * as React from 'react';
import { SVGProps } from 'react';
const SvgShovel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.413 5 20.056.608a.77.77 0 0 0-1.109 0L17.145 2.53a.77.77 0 0 0-.161.769l.977 2.615-9.492 9.539-2.54-2.539a.77.77 0 0 0-1.086 0l-2.695 2.693c-2.102 2.061-3.21 5.384-.678 7.923A4.682 4.682 0 0 0 4.796 25a6.84 6.84 0 0 0 4.62-2.146l2.694-2.692a.767.767 0 0 0 0-1.093l-2.563-2.53 9.508-9.493 2.617.985a.77.77 0 0 0 .793-.162l1.925-1.8a.768.768 0 0 0 .247-.554.769.769 0 0 0-.224-.515ZM7.476 18.662l-3.08 3.076a.769.769 0 0 1-1.093 0 .769.769 0 0 1 0-1.092l3.08-3.077a.774.774 0 0 1 1.093 1.093Zm14.289-12.24-2.31-.87-.862-2.307.931-.992 3.234 3.223-.993.946Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgShovel;
