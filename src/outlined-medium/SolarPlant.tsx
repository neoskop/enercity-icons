import * as React from 'react';
import { SVGProps } from 'react';
const SvgSolarPlant = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.234 3a.75.75 0 0 0 .75-.75V.75a.75.75 0 1 0-1.5 0v1.5c0 .415.335.75.75.75m1.463 3.652c0-.807-.656-1.463-1.463-1.463s-1.463.656-1.463 1.463a1.464 1.464 0 0 0 2.926 0m1.5 0a2.966 2.966 0 0 1-2.963 2.962A2.966 2.966 0 0 1 9.27 6.652a2.966 2.966 0 0 1 2.964-2.963 2.966 2.966 0 0 1 2.963 2.963m.269 13.107.242 2.741h4.048l-.685-2.741zm-6.586 0H5.396L4.71 22.5h3.926zm.374-4.243H6.456l-.685 2.743h3.24zm4.948 6.984-.242-2.741h-3.575l-.242 2.741zm-3.443-6.984-.241 2.743h3.31l-.241-2.743zm4.575 2.743h3.362l-.685-2.743h-2.918zm3.99-3.674 2.12 8.484a.75.75 0 0 1-.727.931H3.75a.75.75 0 0 1-.727-.931l2.12-8.484a.75.75 0 0 1 .728-.569h12.725a.75.75 0 0 1 .727.569M9.12 4.289a.75.75 0 0 1-.53-.22L7.53 3.01a.75.75 0 1 1 1.06-1.06l1.06 1.06a.75.75 0 0 1-.53 1.28M6.33 7.402h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5m1.2 2.892 1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06m3.953.759v1.5a.75.75 0 1 0 1.5 0v-1.5a.75.75 0 1 0-1.5 0m3.332-.759a.749.749 0 1 1 1.06-1.06l1.061 1.06a.75.75 0 1 1-1.06 1.06zm1.07-3.642c0 .415.335.75.75.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0-.75.75m-.01-2.583a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l1.06-1.06a.75.75 0 1 1 1.061 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSolarPlant;
