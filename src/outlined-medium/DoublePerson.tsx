import * as React from 'react';
import { SVGProps } from 'react';
const SvgDoublePerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 0a3 3 0 1 0 0 6 3 3 0 1 0 0-6m0 4.5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5M8.1 8.25h3.15v-1.5H8.1c-1.162 0-2.1.938-2.1 2.1v7.05A2.1 2.1 0 0 0 8.047 18l.593 4.688c.09.75.727 1.312 1.485 1.312h1.125v-1.5h-1.125l-.75-6H8.1c-.33 0-.6-.27-.6-.6V8.85c0-.33.27-.6.6-.6m10.613 9.413L16.597 8.49a2.246 2.246 0 0 0-2.19-1.74H12.75v1.5h1.658c.345 0 .645.24.727.578L17.25 18H14.4l-.525 4.5H12.75V24h1.125c.758 0 1.402-.57 1.492-1.328l.368-3.172h1.515c.457 0 .892-.21 1.177-.562.278-.36.39-.833.285-1.275"
    />
  </svg>
);
export default SvgDoublePerson;
