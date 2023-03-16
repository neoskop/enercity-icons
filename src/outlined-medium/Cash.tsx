import * as React from 'react';
import { SVGProps } from 'react';
const SvgCash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.5c-4.73 0-8.53 1.87-8.53 3.75S7.269 9 11.999 9c4.732 0 8.532-1.87 8.532-3.75s-3.8-3.75-8.53-3.75ZM2.25 5.25C2.25 2.167 6.651 0 12 0s9.75 2.167 9.75 5.25v13.765C21.75 21.965 17.356 24 12 24s-9.75-2.035-9.75-4.985V5.25Zm18.281 4.5V7.868C18.861 9.49 15.651 10.5 12 10.5c-3.652 0-6.862-1.01-8.531-2.632v2.147c0 1.721 3.807 3.485 8.53 3.485 4.725 0 8.532-1.764 8.532-3.485V9.75Zm0 2.762C18.863 14.052 15.656 15 12 15c-3.656 0-6.863-.948-8.531-2.488v2.003c0 1.721 3.807 3.485 8.53 3.485 4.725 0 8.532-1.764 8.532-3.485v-2.003ZM12 19.5c3.656 0 6.863-.948 8.531-2.488v2.003c0 1.721-3.807 3.485-8.531 3.485s-8.531-1.764-8.531-3.485v-2.003c1.668 1.54 4.875 2.488 8.53 2.488Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCash;
