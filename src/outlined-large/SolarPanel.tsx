import * as React from 'react';
import { SVGProps } from 'react';
const SvgSolarPanel = (props: SVGProps<SVGSVGElement>) => (
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
      d="m43.401 60.997-.764-17.333h15.914l2.164 17.333H43.401ZM5.362 43.664H20.84l-.763 17.333H3.2l2.163-17.333ZM10.438 3H22.63l-.764 17.332H8.276L10.437 3ZM55.64 20.332H41.611L40.848 3h12.628l2.163 17.332Zm-13.896 3h14.271l2.163 17.332H42.505l-.762-17.332Zm-16.873-3L25.633 3h12.211l.763 17.332H24.87Zm-16.97 3h13.835l-.764 17.332H5.737L7.9 23.332Zm31.733 20.332.764 17.333H23.081l.763-17.333h15.79Zm-15.658-3 .764-17.332h14l.763 17.332H23.975ZM63.903 62.31 56.29 1.314A1.5 1.5 0 0 0 54.8 0H9.114a1.5 1.5 0 0 0-1.488 1.314L.011 62.311a1.498 1.498 0 0 0 1.49 1.686h60.914a1.5 1.5 0 0 0 1.488-1.686Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSolarPanel;
