import * as React from 'react';
import { SVGProps } from 'react';
const SvgConnectorSchuko = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M62.5 25H58v-5.49c0-.24-.06-.47-.16-.68C52.86 9.07 42.96 3 32 3 21.04 3 11.14 9.07 6.16 18.83c-.11.21-.16.44-.16.68V25H1.5c-.83 0-1.5.67-1.5 1.5v11c0 .83.67 1.5 1.5 1.5H6v5.49c0 .24.06.47.16.68C11.14 54.93 21.04 61 32 61c10.96 0 20.86-6.07 25.84-15.83.11-.21.16-.44.16-.68V39h4.5c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5ZM61 36h-4.5c-.83 0-1.5.67-1.5 1.5v6.62c-4.28 8.12-12.39 13.31-21.5 13.82v-4.45c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v4.45c-9.11-.52-17.22-5.7-21.5-13.82V37.5c0-.83-.67-1.5-1.5-1.5H3v-8h4.5c.83 0 1.5-.67 1.5-1.5v-6.62c4.28-8.13 12.39-13.31 21.5-13.83v4.45c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V6.05c9.11.52 17.22 5.7 21.5 13.82v6.62c0 .83.67 1.5 1.5 1.5H61V36Z"
      fill="currentColor"
    />
    <path
      d="M19 25c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm26-11c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgConnectorSchuko;
