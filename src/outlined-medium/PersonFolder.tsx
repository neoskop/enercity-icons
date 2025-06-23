import * as React from 'react';
import { SVGProps } from 'react';
const SvgPersonFolder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.25 22.5a.75.75 0 0 0 .75-.75V2.25a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75V4.5h.75a.75.75 0 1 1 0 1.5H4.5v3h.75a.75.75 0 1 1 0 1.5H4.5v3h.75a.75.75 0 1 1 0 1.5H4.5v3h.75a.75.75 0 1 1 0 1.5H4.5v2.25c0 .414.336.75.75.75h15ZM5.25 0h15c1.24 0 2.25 1.01 2.25 2.25v19.5c0 1.24-1.01 2.25-2.25 2.25h-15C4.01 24 3 22.99 3 21.75V19.5h-.75a.75.75 0 1 1 0-1.5H3v-3h-.75a.75.75 0 1 1 0-1.5H3v-3h-.75a.75.75 0 1 1 0-1.5H3V6h-.75a.75.75 0 1 1 0-1.5H3V2.25C3 1.01 4.01 0 5.25 0Zm8.922 11.764a3.023 3.023 0 0 1 2.51 2.3l.545 2.254a.743.743 0 0 1-.71.932H8.983a.743.743 0 0 1-.71-.932l.538-2.255a3.04 3.04 0 0 1 2.516-2.3 2.744 2.744 0 0 1-1.231-2.293c0-1.505 1.187-2.72 2.658-2.72 1.463 0 2.65 1.215 2.65 2.72 0 .963-.492 1.804-1.232 2.294Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPersonFolder;
