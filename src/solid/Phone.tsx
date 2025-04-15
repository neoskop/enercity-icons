import * as React from 'react';
import { SVGProps } from 'react';
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.186 22.225c-2.87 2.869-9.143 2.768-16.17-4.248C-1 10.951-1.101 4.677 1.768 1.807 4.367-.78 5.825.075 6.212.398c.579.493 1.91 2.206 2.886 4.137 1.118 2.21.227 2.9-1.247 4.046l-.403.318c-.466.372-.541.668-.552.86-.057 1.013 1.512 2.73 3.06 4.279s3.267 3.118 4.28 3.06c.19-.011.488-.085.86-.551l.317-.403c1.146-1.475 1.835-2.366 4.047-1.247 1.93.975 3.643 2.307 4.136 2.885.324.388 1.178 1.846-1.41 4.444"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPhone;
