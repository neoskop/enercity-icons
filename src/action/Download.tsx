import * as React from 'react';
import { SVGProps } from 'react';
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.257 16.958v-.001L5.31 11.01a1.124 1.124 0 1 1 1.591-1.59l4.014 4.014-.041-10.056a1.125 1.125 0 0 1 1.12-1.129H12c.62 0 1.123.501 1.125 1.12l.041 10.087 3.932-3.933a1.124 1.124 0 1 1 1.591 1.591l-5.837 5.837-.002.003-.003.002-.013.01-.01.01a1 1 0 0 1-.145.119l-.034.018-.022.011a1 1 0 0 1-.137.074l-.044.014-.029.01-.025.008a1 1 0 0 1-.111.032c-.041.009-.084.011-.125.014h-.015l-.03.004-.05.005h-.005a1 1 0 0 1-.339-.056l-.021-.008-.03-.009-.042-.013a1 1 0 0 1-.146-.078l-.021-.012-.026-.014a1 1 0 0 1-.17-.139M4.875 19.5h14.25a1.125 1.125 0 1 1 0 2.25H4.875a1.125 1.125 0 1 1 0-2.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDownload;
