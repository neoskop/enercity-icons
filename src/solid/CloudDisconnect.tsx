import * as React from 'react';
import { SVGProps } from 'react';
const SvgCloudDisconnect = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3a7 7 0 0 1 5.422 2.55L3.952 19.02C1.688 18.464 0 16.423 0 13.993A5.177 5.177 0 0 1 5.085 8.82 7.029 7.029 0 0 1 12 3Zm6.088 16.173c3.263 0 5.91-2.655 5.91-5.918 0-2.707-1.837-5.002-4.335-5.7l1.898-1.897a.747.747 0 0 0 0-1.058h-.008a.747.747 0 0 0-1.057 0L17.69 7.405 6.68 18.415l-2.04 2.04v.008a.748.748 0 1 0 1.058 1.058l2.346-2.348h10.043Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCloudDisconnect;
