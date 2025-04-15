import * as React from 'react';
import { SVGProps } from 'react';
const SvgSolarPanel = (props: SVGProps<SVGSVGElement>) => (
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
      d="m43.401 60.997-.764-17.333h15.914l2.164 17.333zM5.362 43.664H20.84l-.763 17.333H3.2zM10.438 3H22.63l-.764 17.332H8.276zM55.64 20.332H41.611L40.848 3h12.628zm-13.896 3h14.271l2.163 17.332H42.505zm-16.873-3L25.633 3h12.211l.763 17.332zm-16.97 3h13.835l-.764 17.332H5.737zm31.733 20.332.764 17.333H23.081l.763-17.333zm-15.658-3 .764-17.332h14l.763 17.332zM63.903 62.31 56.29 1.314A1.5 1.5 0 0 0 54.8 0H9.114a1.5 1.5 0 0 0-1.488 1.314L.011 62.311a1.498 1.498 0 0 0 1.49 1.686h60.914a1.5 1.5 0 0 0 1.488-1.686"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSolarPanel;
