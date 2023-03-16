import * as React from 'react';
import { SVGProps } from 'react';
const SvgChecklist = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M53.353 60.99H11V8h9.677v6.5a1.5 1.5 0 0 0 1.5 1.5h20a1.5 1.5 0 0 0 1.5-1.5V8h9.676v52.99ZM27.177 8a1.5 1.5 0 0 0 1.5-1.5c0-1.93 1.57-3.5 3.5-3.5 1.929 0 3.5 1.57 3.5 3.5a1.5 1.5 0 0 0 1.5 1.5h3.5v5H23.83V8h3.347Zm27.676-3H38.502c-.679-2.864-3.257-5-6.325-5a6.51 6.51 0 0 0-6.325 5H9.5A1.5 1.5 0 0 0 8 6.5v55.99a1.5 1.5 0 0 0 1.5 1.5h45.353a1.5 1.5 0 0 0 1.5-1.5V6.5a1.5 1.5 0 0 0-1.5-1.5ZM32.138 30.81a1.5 1.5 0 0 0 1.5 1.5h13.18a1.5 1.5 0 0 0 0-3h-13.18a1.5 1.5 0 0 0-1.5 1.5Zm1.586 14.82h13.18a1.5 1.5 0 1 1 0 3h-13.18a1.5 1.5 0 1 1 0-3Zm-6.568-3.335a1.5 1.5 0 0 0-2.12 0l-2.715 2.714-2.714-2.714a1.5 1.5 0 1 0-2.12 2.12L20.2 47.13l-2.714 2.714a1.5 1.5 0 1 0 2.121 2.12l2.714-2.713 2.714 2.714c.293.293.677.439 1.06.439a1.5 1.5 0 0 0 1.061-2.56l-2.714-2.714 2.714-2.714a1.5 1.5 0 0 0 0-2.121ZM20.95 31.598l4.746-4.746a1.5 1.5 0 1 1 2.12 2.12L22.01 34.78a1.493 1.493 0 0 1-1.06.44c-.384 0-.768-.147-1.061-.44l-3.484-3.485a1.5 1.5 0 1 1 2.12-2.12l2.425 2.424Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChecklist;
