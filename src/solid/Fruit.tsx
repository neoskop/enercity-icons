import * as React from 'react';
import { SVGProps } from 'react';
const SvgFruit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.02 17.05a.73.73 0 0 1-.517.21.73.73 0 0 1-.54-.232.754.754 0 0 1 .014-1.057c.203-.196 1.118-1.252-.06-2.746a.744.744 0 0 1 .12-1.05.743.743 0 0 1 1.05.12c1.672 2.115.69 4.035-.067 4.755m-2.985-.015a.76.76 0 0 1-.54.225.72.72 0 0 1-.51-.21c-.758-.72-1.74-2.64-.068-4.755a.744.744 0 0 1 1.05-.12.744.744 0 0 1 .12 1.05c-1.177 1.5-.254 2.55-.06 2.746a.763.763 0 0 1 .008 1.064M21.137 6.46c-1.762-1.417-4.44-1.567-7.943-.472.151-.623.361-1.41.533-1.897.323-.878 1.148-2.16 1.155-2.176A.745.745 0 0 0 14.658.88a.746.746 0 0 0-1.035.225 20 20 0 0 0-.945 1.658C10.824.07 7.998-.2 6.595.093a.75.75 0 0 0-.51.39.75.75 0 0 0-.022.646c1.41 3.239 3.981 4.109 5.759 4.139-.09.382-.18.736-.232.983-3.893-1.372-6.833-1.312-8.722.21C1.098 7.878.408 10.495.91 13.817c.488 3.18 2.213 7.537 5.49 9.375 1.702.96 3.637 1.072 5.603.33.854.323 1.71.48 2.534.48 1.072 0 2.108-.27 3.067-.81 3.278-1.838 5.003-6.195 5.491-9.375.503-3.322-.187-5.94-1.958-7.358"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFruit;
