import * as React from 'react';
import { SVGProps } from 'react';
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22.706 3.667-1.781 1.058a6.807 6.807 0 0 1-1.775.74 4.588 4.588 0 0 0-4.912-.717 4.598 4.598 0 0 0-2.693 4.175 10.055 10.055 0 0 1-6.343-3.6l-.719-.881-.573.984a4.61 4.61 0 0 0-.367 3.824l-.262-.145-.024 1.31v.063a4.6 4.6 0 0 0 .99 2.845l.382 1.194a4.592 4.592 0 0 0 2.289 2.693 6.832 6.832 0 0 1-2.71.553c-.272 0-.544-.015-.815-.047L0 17.315l2.876 1.845a11.557 11.557 0 0 0 6.254 1.837 11.125 11.125 0 0 0 8.623-3.799 12.015 12.015 0 0 0 2.984-7.826v-.11.001a8.518 8.518 0 0 0 1.754-1.915L24 5.09l-2.057.913c.049-.116.092-.236.132-.359l.63-1.977h.001Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTwitter;
