import * as React from 'react';
import { SVGProps } from 'react';
const SvgWorldwide = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.485 11.25h8.985C16.32 4.965 14.362 0 11.978 0S7.635 4.965 7.485 11.25m-1.5 0C6.082 6.997 7.013 2.805 8.723.45A12.01 12.01 0 0 0 0 11.25zm17.97 0H17.97c-.098-4.252-1.029-8.445-2.739-10.8a12.005 12.005 0 0 1 8.723 10.8M8.722 23.55c-1.71-2.355-2.64-6.547-2.737-10.8H0a12 12 0 0 0 8.721 10.8m7.748-10.8C16.32 19.035 14.362 24 11.978 24s-4.343-4.965-4.493-11.25zm-1.238 10.8a12.005 12.005 0 0 0 8.723-10.8H17.97c-.098 4.253-1.029 8.445-2.739 10.8"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWorldwide;
