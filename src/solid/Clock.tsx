import * as React from 'react';
import { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.201 17.342a.75.75 0 0 1-1.06-.015l-4.67-4.796-.002-.002-.006-.006c-.019-.02-.026-.044-.041-.065a.7.7 0 0 1-.115-.177c-.025-.06-.03-.124-.038-.187-.004-.033-.019-.061-.019-.094V5.294a.75.75 0 1 1 1.5 0v6.401l4.465 4.587a.75.75 0 0 1-.014 1.06M12 0C5.383 0 0 5.383 0 12c0 6.616 5.383 12 12 12s12-5.384 12-12c0-6.617-5.383-12-12-12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClock;
