import * as React from 'react';
import { SVGProps } from 'react';
const SvgOpenHand = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22.853 13.755-10.516 5.123-.007.008a.74.74 0 0 1-.33.074.5.5 0 0 1-.187-.03q-.025.002-.039-.007L.524 15.428a.75.75 0 0 1-.524-.72V8.25c0-.412.337-.75.75-.75h5.962c3.068 0 4.306 1.53 4.763 2.377h4.575c.045 0 .082 0 .12.016h.03c.082.007.172.014.248.037a1.5 1.5 0 0 1 1.102 1.447 1.5 1.5 0 0 1-1.5 1.5H9.105a.75.75 0 0 0-.75.75c0 .414.338.75.75.75h6.945a3 3 0 0 0 3-3c0-.104-.008-.201-.015-.306l2.024-.99a2.045 2.045 0 0 1 1.793 3.674"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOpenHand;
