import * as React from 'react';
import { SVGProps } from 'react';
const SvgEyeClosed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.352 5.365a.75.75 0 0 1 .796 1.271L2.648 18.84a.75.75 0 1 1-.797-1.271zM3.826 15.01l4.432-2.775c-.007-.046-.007-.083-.007-.127a3.75 3.75 0 0 1 5.505-3.315l3.255-2.033c-1.478-.877-3.18-1.508-5.01-1.508-5.7 0-10.17 6.157-10.357 6.42a.74.74 0 0 0 0 .87l.003.005c.098.134.89 1.218 2.18 2.463m18.531-3.338-.005-.006c-.104-.144-.887-1.223-2.177-2.461l-4.432 2.766q.009.069.007.136c0 2.07-1.68 3.75-3.75 3.75a3.76 3.76 0 0 1-1.762-.435l-3.247 2.033c1.476.87 3.179 1.507 5.009 1.507 5.708 0 10.17-6.157 10.357-6.42a.74.74 0 0 0 0-.87"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEyeClosed;
