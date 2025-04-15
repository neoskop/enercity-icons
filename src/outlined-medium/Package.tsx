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
      d="M12.75 22.036v-9.573l9.75-4.875v9.573zM1.5 7.588l9.75 4.875v9.573L1.5 17.161zm10.5-6 3.893 1.947L6.32 8.32 2.427 6.375zm0 9.573L7.997 9.16l9.573-4.787 4.003 2.002zm11.948-5.046q-.014-.034-.03-.066a.7.7 0 0 0-.116-.171q-.015-.021-.033-.042a.7.7 0 0 0-.184-.132L12.335.08a.75.75 0 0 0-.67 0L.415 5.704a.7.7 0 0 0-.184.132q-.018.02-.033.04a.7.7 0 0 0-.116.173q-.016.032-.03.066a.7.7 0 0 0-.052.26v11.25c0 .284.16.544.415.671l11.25 5.625a.75.75 0 0 0 .67 0l11.25-5.625a.75.75 0 0 0 .415-.671V6.375a.7.7 0 0 0-.052-.26"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPackage;
