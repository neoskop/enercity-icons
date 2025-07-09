import * as React from 'react';
import { SVGProps } from 'react';
const SvgSurfFon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.5 10.5h-.75V4.022c0-.977-.796-1.772-1.772-1.772H4.022c-.977 0-1.772.796-1.772 1.772V14.25H.75A.75.75 0 0 0 0 15v1.174a2.58 2.58 0 0 0 2.576 2.576H16.5V21c0 .827.673 1.5 1.5 1.5h4.5c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5M3.75 4.022c0-.15.122-.272.272-.272h15.955c.15 0 .272.122.272.272V10.5H18c-.827 0-1.5.673-1.5 1.5v2.25H3.75zM2.576 17.25A1.08 1.08 0 0 1 1.5 16.174v-.424h7.94l.53.53c.14.141.33.22.53.22h3c.2 0 .39-.079.53-.22l.53-.53h1.94v1.5zM18 21v-9h4.5l.001 9z"
    />
  </svg>
);
export default SvgSurfFon;
