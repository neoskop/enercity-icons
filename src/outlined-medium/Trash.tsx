import * as React from 'react';
import { SVGProps } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M17.833 22.5c.506 0 .917-.428.917-.955V5.25H5.25v16.295c0 .527.411.955.917.955zM9.013 1.57C9.008 1.6 9 1.64 9 1.687V3.75h6V1.688c0-.115-.045-.189-.065-.204L9.002 1.5c.024 0 .02.026.011.07M16.5 3.75h5.25a.75.75 0 1 1 0 1.5h-1.5v16.295C20.25 22.9 19.166 24 17.833 24H6.167c-1.333 0-2.417-1.101-2.417-2.455V5.25h-1.5a.75.75 0 1 1 0-1.5H7.5V1.688C7.5.758 8.173 0 9 0h6c.828 0 1.5.758 1.5 1.688zm-5.25 5.625a.75.75 0 1 1 1.5 0v9a.75.75 0 1 1-1.5 0zm3.75 0v9a.75.75 0 1 0 1.5 0v-9a.75.75 0 1 0-1.5 0m-7.5 0a.75.75 0 1 1 1.5 0v9a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrash;
