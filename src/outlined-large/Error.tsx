import * as React from 'react';
import { SVGProps } from 'react';
const SvgError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M61 42.45A4.555 4.555 0 0 1 56.449 47H25.393c-.331 0-.653.11-.914.31l-10.598 8.145V48.5a1.5 1.5 0 0 0-1.5-1.5H7.56A4.56 4.56 0 0 1 3 42.45V11.56A4.566 4.566 0 0 1 7.56 7h48.889A4.56 4.56 0 0 1 61 11.56v30.89ZM56.449 4H7.56C3.392 4 0 7.391 0 11.56v30.89C0 46.613 3.392 50 7.56 50h3.321v8.5a1.5 1.5 0 0 0 2.414 1.19L25.902 50h30.547C60.612 50 64 46.613 64 42.45V11.56C64 7.391 60.612 4 56.449 4ZM33.444 35.012c.365.382.588.89.588 1.429 0 .603-.223 1.048-.588 1.428-.38.445-.904.604-1.428.604a2.1 2.1 0 0 1-1.509-.604c-.3-.38-.523-.825-.523-1.428 0-.54.223-1.047.604-1.43.746-.745 2.094-.745 2.856 0Zm.588-6.84V17.503A2.016 2.016 0 0 0 32 15.472a2.025 2.025 0 0 0-2.03 2.032v10.667c0 1.126.903 2.031 2.03 2.031a2.016 2.016 0 0 0 2.032-2.03Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgError;
