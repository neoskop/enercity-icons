import * as React from 'react';
import { SVGProps } from 'react';
const SvgAccount = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12.75a5.256 5.256 0 0 0 5.25-5.25A5.256 5.256 0 0 0 12 2.25 5.256 5.256 0 0 0 6.75 7.5 5.256 5.256 0 0 0 12 12.75Zm8.25 9.75a.755.755 0 0 0 .75-.713l.001-.018c.005-.267.05-2.92-1.958-5.022-1.582-1.657-3.952-2.497-7.042-2.497-3.098 0-5.46.84-7.043 2.49-2.003 2.105-1.961 4.768-1.957 5.03v.017a.755.755 0 0 0 .75.713h16.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAccount;
