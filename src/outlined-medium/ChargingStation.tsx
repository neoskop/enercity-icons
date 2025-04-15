import * as React from 'react';
import { SVGProps } from 'react';
const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 22.5h10.5V2.986c0-.82-.667-1.486-1.486-1.486H4.486C3.666 1.5 3 2.167 3 2.986zM17.78 2.47l4.5 4.5c.141.14.22.33.22.53v12c0 1.654-1.346 3-3 3a2.995 2.995 0 0 1-2.978-2.785l-.01-.042q-.01-.032-.012-.066a.854.854 0 0 0-.853-.852H15v4.495a.75.75 0 0 1-.75.75h-12a.75.75 0 0 1-.75-.75V2.986A2.99 2.99 0 0 1 4.486 0h7.528A2.99 2.99 0 0 1 15 2.986v14.269h.647c1.224 0 2.221.942 2.331 2.137l.01.041A.3.3 0 0 1 18 19.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V9.75h-.375c-1.034 0-1.875-.967-1.875-2.156V5.56l-2.03-2.03a.75.75 0 1 1 1.06-1.061m-9.706 8.78H9.75a.75.75 0 0 1 .643 1.136l-2.25 3.746a.749.749 0 1 1-1.286-.773l1.567-2.609H6.75a.75.75 0 0 1-.643-1.136l2.25-3.754a.749.749 0 1 1 1.286.771z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChargingStation;
