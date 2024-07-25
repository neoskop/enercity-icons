import * as React from 'react';
import { SVGProps } from 'react';
const SvgCup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.81 5.26c0 .292-.315.75-.532.967a.747.747 0 0 0 .532 1.275.768.768 0 0 0 .533-.218c.097-.097.967-.997.967-2.032 0-1.035-.562-1.62-.967-2.033-.368-.367-.533-.547-.533-.967 0-.42.165-.6.533-.968a.756.756 0 0 0 0-1.065.756.756 0 0 0-1.065 0l-.02.02c-.403.411-.948.965-.948 2.013s.544 1.602.948 2.012l.02.02c.367.368.532.548.532.968v.007Zm6 5.25h-.802v-.75a.752.752 0 0 0-.75-.75H3a.752.752 0 0 0-.75.75v8.25c0 3.307 2.692 6 6 6h3.758c2.782 0 5.122-1.905 5.797-4.486h1.02a3.017 3.017 0 0 0 2.985-3.007v-3.008a3 3 0 0 0-3-3ZM8.31 21.76c-2.07 0-3.75-1.68-3.75-3.75 0-.413.338-.75.75-.75.413 0 .75.337.75.75a2.257 2.257 0 0 0 2.25 2.25c.412 0 .75.337.75.75 0 .412-.338.75-.75.75Zm12-5.243c0 .825-.668 1.5-1.492 1.5H18s.008 0 .008-.008v-6h.802c.825 0 1.5.675 1.5 1.5v3.008ZM7.028 6.227c.217-.218.532-.675.532-.968v-.007c0-.42-.165-.6-.532-.968l-.02-.02c-.404-.41-.948-.964-.948-2.012S6.605.65 7.008.24l.02-.02a.756.756 0 0 1 1.065 0c.292.3.292.772 0 1.064-.368.368-.533.548-.533.968 0 .42.165.6.533.967.405.413.967.998.967 2.033s-.87 1.935-.967 2.032a.768.768 0 0 1-.533.218.747.747 0 0 1-.532-1.275Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCup;
