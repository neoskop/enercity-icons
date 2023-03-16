import * as React from 'react';
import { SVGProps } from 'react';
const SvgCompany = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.5 0c1.657 0 3 1.37 3 3.058v15.699c0 1.522-1.098 2.812-2.576 3.027l-15 2.185c-1.64.239-3.16-.923-3.394-2.595a3.116 3.116 0 0 1-.03-.433V3.058C1.5 1.37 2.843 0 4.5 0h15Zm0 1.5h-15c-.79 0-1.439.626-1.496 1.42L3 3.033v17.932c0 .073.005.145.015.217.112.8.81 1.368 1.586 1.313l.111-.012 15-2.19a1.52 1.52 0 0 0 1.284-1.399l.004-.12V3.035c0-.809-.612-1.471-1.388-1.53L19.5 1.5Zm-4.973 9.094C14.429 9.17 13.543 8.4 12.189 8.4c-1.33 0-2.29.916-2.537 2.194h4.875ZM12.123 16.5c-2.845 0-4.998-2.13-4.998-5.063 0-2.909 2.153-5.062 4.974-5.062 3.217 0 4.776 2.295 4.776 5.063 0 .189-.025.638-.05.898h-7.25c.198 1.184 1.311 2.106 2.548 2.106 1.114 0 2.327-.568 2.872-1.467l1.756 1.373c-1.163 1.395-2.499 2.152-4.628 2.152Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCompany;
