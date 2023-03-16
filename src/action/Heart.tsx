import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.718 4.125c-1.152 0-2.237.469-3.059 1.32-1.704 1.769-1.721 4.623-.038 6.363l7.386 7.654 7.373-7.646c1.683-1.745 1.665-4.603-.039-6.37a4.217 4.217 0 0 0-3.057-1.32 4.121 4.121 0 0 0-2.99 1.28l-.617.64a.937.937 0 0 1-1.351.001l-.62-.64A4.121 4.121 0 0 0 7.72 4.124Zm4.289 17.625a.938.938 0 0 1-.675-.286l-8.06-8.353c-2.377-2.457-2.36-6.48.037-8.967C4.487 2.922 6.053 2.25 7.72 2.25c1.618 0 3.135.638 4.282 1.796a5.977 5.977 0 0 1 4.283-1.796c1.665 0 3.23.672 4.409 1.894 2.395 2.485 2.411 6.51.037 8.973l-8.047 8.346a.94.94 0 0 1-.676.287Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHeart;
