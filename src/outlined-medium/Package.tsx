import * as React from 'react';
import { SVGProps } from 'react';
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 22.036v-9.573l9.75-4.875v9.573l-9.75 4.875ZM1.5 7.588l9.75 4.875v9.573L1.5 17.161V7.588Zm10.5-6 3.893 1.947L6.32 8.32 2.427 6.375 12 1.588Zm0 9.573L7.997 9.16l9.573-4.787 4.003 2.002L12 11.16Zm11.948-5.046c-.009-.023-.02-.044-.03-.066a.685.685 0 0 0-.116-.171c-.011-.013-.02-.029-.033-.042a.74.74 0 0 0-.184-.132L12.335.08a.748.748 0 0 0-.67 0L.415 5.704a.74.74 0 0 0-.184.132c-.013.013-.022.028-.033.04a.704.704 0 0 0-.116.173c-.01.022-.021.043-.03.066a.74.74 0 0 0-.052.26v11.25c0 .284.16.544.415.671l11.25 5.625a.751.751 0 0 0 .67 0l11.25-5.625a.75.75 0 0 0 .415-.671V6.375a.74.74 0 0 0-.052-.26Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPackage;
