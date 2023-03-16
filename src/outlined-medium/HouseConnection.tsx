import * as React from 'react';
import { SVGProps } from 'react';
const SvgHouseConnection = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22.506a.748.748 0 0 1-.75-.746c0-.412.336-.746.75-.746s.75.334.75.746a.748.748 0 0 1-.75.746Zm-6.75-5.972V7.576c0-.028-.014-.052-.016-.08l6.73-5.767 6.8 5.782c-.003.022-.014.043-.014.065v8.958H5.25Zm18 4.48h-9.139a2.237 2.237 0 0 0-1.361-1.356v-1.63h6.75c.415 0 .75-.334.75-.747V8.775l1.013.862a.752.752 0 0 0 1.058-.083.745.745 0 0 0-.084-1.053L12.45.178a.756.756 0 0 0-.976.002L1.76 8.503a.744.744 0 0 0-.08 1.053.755.755 0 0 0 1.058.079l1.011-.866v8.512c0 .413.335.746.75.746h6.75v1.63a2.237 2.237 0 0 0-1.361 1.357H.75a.747.747 0 1 0 0 1.492h9.139A2.245 2.245 0 0 0 12 24c.976 0 1.8-.627 2.111-1.494h9.139a.747.747 0 1 0 0-1.492Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHouseConnection;
