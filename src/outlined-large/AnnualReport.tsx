import * as React from 'react';
import { SVGProps } from 'react';
const SvgAnnualReport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M56 51.5c0 1.379-1.121 2.5-2.5 2.5h-36a2.502 2.502 0 0 1-2.5-2.5v-46C15 4.121 16.121 3 17.5 3h36C54.879 3 56 4.121 56 5.5v46Zm-7 6.934C49 59.849 47.879 61 46.5 61h-36C9.121 61 8 59.849 8 58.434V13.7c0-1.415 1.121-2.566 2.5-2.566H12V51.5c0 3.032 2.468 5.5 5.5 5.5H49v1.434ZM53.5 0h-36A5.507 5.507 0 0 0 12 5.5v2.634h-1.5C7.468 8.134 5 10.631 5 13.7v44.734C5 61.503 7.468 64 10.5 64h36c3.032 0 5.5-2.497 5.5-5.566V57h1.5c3.032 0 5.5-2.468 5.5-5.5v-46C59 2.468 56.532 0 53.5 0Zm-3 8h-30a1.5 1.5 0 0 0 0 3h30a1.5 1.5 0 0 0 0-3Zm-15 8a1.5 1.5 0 0 1 0 3h-15a1.5 1.5 0 0 1 0-3h15ZM44 35h-8v-8a1 1 0 0 0-1-1c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10a1 1 0 0 0-1-1Zm-5.996-11.001a1 1 0 0 1 1-.999C43.964 23 48 27.035 48 31.995a1 1 0 0 1-1 1L39 33a.997.997 0 0 1-1-1.001l.004-8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAnnualReport;
