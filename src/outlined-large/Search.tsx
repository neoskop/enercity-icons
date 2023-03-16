import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={65}
    height={65}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M59.32 61.507a1.539 1.539 0 0 0 2.174-2.175l-13.98-13.98-2.174 2.174 13.98 13.98ZM39.912 46.49c.31.31.7.492 1.095.516.186.008.555-.013.832-.288l4.867-4.866c.274-.277.297-.64.287-.832a1.704 1.704 0 0 0-.516-1.096l-1.13-1.13a25.032 25.032 0 0 1-6.567 6.564l1.132 1.132ZM24.83 3.047c-12.012 0-21.785 9.772-21.785 21.783 0 12.012 9.773 21.784 21.785 21.784 12.011 0 21.784-9.772 21.784-21.784 0-12.011-9.773-21.783-21.784-21.783Zm24.705 40.02 14.112 14.111a4.59 4.59 0 0 1 .001 6.483A4.572 4.572 0 0 1 60.407 65a4.566 4.566 0 0 1-3.241-1.34l-14.11-14.11a4.115 4.115 0 0 1-2.218.498 4.743 4.743 0 0 1-3.079-1.403l-1.687-1.687a24.669 24.669 0 0 1-11.241 2.702C11.139 49.66 0 38.521 0 24.83 0 11.138 11.14 0 24.83 0c13.692 0 24.83 11.138 24.83 24.83a24.67 24.67 0 0 1-2.71 11.26l1.682 1.682a4.742 4.742 0 0 1 1.403 3.078 4.15 4.15 0 0 1-.5 2.217ZM24.599 7.518c9.546 0 17.312 7.767 17.312 17.312a1.524 1.524 0 0 1-3.046 0c0-7.865-6.4-14.265-14.266-14.265a1.524 1.524 0 0 1 0-3.047Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSearch;
