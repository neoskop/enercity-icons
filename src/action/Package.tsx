import * as React from 'react';
import { SVGProps } from 'react';
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 21.447v-8.83l9-4.5v9.239zM2 8.117l9 4.5v8.83l-9-4.091zm10-6 3.264 1.633L6.5 8.132 3.236 6.5zm0 8.765L8.736 9.25 17.5 4.868 20.764 6.5zm11.93-4.728q-.017-.046-.038-.088a1 1 0 0 0-.157-.231q-.02-.027-.042-.052a1 1 0 0 0-.246-.177l-11-5.5a1 1 0 0 0-.894 0l-11 5.5a1 1 0 0 0-.246.177q-.023.025-.042.052a1 1 0 0 0-.195.319A1 1 0 0 0 0 6.5V18a1 1 0 0 0 .586.91l11 5a1 1 0 0 0 .828 0l11-5A1 1 0 0 0 24 18V6.5a1 1 0 0 0-.07-.346"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPackage;
