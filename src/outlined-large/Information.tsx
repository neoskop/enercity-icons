import * as React from 'react';
import { SVGProps } from 'react';
const SvgInformation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M61 42.45A4.555 4.555 0 0 1 56.45 47H25.392a1.5 1.5 0 0 0-.914.31L13.88 55.455V48.5a1.5 1.5 0 0 0-1.5-1.5H7.56A4.56 4.56 0 0 1 3 42.45V11.56A4.566 4.566 0 0 1 7.56 7h48.888A4.56 4.56 0 0 1 61 11.56v30.89ZM56.45 4H7.56C3.392 4 0 7.391 0 11.56v30.89C0 46.613 3.392 50 7.56 50h3.321v8.5a1.5 1.5 0 0 0 2.414 1.189l12.607-9.69H56.45C60.612 50 64 46.614 64 42.45V11.56C64 7.391 60.612 4 56.45 4ZM30.036 38.5h3.918V23.322h-3.918V38.5Zm-.638-20.388a2.611 2.611 0 1 1 5.222-.002 2.611 2.611 0 0 1-5.222.002Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgInformation;
