import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfothek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 24a11.866 11.866 0 0 1-6.352-1.823L1.695 23.25a.75.75 0 0 1-.945-.945l1.05-3.953A11.865 11.865 0 0 1 0 12a12 12 0 1 1 12 12Zm-6.225-3.383a.75.75 0 0 1 .42.128A10.38 10.38 0 0 0 12 22.5 10.5 10.5 0 1 0 1.5 12a10.38 10.38 0 0 0 1.755 5.805.75.75 0 0 1 .105.615l-.802 3 3-.803a.86.86 0 0 1 .217 0Z"
      fill="currentColor"
    />
    <path
      d="M12 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 7.5h-.375v-5.633a.367.367 0 0 0-.375-.367H10.5a.75.75 0 0 0 0 1.5h.375v4.5H10.5a.75.75 0 1 0 0 1.5h3a.75.75 0 1 0 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgInfothek;
