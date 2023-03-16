import * as React from 'react';
import { SVGProps } from 'react';
const SvgAccount = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.855 19.325C21.855 13.632 26.487 9 32.18 9s10.325 4.632 10.325 10.325c0 5.694-4.632 10.325-10.325 10.325s-10.325-4.631-10.325-10.325Zm-3 0c0 7.348 5.977 13.325 13.325 13.325 7.348 0 13.325-5.977 13.325-13.325C45.505 11.978 39.528 6 32.18 6c-7.348 0-13.325 5.978-13.325 13.325Zm33.43 35.95H12.074c.213-2.084 1.033-6.052 4.146-9.297 3.463-3.61 8.83-5.44 15.95-5.44 7.133 0 12.506 1.832 15.972 5.446 3.112 3.244 3.933 7.21 4.145 9.29Zm-41.78 3h43.35a1.5 1.5 0 0 0 1.498-1.43c.015-.297.286-7.345-5.011-12.9-4.054-4.253-10.168-6.408-18.172-6.408-7.994 0-14.101 2.154-18.152 6.402-5.298 5.556-5.026 12.608-5.011 12.906a1.5 1.5 0 0 0 1.498 1.43Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAccount;
