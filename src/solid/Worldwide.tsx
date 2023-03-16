import * as React from 'react';
import { SVGProps } from 'react';
const SvgWorldwide = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.485 11.25h8.985C16.32 4.965 14.362 0 11.978 0 9.593 0 7.635 4.965 7.485 11.25Zm-1.5 0C6.082 6.997 7.013 2.805 8.723.45A12.006 12.006 0 0 0 0 11.25h5.985Zm17.97 0H17.97c-.098-4.253-1.029-8.445-2.739-10.8a12.005 12.005 0 0 1 8.723 10.8ZM8.722 23.55c-1.71-2.355-2.64-6.547-2.737-10.8H0a12.003 12.003 0 0 0 8.721 10.8Zm7.748-10.8C16.32 19.035 14.362 24 11.978 24c-2.385 0-4.343-4.965-4.493-11.25h8.985Zm-1.238 10.8a12.005 12.005 0 0 0 8.723-10.8H17.97c-.098 4.253-1.029 8.445-2.739 10.8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgWorldwide;
