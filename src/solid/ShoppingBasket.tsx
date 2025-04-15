import * as React from 'react';
import { SVGProps } from 'react';
const SvgShoppingBasket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 11.07c0-1.535-1.228-2.777-2.74-2.777h-3.354l-2.814-3.75A3.83 3.83 0 0 0 12.007 3c-1.22 0-2.35.561-3.084 1.542L6.11 8.292H2.74C1.236 8.286 0 9.536 0 11.07c0 1.347.95 2.47 2.2 2.725l1.85 6.153a2.35 2.35 0 0 0 2.23 1.662h11.44a2.345 2.345 0 0 0 2.23-1.654l1.85-6.154a2.78 2.78 0 0 0 2.192-2.725zM10.114 5.433a2.34 2.34 0 0 1 1.893-.943c.757 0 1.438.344 1.894.943l2.141 2.852H7.988l2.14-2.852zm11.139 6.917H2.74c-.689 0-1.243-.576-1.243-1.28S2.06 9.79 2.74 9.79h18.513c.688 0 1.242.576 1.242 1.28s-.561 1.28-1.242 1.28"
    />
  </svg>
);
export default SvgShoppingBasket;
