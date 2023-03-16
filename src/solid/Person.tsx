import * as React from 'react';
import { SVGProps } from 'react';
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 12a4.875 4.875 0 1 0 0-9.75A4.875 4.875 0 0 0 12 12Zm0 1.875c-4.41 0-8.79.54-9.742 7.012A.754.754 0 0 0 3 21.75h18a.754.754 0 0 0 .742-.863c-.952-6.472-5.332-7.012-9.742-7.012Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPerson;
