import * as React from 'react';
import { SVGProps } from 'react';
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m19.68 7.202-.85.85-2.874-2.874.85-.851a2.044 2.044 0 0 1 2.866.013c.786.785.79 2.069.009 2.862ZM6.626 20.258H3.753l-.003-2.875L14.895 6.238l2.875 2.875L6.625 20.258ZM20.732 3.28a3.55 3.55 0 0 0-4.98-.02L2.25 16.762l.005 4.996h4.99l13.5-13.498.003-.004a3.54 3.54 0 0 0-.016-4.976Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPen;
