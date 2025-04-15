import * as React from 'react';
import { SVGProps } from 'react';
const SvgLife = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.5 12C1.5 6.21 6.21 1.5 12 1.5S22.5 6.21 22.5 12 17.79 22.5 12 22.5 1.5 17.79 1.5 12M0 12c0 6.616 5.384 12 12 12s12-5.384 12-12S18.616 0 12 0 0 5.384 0 12m14.783.75.142.06c2.527 1.118 3.862 2.745 4.56 4.193a9 9 0 0 1-1.073 1.32A9 9 0 0 1 12 21a9 9 0 0 1-6.412-2.677 9 9 0 0 1-1.073-1.32c.698-1.448 2.033-3.075 4.56-4.193l.143-.06h.296a4.5 4.5 0 1 1 4.972 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLife;
