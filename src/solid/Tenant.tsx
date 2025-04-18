import * as React from 'react';
import { SVGProps } from 'react';
const SvgTenant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.878 18.58H8.31a.733.733 0 0 1-.713-.916l.54-2.212a3.03 3.03 0 0 1 2.529-2.258 2.666 2.666 0 1 1 2.857 0c1.215.173 2.227 1.05 2.52 2.258l.547 2.212a.733.733 0 0 1-.713.915m6.314-10.163-1.32-1.17V3.114a.754.754 0 0 0-.757-.75h-3.232a.755.755 0 0 0-.75.705L13.05.354a1.47 1.47 0 0 0-1.913 0L1.995 8.417c-.315.27-.495.675-.495 1.095v13.035c0 .802.652 1.454 1.455 1.454h18.278c.802 0 1.454-.652 1.454-1.454V9.512c0-.42-.18-.818-.495-1.095"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTenant;
