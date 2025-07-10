import * as React from 'react';
import { SVGProps } from 'react';
const SvgThumbsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m21.855 20.4 2.122-8.025c.18-.922-.525-1.875-1.47-1.875H15.75V4.125a1.876 1.876 0 0 0-3.75 0c0 2.25-.188 3.84-.84 4.875-.66 1.035-1.785 1.5-3.66 1.5a.75.75 0 0 0-.75.75v9c0 .413.337.75.75.75h13.62c.36 0 .667-.255.735-.6M.75 21.75H4.5a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H.75a.75.75 0 0 0-.75.75V21c0 .415.335.75.75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThumbsUp;
