import * as React from 'react';
import { SVGProps } from 'react';
const SvgEuroSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M40.66 41.933a12 12 0 0 1-2.977 1.48 11.91 11.91 0 0 1-12.174-2.926 11.9 11.9 0 0 1-2.405-3.488H34.5a1.5 1.5 0 1 0 0-3H22.182a12.2 12.2 0 0 1-.129-3H34.5a1.5 1.5 0 1 0 0-3H22.7a11.9 11.9 0 0 1 2.81-4.488c4.043-4.052 10.412-4.67 15.15-1.466a1.5 1.5 0 0 0 1.68-2.487c-5.924-4.002-13.897-3.233-18.954 1.834A14.9 14.9 0 0 0 19.556 28H15.5a1.5 1.5 0 0 0 0 3h3.555a15 15 0 0 0 .101 3H15.5a1.5 1.5 0 0 0 0 3h4.377a14.9 14.9 0 0 0 3.51 5.605 14.9 14.9 0 0 0 15.224 3.662 15 15 0 0 0 3.73-1.85 1.5 1.5 0 1 0-1.682-2.485"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEuroSymbol;
