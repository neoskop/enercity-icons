import * as React from 'react';
import { SVGProps } from 'react';
const SvgSmartHeater = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.578 4.229C8.035 2.469 9.96 1.5 12 1.5c2.039 0 3.965.969 5.422 2.729a.748.748 0 0 0 1.056.1.75.75 0 0 0 .1-1.057C16.83 1.162 14.494 0 12 0 9.506 0 7.17 1.162 5.422 3.272a.75.75 0 1 0 1.156.957ZM12 3c-1.36 0-2.632.63-3.578 1.772a.75.75 0 0 0 1.157.957C10.233 4.936 11.093 4.5 12 4.5c.906 0 1.765.436 2.422 1.229a.75.75 0 0 0 1.156-.957C14.632 3.629 13.361 3 12 3Zm6 19.5a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-1.5 0v12c0 .414.336.75.75.75Zm-6 0a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-1.5 0v12c0 .414.336.75.75.75Zm-6 0c.414 0 .75-.32.75-.713V9.713C6.75 9.32 6.414 9 6 9s-.75.32-.75.713v12.074c0 .393.336.713.75.713Zm3.75-2.25h-1.5v-9h1.5v9Zm6 0h-1.5v-9h1.5v9Zm4.5 0H21a.75.75 0 1 1 0 1.5h-.75c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25h-1.5c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25h-1.5v.037C8.25 23.007 7.24 24 6 24s-2.25-.993-2.25-2.213v-.037H3a.75.75 0 1 1 0-1.5h.75v-9H3a.75.75 0 1 1 0-1.5h.75v-.037C3.75 8.493 4.76 7.5 6 7.5s2.25.993 2.25 2.213v.037h1.5c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25h1.5c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25H21a.75.75 0 1 1 0 1.5h-.75v9Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSmartHeater;
