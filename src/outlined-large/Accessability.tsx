import * as React from 'react';
import { SVGProps } from 'react';
const SvgAccessability = (props: SVGProps<SVGSVGElement>) => (
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
      d="M49.367 18.104a2 2 0 0 1 1.266 3.793L34 27.44v10.087l8.789 17.579.082.187a2 2 0 0 1-3.559 1.78l-.101-.178L32 42.473l-7.211 14.422a2 2 0 0 1-3.578-1.79L30 37.528V27.44l-16.633-5.542-.19-.075a2 2 0 0 1 1.258-3.775l.198.056L32 23.894zM37 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
  </svg>
);
export default SvgAccessability;
