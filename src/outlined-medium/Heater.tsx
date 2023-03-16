import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeater = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 4.901v.693l1.685.43a.75.75 0 1 1-.37 1.453l-2.25-.573A.75.75 0 0 1 0 6.177v-1.86a.75.75 0 0 1 .567-.728l2.25-.566a.75.75 0 1 1 .366 1.454L1.5 4.901Zm8.25.349a2.25 2.25 0 1 0-4.5 0v13.5a2.25 2.25 0 1 0 4.5 0V5.25Zm-3 0a.75.75 0 1 1 1.5 0v13.5a.75.75 0 1 1-1.5 0V5.25ZM13.5 3a2.25 2.25 0 0 1 2.25 2.25v13.5a2.25 2.25 0 1 1-4.5 0V5.25A2.25 2.25 0 0 1 13.5 3Zm0 1.5a.75.75 0 0 0-.75.75v13.5a.75.75 0 1 0 1.5 0V5.25a.75.75 0 0 0-.75-.75Zm6-1.5a2.25 2.25 0 0 1 2.25 2.25v13.5a2.25 2.25 0 1 1-4.5 0V5.25A2.25 2.25 0 0 1 19.5 3Zm0 1.5a.75.75 0 0 0-.75.75v13.5a.75.75 0 1 0 1.5 0V5.25a.75.75 0 0 0-.75-.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHeater;
