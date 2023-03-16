import * as React from 'react';
import { SVGProps } from 'react';
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M42.72 11.41a1.402 1.402 0 0 0-1.98 0l-2.35 2.35 5.073 5.074 2.35-2.351a1.4 1.4 0 0 0 0-1.978L42.72 11.41ZM17.563 39.658l2.537 2.536 21.241-21.24-5.074-5.072-21.24 21.24 2.536 2.536Zm-2.12 2.12-1.86-1.858-1.762 5.48 5.481-1.761-1.86-1.86ZM9.958 49.15a1.498 1.498 0 0 1-1.887-1.886l3.407-10.601c.003-.009.007-.016.011-.023l.01-.02c.031-.09.071-.175.12-.256l.014-.027a1.555 1.555 0 0 1 .212-.277L35.208 12.7l3.411-3.411a4.404 4.404 0 0 1 6.221 0l3.094 3.095a4.404 4.404 0 0 1 .001 6.22l-3.412 3.41-23.36 23.362a.086.086 0 0 1-.023.015.094.094 0 0 0-.022.014 1.432 1.432 0 0 1-.392.26l-.04.02a.741.741 0 0 1-.091.042c-.011.006-.022.012-.035.016L9.96 49.15Zm-.46 5.043h44.02a1.5 1.5 0 0 1 0 3H9.498a1.5 1.5 0 0 1 0-3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPen;
