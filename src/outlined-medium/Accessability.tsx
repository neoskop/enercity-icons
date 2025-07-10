import * as React from 'react';
import { SVGProps } from 'react';
const SvgAccessability = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.513 6.789a.75.75 0 0 1 .474 1.422L12.75 10.29v3.783l3.296 6.592.03.07a.75.75 0 0 1-1.334.667l-.038-.067L12 15.927l-2.704 5.408a.75.75 0 0 1-1.342-.67l3.296-6.592V10.29L5.013 8.21l-.071-.028a.75.75 0 0 1 .471-1.415l.074.02L12 8.96zm-4.638-2.664a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0"
    />
  </svg>
);
export default SvgAccessability;
