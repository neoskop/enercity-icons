import * as React from 'react';
import { SVGProps } from 'react';
const SvgLife = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.5 12C1.5 6.21 6.21 1.5 12 1.5S22.5 6.21 22.5 12 17.79 22.5 12 22.5 1.5 17.79 1.5 12ZM0 12c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12C5.383 0 0 5.383 0 12Zm14.783.75.142.06c2.527 1.118 3.862 2.745 4.56 4.193a8.765 8.765 0 0 1-1.073 1.32A9.008 9.008 0 0 1 12 21a9.009 9.009 0 0 1-6.412-2.677 8.772 8.772 0 0 1-1.073-1.32c.698-1.448 2.033-3.075 4.56-4.193l.143-.06h.296a4.5 4.5 0 1 1 4.972 0h.297Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLife;
