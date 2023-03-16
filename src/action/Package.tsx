import * as React from 'react';
import { SVGProps } from 'react';
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 21.447v-8.83l9-4.5v9.239l-9 4.09ZM2 8.117l9 4.5v8.83l-9-4.091V8.118Zm10-6 3.264 1.633L6.5 8.132 3.236 6.5 12 2.118Zm0 8.765L8.736 9.25 17.5 4.868 20.764 6.5 12 10.882Zm11.93-4.728c-.011-.031-.025-.06-.038-.088a1.003 1.003 0 0 0-.157-.231c-.014-.017-.026-.036-.042-.052a.995.995 0 0 0-.246-.177l-11-5.5a.998.998 0 0 0-.894 0l-11 5.5a.995.995 0 0 0-.246.177c-.016.016-.028.035-.042.052a.958.958 0 0 0-.195.319A.988.988 0 0 0 0 6.5V18a1 1 0 0 0 .586.91l11 5a.996.996 0 0 0 .828 0l11-5A.999.999 0 0 0 24 18V6.5a.988.988 0 0 0-.07-.346Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPackage;
