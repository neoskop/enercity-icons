import * as React from 'react';
import { SVGProps } from 'react';
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.855 2.254-2.52-.004c-2.828 0-4.657 1.927-4.657 4.91v2.263H7.146a.402.402 0 0 0-.396.407v3.28c0 .225.178.407.396.407h2.532v8.276c0 .225.178.407.396.407h3.305a.402.402 0 0 0 .396-.407l-.001-8.276h2.96a.402.402 0 0 0 .397-.407l.002-3.28a.413.413 0 0 0-.117-.287.391.391 0 0 0-.28-.12h-2.962V7.505c0-.923.214-1.39 1.384-1.39l1.696-.001a.402.402 0 0 0 .396-.407V2.661a.402.402 0 0 0-.395-.407Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFacebook;
