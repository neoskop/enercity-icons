import * as React from 'react';
import { SVGProps } from 'react';
const SvgNewCustomer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 18a7.349 7.349 0 0 0 .164 1.567c.053.264.12.51.204.758-4.434-.045-6.511-.773-6.969-.953-.562-.134-.953-.645-.893-1.215l.338-3.464c.247-2.558 2.1-4.612 4.598-5.37A5.23 5.23 0 0 1 4.499 5.25 5.256 5.256 0 0 1 9.749 0 5.255 5.255 0 0 1 15 5.25a5.229 5.229 0 0 1-1.941 4.072 6.747 6.747 0 0 1 2.37 1.261 6.216 6.216 0 0 0-.991.21 5.597 5.597 0 0 0-.914.33A7.498 7.498 0 0 0 8.999 18Zm8.895.72h.885a.72.72 0 0 0 0-1.44h-1.56v-1.56a.717.717 0 0 0-1.036-.645.712.712 0 0 0-.404.645v1.56h-1.56a.72.72 0 0 0 0 1.44h1.56v1.56a.72.72 0 0 0 1.44 0v-1.56h.675ZM16.5 12c.068 0 .142 0 .21.008A6 6 0 0 1 22.5 18c0 3.308-2.692 6-6 6a6.003 6.003 0 0 1-5.79-4.432 5.652 5.652 0 0 1-.158-.75A7.244 7.244 0 0 1 10.5 18a6.005 6.005 0 0 1 4.455-5.797 5.19 5.19 0 0 1 .84-.158c.232-.03.465-.045.705-.045Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgNewCustomer;
