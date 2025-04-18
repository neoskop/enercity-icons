import * as React from 'react';
import { SVGProps } from 'react';
const SvgCompany = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.577 12.338h7.245c.03-.264.053-.713.053-.9 0-2.769-1.56-5.063-4.778-5.063-2.82 0-4.972 2.153-4.972 5.063 0 2.932 2.152 5.062 4.995 5.062 2.13 0 3.466-.758 4.635-2.152l-1.762-1.373c-.54.9-1.755 1.47-2.873 1.47-1.238 0-2.347-.922-2.543-2.107M4.5 0h15c1.657 0 3 1.373 3 3.06v15.698c0 1.522-1.095 2.812-2.572 3.03l-15 2.182c-1.643.24-3.166-.922-3.398-2.595a3 3 0 0 1-.03-.435V3.06C1.5 1.373 2.842 0 4.5 0m5.153 10.59h4.875c-.098-1.418-.983-2.19-2.34-2.19-1.328 0-2.288.915-2.535 2.19"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompany;
