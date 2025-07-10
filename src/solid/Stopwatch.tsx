import * as React from 'react';
import { SVGProps } from 'react';
const SvgStopwatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.25 14.25h-3.953c-.262.45-.742.75-1.297.75-.825 0-1.5-.675-1.5-1.5 0-.555.3-1.035.75-1.297V6.75c0-.412.338-.75.75-.75s.75.338.75.75v5.453c.225.135.412.322.547.547h3.953c.413 0 .75.338.75.75s-.337.75-.75.75m2.683-7.622L21 5.56l.22.22a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061l-1.5-1.5a.75.75 0 1 0-1.06 1.06l.22.22-1.068 1.067-.002-.002a10.42 10.42 0 0 0-6.12-2.535h-.006c0-.011.006-.02.006-.03V1.5h1.5a.75.75 0 1 0 0-1.5h-4.5a.75.75 0 1 0 0 1.5h1.5V3c0 .01.006.019.006.03h-.006C5.805 3.413 1.5 7.965 1.5 13.5 1.5 19.29 6.21 24 12 24s10.5-4.71 10.5-10.5a10.46 10.46 0 0 0-2.565-6.87z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStopwatch;
