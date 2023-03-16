import * as React from 'react';
import { SVGProps } from 'react';
const SvgChange = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.695 2.42 4.558 2.92c.31.207.498.56.497.932 0 .373-.186.704-.497.911l-4.558 2.92a1.115 1.115 0 0 1-1.098.042 1.074 1.074 0 0 1-.56-.953l.001-1.76H8.905a3.51 3.51 0 0 0-3.501 3.5v1.367a1.203 1.203 0 0 1-2.404 0V10.93a5.892 5.892 0 0 1 5.884-5.88h6.133V3.33c0-.394.207-.767.56-.953a1.133 1.133 0 0 1 1.118.041Zm1.922 9.282c0-.663.54-1.202 1.202-1.202.643 0 1.181.538 1.181 1.201v1.368c0 3.232-2.631 5.884-5.884 5.884H8.963v1.719c0 .394-.207.767-.56.953a1.12 1.12 0 0 1-.518.125.99.99 0 0 1-.58-.166l-4.558-2.922a1.06 1.06 0 0 1-.497-.911c0-.372.186-.704.497-.911l4.558-2.922a1.088 1.088 0 0 1 1.119-.041c.352.186.559.56.559.953v1.74h6.133a3.51 3.51 0 0 0 3.501-3.5v-1.368Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChange;
