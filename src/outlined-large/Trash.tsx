import * as React from 'react';
import { SVGProps } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m9.825 14 1.81-4h38.731l1.81 4zM24 3.344c0-.19.154-.344.345-.344h13.311c.19 0 .344.154.344.344V7H24zm31.867 11.538-3.166-7A1.5 1.5 0 0 0 51.334 7H41V3.344C41 1.5 39.5 0 37.656 0h-13.31A3.35 3.35 0 0 0 21 3.344V7H10.667c-.589 0-1.124.345-1.366.882l-3.167 7A1.497 1.497 0 0 0 7.5 17h47a1.502 1.502 0 0 0 1.367-2.118M51.334 20a1.5 1.5 0 0 0-1.5 1.5v36.378C49.834 59.6 48.48 61 46.815 61H15.186c-1.665 0-3.019-1.4-3.019-3.122V21.5a1.5 1.5 0 0 0-3 0v36.378c0 3.376 2.7 6.122 6.019 6.122h31.629c3.319 0 6.019-2.746 6.019-6.122V21.5a1.5 1.5 0 0 0-1.5-1.5M32.5 27.885v23a1.5 1.5 0 0 1-3 0v-23a1.5 1.5 0 0 1 3 0m10.167 23v-23a1.5 1.5 0 0 0-3 0v23a1.5 1.5 0 0 0 3 0m-20.333-23v23a1.5 1.5 0 0 1-3 0v-23a1.5 1.5 0 0 1 3 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrash;
