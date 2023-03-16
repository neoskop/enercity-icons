import * as React from 'react';
import { SVGProps } from 'react';
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M59.5 52c.827 0 1.5-.673 1.5-1.5v-36c0-.827-.673-1.5-1.5-1.5h-55c-.827 0-1.5.673-1.5 1.5v36c0 .827.673 1.5 1.5 1.5h55Zm-55-42h55c2.481 0 4.5 2.019 4.5 4.5v36c0 2.481-2.019 4.5-4.5 4.5h-55A4.505 4.505 0 0 1 0 50.5v-36C0 12.019 2.019 10 4.5 10Zm50.136 12.27L42.259 32.964l12.38 10.764a1.5 1.5 0 1 1-1.968 2.263L39.966 34.945l-7.372 6.37a.07.07 0 0 1-.015.01.042.042 0 0 0-.017.01 1.463 1.463 0 0 1-.404.237l-.05.017-.034.01c-.148.049-.301.08-.457.082h-.007a1.515 1.515 0 0 1-.49-.092 1.463 1.463 0 0 1-.455-.254.042.042 0 0 0-.017-.01.075.075 0 0 1-.015-.01l-7.372-6.37L10.556 45.99a1.496 1.496 0 0 1-2.116-.147 1.5 1.5 0 0 1 .147-2.116l12.38-10.764L8.592 22.27A1.5 1.5 0 1 1 10.55 20l21.062 18.198L52.675 20a1.5 1.5 0 1 1 1.96 2.27Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMail;
