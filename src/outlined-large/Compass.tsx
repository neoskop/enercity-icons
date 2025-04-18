import * as React from 'react';
import { SVGProps } from 'react';
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M32 3C16.01 3 3 16.01 3 32s13.01 29 29 29 29-13.01 29-29S47.99 3 32 3m0 61C14.355 64 0 49.645 0 32S14.355 0 32 0s32 14.355 32 32-14.355 32-32 32m-4.303-36.303-7.44 16.047 16.046-7.442 7.441-16.046zm-10.524 20.63a1.5 1.5 0 0 1-1.361-2.131l9.395-20.26c.148-.322.407-.58.73-.729l20.26-9.395a1.499 1.499 0 0 1 1.991 1.991l-9.394 20.26a1.5 1.5 0 0 1-.73.73l-20.26 9.394c-.203.094-.418.14-.63.14M30.5 57.22a1.5 1.5 0 0 0 3 0v-4a1.5 1.5 0 0 0-3 0zM57.218 33.5h-4a1.5 1.5 0 0 1 0-3h4a1.5 1.5 0 0 1 0 3M30.499 10.782a1.5 1.5 0 0 0 3 0v-4a1.5 1.5 0 0 0-3 0zM10.781 33.5h-4a1.5 1.5 0 0 1 0-3h4a1.5 1.5 0 0 1 0 3M32 35.083a3.083 3.083 0 1 0-.002-6.166A3.083 3.083 0 0 0 32 35.083"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompass;
