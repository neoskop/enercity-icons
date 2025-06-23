import * as React from 'react';
import { SVGProps } from 'react';
const SvgWorldwide = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.559 20.818c1.17-1.731 1.934-4.665 2.021-8.162h4.574a9.197 9.197 0 0 1-6.595 8.162ZM2.845 12.656H7.42c.087 3.497.852 6.43 2.022 8.162a9.197 9.197 0 0 1-6.596-8.162Zm6.596-9.473c-1.17 1.73-1.935 4.665-2.022 8.16H2.845c.277-3.886 2.975-7.108 6.596-8.16Zm-.71 8.16c.134-5.057 1.78-8.53 3.269-8.53 1.488 0 3.134 3.473 3.268 8.53H8.731ZM12 21.189c-1.488 0-3.135-3.473-3.269-8.532h6.537c-.134 5.059-1.78 8.531-3.268 8.531Zm9.154-9.844H16.58c-.087-3.496-.851-6.43-2.021-8.161a9.196 9.196 0 0 1 6.595 8.16ZM12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgWorldwide;
