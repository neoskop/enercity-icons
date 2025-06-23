import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.043 2.428h-.007c-.144 0-.28.03-.407.079l-.017.006c-.14.057-.266.142-.37.247l-5.84 5.838a1.124 1.124 0 1 0 1.591 1.591l3.93-3.93.042 13.23a1.125 1.125 0 0 0 2.25-.004v-.004l-.042-13.204 4.016 4.016a1.124 1.124 0 1 0 1.59-1.591l-5.944-5.945-.001-.001a1.13 1.13 0 0 0-.368-.244l-.015-.004a1.12 1.12 0 0 0-.408-.08Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowUp;
