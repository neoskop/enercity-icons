import * as React from 'react';
import { SVGProps } from 'react';
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 3v58h44V21H41.5a5.507 5.507 0 0 1-5.5-5.5V3zm31.5 15h12.379L38.999 3.121v12.38c0 1.378 1.122 2.5 2.5 2.5M40.56.44l16 16c.282.281.44.663.44 1.06v45a1.5 1.5 0 0 1-1.5 1.5h-47l-.026-.002-.026-.003h-.901v-.346A1.5 1.5 0 0 1 7 62.5v-61A1.5 1.5 0 0 1 8.5 0h31c.397 0 .779.158 1.06.44M19.516 30.484h25a1.5 1.5 0 0 1 0 3h-25a1.5 1.5 0 0 1 0-3m25 8.5h-25a1.5 1.5 0 0 0 0 3h25a1.5 1.5 0 0 0 0-3m-25 8.5h25a1.5 1.5 0 0 1 0 3h-25a1.5 1.5 0 0 1 0-3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFile;
