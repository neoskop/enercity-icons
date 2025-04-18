import * as React from 'react';
import { SVGProps } from 'react';
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.667 33.5C6.888 33.5 3 37.425 3 42.25S6.888 51 11.667 51h36.6C55.288 51 61 45.235 61 38.15c0-7.086-5.712-12.85-12.733-12.85-1.004 0-2.048.135-3.101.401a1.5 1.5 0 0 1-1.152-.176 1.5 1.5 0 0 1-.679-.947C41.794 17.761 35.879 13 28.95 13c-8.142 0-14.766 6.685-14.766 14.9 0 1.27.175 2.574.523 3.875a1.5 1.5 0 0 1-1.687 1.868c-.487-.079-.923-.143-1.353-.143m36.6 20.5h-36.6C5.233 54 0 48.729 0 42.25c0-6.383 5.08-11.594 11.382-11.746a17.4 17.4 0 0 1-.198-2.604c0-9.87 7.969-17.9 17.766-17.9 7.849 0 14.615 5.067 16.929 12.493a15 15 0 0 1 2.388-.193C56.942 22.3 64 29.41 64 38.15S56.942 54 48.267 54"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloud;
