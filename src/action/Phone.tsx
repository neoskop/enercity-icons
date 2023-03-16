import * as React from 'react';
import { SVGProps } from 'react';
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.34 23.959c-2.59 0-6.546-1.093-11.372-5.92-7-7-7.06-13.294-4.166-16.19C4.497-.847 6.08.098 6.503.453c.675.57 1.972 2.309 2.89 4.125 1.19 2.353.147 3.165-1.295 4.288l-.39.306c-.42.332-.434.559-.439.644-.059 1.01 2.024 3.095 2.913 3.984.89.889 2.98 2.992 3.984 2.913.085-.004.312-.018.644-.438l.306-.391c1.124-1.442 1.934-2.484 4.288-1.295 1.82.919 3.557 2.217 4.125 2.89.261.31.798 1.187.146 2.62a1 1 0 0 1-1.82-.829c.171-.375.126-.53.125-.532-.3-.35-1.785-1.508-3.478-2.364-.886-.447-.885-.446-1.808.739l-.314.4c-.59.747-1.295 1.15-2.097 1.196-1.596.09-3.23-1.21-5.515-3.495-2.285-2.285-3.589-3.92-3.496-5.515.047-.802.45-1.507 1.196-2.096l.401-.314c1.186-.924 1.186-.924.74-1.81-.856-1.69-2.014-3.175-2.395-3.496-.088-.026-.783.066-1.998 1.28C1.368 5.112.946 10.189 7.356 16.6c6.607 6.605 10.97 5.474 12.15 4.968a1 1 0 0 1 .784 1.84c-.52.223-1.53.55-2.95.55Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPhone;
