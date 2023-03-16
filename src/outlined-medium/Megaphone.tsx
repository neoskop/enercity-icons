import * as React from 'react';
import { SVGProps } from 'react';
const SvgMegaphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.205 13.64 6.858 2.995.127-10.263-6.93 2.824-.027 2.19-.029 2.255Zm-5.6 4.825 1.528.02 1.628-3.626-1.527-.02-1.629 3.626Zm-1.103-7.203-.002.146a1.88 1.88 0 0 0 .539 1.35c.353.362.827.565 1.334.572l.376.004h.012l2.948.036.025-2.008.024-1.932-3.337-.04h-.025a1.898 1.898 0 0 0-1.894 1.872ZM15.67 4.557a.745.745 0 0 1 .705.074c.207.142.33.377.328.63l-.155 12.524a.744.744 0 0 1-.344.62.743.743 0 0 1-.706.057l-8.12-3.545-2.08 4.63a.75.75 0 0 1-.684.443h-.009l-3.163-.039a.749.749 0 0 1-.675-1.057l1.866-4.154A3.4 3.4 0 0 1 0 11.392l.002-.147A3.4 3.4 0 0 1 3.396 7.89h.044l3.936.048 8.295-3.38Zm3.572 6.248 4.017.049a.75.75 0 0 1-.01 1.5h-.01l-4.017-.049a.75.75 0 0 1 .01-1.5h.01Zm-.606-1.519c.093 0 .19-.017.282-.054l3.95-1.6a.75.75 0 0 0-.564-1.391l-3.95 1.6a.75.75 0 0 0 .282 1.445Zm.224 4.583 3.91 1.697a.75.75 0 1 1-.598 1.376l-3.91-1.697a.749.749 0 0 1-.389-.987.747.747 0 0 1 .987-.389Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMegaphone;
