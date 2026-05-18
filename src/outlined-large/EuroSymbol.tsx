import * as React from 'react';
import { SVGProps } from 'react';
const SvgEuroSymbol = (props: SVGProps<SVGSVGElement>) => (
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
      d="M40.66 41.932a11.889 11.889 0 0 1-2.977 1.48 11.91 11.91 0 0 1-12.174-2.925 11.903 11.903 0 0 1-2.405-3.488H34.5a1.5 1.5 0 1 0 0-3H22.182a12.158 12.158 0 0 1-.129-3H34.5a1.5 1.5 0 1 0 0-3H22.7a11.916 11.916 0 0 1 2.81-4.488c4.043-4.052 10.412-4.67 15.15-1.466a1.5 1.5 0 0 0 1.68-2.487c-5.924-4.002-13.897-3.233-18.954 1.834A14.9 14.9 0 0 0 19.556 28H15.5a1.5 1.5 0 0 0 0 3h3.555a15.048 15.048 0 0 0 .101 3H15.5a1.5 1.5 0 0 0 0 3h4.377a14.89 14.89 0 0 0 3.51 5.605 14.898 14.898 0 0 0 15.224 3.662 14.904 14.904 0 0 0 3.73-1.85 1.5 1.5 0 1 0-1.682-2.485Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEuroSymbol;
