import * as React from 'react';
import { SVGProps } from 'react';
const SvgCompany = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 0h12a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4V1a1 1 0 0 1 1-1Zm13 22V7h3v15h-3ZM17 2v20H7V2h10ZM5 7v15H2V7h3Zm10-1a1 1 0 0 0-1-1h-4l-.117.007A1 1 0 0 0 10 7h4l.117-.007A1 1 0 0 0 15 6Zm-1 4a1 1 0 0 1 .117 1.993L14 12h-4a1 1 0 0 1-.117-1.993L10 10h4Zm1 6a1 1 0 0 0-1-1h-4l-.117.007A1 1 0 0 0 10 17h4l.117-.007A1 1 0 0 0 15 16Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCompany;
