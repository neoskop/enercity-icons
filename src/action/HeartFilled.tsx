import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeartFilled = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M20.66 4.167a6.16 6.16 0 0 0-4.467-1.917 6.06 6.06 0 0 0-4.196 1.677A6.06 6.06 0 0 0 7.799 2.25c-1.688 0-3.275.68-4.468 1.917-2.427 2.512-2.443 6.58-.037 9.064l7.899 8.175a1.126 1.126 0 0 0 1.618 0l7.887-8.168c2.405-2.49 2.387-6.56-.037-9.071"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeartFilled;
