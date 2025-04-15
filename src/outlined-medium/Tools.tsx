import * as React from 'react';
import { SVGProps } from 'react';
const SvgTools = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m22.28 23.002-2.88-1.873-.447-1.664-4.696-4.695.515-.514 4.695 4.695 1.663.447 1.874 2.878zM8.938 18.479a3.77 3.77 0 0 1-.93 3.8 3.77 3.77 0 0 1-2.357 1.095l1.929-1.928-.804-3.272-3.273-.804-1.933 1.933a3.777 3.777 0 0 1 4.898-3.298l.449.138 9.233-9.217-.141-.45a3.775 3.775 0 0 1 3.282-4.903l-1.928 1.93.803 3.271 3.272.805 1.934-1.933a3.77 3.77 0 0 1-4.899 3.294l-.45-.14-9.226 9.23zm-1.73-7.518-4.87-4.87a2.65 2.65 0 0 1-.78-1.884c0-.711.277-1.381.78-1.884a2.67 2.67 0 0 1 3.755.014l4.87 4.87c.094.368.336 1.026.923 1.775l-2.906 2.9c-.747-.585-1.403-.827-1.771-.92m14.903 7.087-1.836-.494-4.402-4.401 2.601-2.601a5.31 5.31 0 0 0 4.904-1.436 5.33 5.33 0 0 0 1.316-5.385l-.387-1.225-3.35 3.35-1.503-.369-.368-1.504L22.432.637 21.208.252a5.31 5.31 0 0 0-5.373 1.314 5.32 5.32 0 0 0-1.436 4.908l-1.4 1.397c-.465-.645-.542-1.118-.544-1.133l-.03-.274-5.23-5.229a4.226 4.226 0 0 0-5.97 0 4.226 4.226 0 0 0 .013 5.958l5.035 5.035.197.186.258.036c.025.004.497.08 1.14.542l-1.403 1.401a5.34 5.34 0 0 0-4.9 1.44A5.32 5.32 0 0 0 .25 21.216l.386 1.224 3.35-3.35 1.503.37.37 1.504-3.346 3.344 1.223.386A5.31 5.31 0 0 0 9.11 23.38a5.31 5.31 0 0 0 1.44-4.9l2.608-2.608 4.4 4.4.493 1.837 4.437 2.888L25 22.485z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTools;
