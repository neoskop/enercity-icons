import * as React from 'react';
import { SVGProps } from 'react';
const SvgFemale = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.5 7.5C19.5 3.368 16.133 0 12 0 7.868 0 4.5 3.368 4.5 7.5c0 3.338 2.19 6.18 5.22 7.148V16.5h-1.5c-.825 0-1.5.675-1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5v1.5c0 .825.675 1.5 1.5 1.5h1.5c.825 0 1.5-.675 1.5-1.5V21h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.47c0-.825-.675-1.5-1.5-1.5h-1.5v-1.868c3.053-.945 5.28-3.802 5.28-7.162m-6.78 5.955v4.575h3v1.47h-3v3h-1.5v-3h-3V18h3v-4.552a6 6 0 0 1-1.5-.398A6.01 6.01 0 0 1 6 7.5c0-3.307 2.693-6 6-6s6 2.693 6 6a6.01 6.01 0 0 1-3.78 5.573 6 6 0 0 1-1.5.382"
    />
    <path
      fill="currentColor"
      d="M16.47 7.5c0-2.482-2.017-4.5-4.5-4.5a4.504 4.504 0 0 0-1.755 8.648 4.55 4.55 0 0 0 3.51 0A4.51 4.51 0 0 0 16.47 7.5m-4.5 3a3 3 0 1 1 0-6 3 3 0 1 1 0 6"
    />
  </svg>
);
export default SvgFemale;
