import * as React from 'react';
import { SVGProps } from 'react';
const SvgRemoteControl = (props: SVGProps<SVGSVGElement>) => (
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
      d="m23.146 11.52.05.001a.75.75 0 0 0 .748-.7c.188-2.83-.915-5.662-3.024-7.772C18.802.931 15.967-.17 13.12.021a.75.75 0 0 0-.696.8c.027.413.385.71.8.697 2.401-.168 4.823.78 6.635 2.592 1.805 1.803 2.747 4.213 2.588 6.612a.75.75 0 0 0 .699.798Zm-3.28.001c-.023 0-.047 0-.072-.004a.75.75 0 0 1-.675-.818c.15-1.553-.43-3.11-1.59-4.27-1.177-1.177-2.737-1.755-4.276-1.589a.75.75 0 1 1-.163-1.491c1.993-.219 3.999.518 5.5 2.02 1.478 1.477 2.214 3.473 2.023 5.474a.75.75 0 0 1-.746.678ZM8.972 9.665a3.736 3.736 0 0 1 2.65-1.096 3.74 3.74 0 0 1 2.65 1.096c1.46 1.461 1.46 3.839.032 5.269l-7.462 6.63c-1.418 1.205-3.305 1.223-4.485.042-1.156-1.156-1.137-3.085.032-4.475l6.583-7.466ZM1.295 22.667a4.451 4.451 0 0 0 3.179 1.321c1.15 0 2.337-.43 3.35-1.291l7.507-6.672a5.253 5.253 0 0 0 0-7.42c-2.046-2.047-5.375-2.046-7.453.034l-6.626 7.513c-1.686 2.003-1.667 4.804.043 6.514Zm8-9.468a1.016 1.016 0 0 1 1.44 0 1.02 1.02 0 0 1-1.44 1.441 1.02 1.02 0 0 1 0-1.44Zm-1.06 2.502a2.512 2.512 0 0 0 1.78.737c.646 0 1.29-.246 1.782-.737a2.523 2.523 0 0 0 0-3.562 2.524 2.524 0 0 0-3.563 0 2.522 2.522 0 0 0 0 3.562Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRemoteControl;
