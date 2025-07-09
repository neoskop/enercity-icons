import * as React from 'react';
import { SVGProps } from 'react';
const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 11.25H1.5l3.098-4.875A.75.75 0 0 1 5.25 6H9zm0 1.5 3.75 8.993L1.5 12.75zm1.5-1.507L10.5 6h3l3 5.243zm9 1.507L12.023 24h-.046L7.5 12.75zm1.5 0h4.5l-8.25 8.993zm0-1.5L15 6h3.75a.75.75 0 0 1 .652.375L22.5 11.25zM12 4.5a.75.75 0 0 1-.75-.75v-3a.75.75 0 1 1 1.5 0v3a.75.75 0 0 1-.75.75m3 0a.75.75 0 0 1-.621-.334.75.75 0 0 1-.002-.836l1.5-2.25a.75.75 0 0 1 1.245.832l-1.5 2.25A.75.75 0 0 1 15 4.5m-6 0a.75.75 0 0 1-.622-.338l-1.5-2.25a.75.75 0 0 1 1.245-.832l1.5 2.25a.75.75 0 0 1-.21 1.042A.75.75 0 0 1 9 4.5"
    />
  </svg>
);
export default SvgDiamond;
