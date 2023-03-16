import * as React from 'react';
import { SVGProps } from 'react';
const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.297 14.25h13.117l1.875-7.5H5.34l1.957 7.5Zm15.953-9a.749.749 0 0 1 .727.931l-2.25 9a.75.75 0 0 1-.727.569H7.688l.392 1.5h12.17a.75.75 0 1 1 0 1.5H7.5a.734.734 0 0 1-.268-.054.439.439 0 0 1-.053-.027l-.029-.017a.711.711 0 0 1-.214-.171.7.7 0 0 1-.092-.137.59.59 0 0 1-.044-.099.19.19 0 0 0-.012-.024c-.005-.01-.011-.02-.014-.032L2.42 1.5H.75a.75.75 0 1 1 0-1.5H3c.011 0 .021.003.03.006.009.002.017.005.025.005a.689.689 0 0 1 .137.028c.051.013.1.027.146.051.031.016.057.036.084.056l.018.013a.72.72 0 0 1 .12.104.7.7 0 0 1 .071.106l.001.001a.677.677 0 0 1 .07.143c.003.008.008.015.012.022.005.008.01.016.012.026L4.949 5.25h18.3ZM10.5 22.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0-3c-1.24 0-2.25 1.01-2.25 2.25S9.26 24 10.5 24s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25Zm6.75 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0-3c-1.24 0-2.25 1.01-2.25 2.25S16.01 24 17.25 24s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgShoppingCart;
