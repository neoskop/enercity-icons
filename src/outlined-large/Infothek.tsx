import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfothek = (props: SVGProps<SVGSVGElement>) => (
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
      d="M32 4A28 28 0 0 0 4 32a27.7 27.7 0 0 0 4.31 14.92l-2.49 9.43a1.5 1.5 0 0 0 1.83 1.83l9.43-2.49A27.7 27.7 0 0 0 32 60a28 28 0 1 0 0-56m0 53a24.8 24.8 0 0 1-13.83-4.18 1.47 1.47 0 0 0-.83-.25q-.195-.03-.39 0l-7.57 2 2-7.57a1.46 1.46 0 0 0-.2-1.22A25 25 0 1 1 32 57m-.5-33a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2.5 4v13h1a2 2 0 0 1 0 4h-6a2 2 0 0 1 0-4h1V31h-1a2 2 0 0 1 0-4h4a1 1 0 0 1 1 1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfothek;
