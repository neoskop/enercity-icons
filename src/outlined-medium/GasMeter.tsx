import * as React from 'react';
import { SVGProps } from 'react';
const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.302 17.875A10.498 10.498 0 0 0 12 22.5c3.614 0 6.808-1.836 8.698-4.625H3.302ZM22.5 12c0-5.79-4.71-10.5-10.5-10.5S1.5 6.21 1.5 12c0 1.563.353 3.042.968 4.375h19.065c.614-1.333.967-2.812.967-4.375Zm1.5 0c0 1.93-.469 3.748-1.282 5.365a.734.734 0 0 1-.062.13C20.658 21.351 16.636 24 12 24c-4.636 0-8.658-2.648-10.656-6.506a.73.73 0 0 1-.062-.129A11.907 11.907 0 0 1 0 12C0 5.383 5.384 0 12 0s12 5.383 12 12Zm-11.002.015c-.017-.416-.432-1.766-.998-3.379-.566 1.614-.981 2.966-.998 3.387a.998.998 0 0 0 1.995-.008Zm1.5 0a2.497 2.497 0 1 1-4.995 0c0-1.38 2.497-7.658 2.497-7.658s2.498 6.279 2.498 7.658Zm4.18-.015h1.5a8.186 8.186 0 0 0-4.874-7.482l-.607 1.372a6.685 6.685 0 0 1 3.98 6.11ZM9.302 5.89A6.685 6.685 0 0 0 5.323 12h-1.5a8.185 8.185 0 0 1 4.874-7.482l.606 1.372Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGasMeter;
