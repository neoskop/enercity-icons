import * as React from 'react';
import { SVGProps } from 'react';
const SvgTipi = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38.133 61 32 48.013l-6.133 12.985h12.266Zm-7.151-28.397-5.167-4.77L10.271 61H22.55l8.094-17.139a.168.168 0 0 1 .02-.034.253.253 0 0 0 .015-.025 1.383 1.383 0 0 1 .369-.454 1.678 1.678 0 0 1 .257-.17l.011-.007a.324.324 0 0 1 .087-.042l.009-.002a1.198 1.198 0 0 1 .436-.111 1.382 1.382 0 0 1 .445.02 1.544 1.544 0 0 1 .31.096.261.261 0 0 1 .072.034 1.377 1.377 0 0 1 .273.18c.038.03.074.065.11.1.035.035.068.07.098.108a1.25 1.25 0 0 1 .165.249l.015.024a.151.151 0 0 1 .02.035L41.45 61h12.261L38.18 27.837l-5.162 4.765a.078.078 0 0 1-.021.014.08.08 0 0 0-.02.012 1.493 1.493 0 0 1-.438.268l-.016.005c-.008.002-.017.004-.025.008A1.522 1.522 0 0 1 32 33c-.169 0-.337-.035-.498-.09l-.024-.008a1.498 1.498 0 0 1-.455-.274.08.08 0 0 0-.02-.011.078.078 0 0 1-.021-.014ZM32 29.458l4.844-4.47-4.846-10.345-4.847 10.34L32 29.46ZM57.003 61H62.5a1.5 1.5 0 0 1 0 3h-61a1.5 1.5 0 0 1 0-3h5.479l.01-.03.003-.011c.014-.044.028-.089.048-.133l23.302-49.72-4.2-8.967a1.498 1.498 0 0 1 .722-1.994 1.497 1.497 0 0 1 1.994.723l3.141 6.705L35.142.866a1.5 1.5 0 1 1 2.716 1.273l-4.203 8.969 23.286 49.718c.02.04.032.081.045.123l.017.05ZM33.5 38.501a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001 0Zm4 1.533a1.5 1.5 0 1 0-.001-3.001 1.5 1.5 0 0 0 .001 3.001Zm-9.5-1.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTipi;
