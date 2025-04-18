import * as React from 'react';
import { SVGProps } from 'react';
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.25 7.125c0-.206.168-.375.375-.375H7.5c.426 0 .815-.24 1.007-.622L9.695 3.75h4.61l1.188 2.378c.192.381.581.622 1.007.622h4.875c.207 0 .375.169.375.375v12a.376.376 0 0 1-.375.375H2.625a.376.376 0 0 1-.375-.375zm.375 14.625h18.75A2.63 2.63 0 0 0 24 19.125v-12A2.63 2.63 0 0 0 21.375 4.5h-4.18l-1.189-2.378A1.13 1.13 0 0 0 15 1.5H9c-.426 0-.815.24-1.006.622L6.804 4.5H2.626A2.63 2.63 0 0 0 0 7.125v12a2.63 2.63 0 0 0 2.625 2.625m6.375-9c0-1.655 1.345-3 3-3s3 1.345 3 3-1.345 3-3 3-3-1.345-3-3m-2.25 0A5.256 5.256 0 0 0 12 18a5.256 5.256 0 0 0 5.25-5.25A5.256 5.256 0 0 0 12 7.5a5.256 5.256 0 0 0-5.25 5.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCamera;
