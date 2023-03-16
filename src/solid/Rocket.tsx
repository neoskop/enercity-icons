import * as React from 'react';
import { SVGProps } from 'react';
const SvgRocket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.498 4.88a2.628 2.628 0 0 0-2.625 2.625 2.628 2.628 0 0 0 2.625 2.625 2.628 2.628 0 0 0 2.625-2.625 2.628 2.628 0 0 0-2.625-2.625ZM23.953.717c.037.345.757 8.258-4.8 14.078l.045.345a5.054 5.054 0 0 1-1.425 4.275l-2.115 2.122a.755.755 0 0 1-1.245-.292l-.953-2.865c-.937.367-2.505.84-3.772.525a.73.73 0 0 1-.345-.203L5.3 14.66a.73.73 0 0 1-.202-.345c-.315-1.268.157-2.835.525-3.773L2.758 9.59a.755.755 0 0 1-.488-.54.762.762 0 0 1 .195-.705L4.588 6.23a5.054 5.054 0 0 1 4.275-1.425l.345.045C15.028-.708 22.94.012 23.285.05a.75.75 0 0 1 .668.667ZM4.055 15.785a.744.744 0 0 1 .765.187l3.21 3.203a.754.754 0 0 1 .179.778c-.065.174-1.505 4.044-6.801 4.044-.225 0-.45-.007-.683-.022a.744.744 0 0 1-.704-.698c-.353-5.962 3.989-7.477 4.034-7.492Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRocket;
