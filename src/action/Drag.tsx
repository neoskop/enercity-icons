import * as React from 'react';
import { SVGProps } from 'react';
const SvgDrag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.92 4.08a1.125 1.125 0 0 0-1.59 0L4.08 18.33l-.078.085A1.125 1.125 0 0 0 5.67 19.92L19.92 5.67l.078-.086a1.125 1.125 0 0 0-.078-1.505m0 9.75a1.125 1.125 0 0 0-1.59 0l-4.5 4.5-.078.085a1.125 1.125 0 0 0 1.668 1.506l4.5-4.5.078-.086a1.125 1.125 0 0 0-.078-1.506"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDrag;
