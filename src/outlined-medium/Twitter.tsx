import * as React from 'react';
import { SVGProps } from 'react';
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22.706 3.667-1.781 1.058a6.8 6.8 0 0 1-1.775.74 4.59 4.59 0 0 0-4.912-.717 4.6 4.6 0 0 0-2.693 4.175 10.06 10.06 0 0 1-6.343-3.6l-.719-.881-.573.984a4.61 4.61 0 0 0-.367 3.824l-.262-.145-.024 1.31v.063a4.6 4.6 0 0 0 .99 2.845l.382 1.194a4.6 4.6 0 0 0 2.289 2.693 6.8 6.8 0 0 1-2.71.553q-.408 0-.815-.047L0 17.315l2.876 1.845a11.56 11.56 0 0 0 6.254 1.837 11.13 11.13 0 0 0 8.623-3.799 12.02 12.02 0 0 0 2.984-7.826v-.11.001a8.5 8.5 0 0 0 1.754-1.915L24 5.09l-2.057.913q.073-.174.132-.359z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTwitter;
