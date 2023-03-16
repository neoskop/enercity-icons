import * as React from 'react';
import { SVGProps } from 'react';
const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.779 44.373C10.431 54.19 20.434 61 31.999 61c11.567 0 21.57-6.81 26.223-16.627H5.779ZM60.999 32C61 16.009 47.99 3 32 3 16.01 3 3 16.009 3 32c0 3.28.556 6.43 1.563 9.373h54.874A28.861 28.861 0 0 0 61 32ZM0 32C0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32Zm35.196.2c0-1.207-1.561-5.96-3.14-10.315-1.576 4.357-3.137 9.108-3.137 10.315a3.141 3.141 0 0 0 3.138 3.138 3.142 3.142 0 0 0 3.139-3.138Zm3 0a6.145 6.145 0 0 1-6.14 6.138A6.144 6.144 0 0 1 25.92 32.2c0-2.703 3.947-13.091 4.739-15.146l1.399-3.635 1.399 3.635c.792 2.055 4.74 12.442 4.74 15.146ZM30.5 11h3V6h-3v5Zm-7.064-3.596 1.914 4.62-2.771 1.148-1.915-4.619 2.772-1.149ZM18.21 16.09l-3.535-3.536-2.121 2.121 3.535 3.536 2.121-2.12Zm-9.657 4.574 4.619 1.914-1.148 2.771-4.62-1.913 1.149-2.772ZM6 33.5h5v-3H6v3ZM40.565 7.405l2.77 1.148-1.913 4.62-2.772-1.149 1.915-4.619Zm10.88 7.27-2.12-2.12-3.536 3.536 2.121 2.12 3.535-3.535Zm5.15 8.76-4.62 1.915-1.148-2.771 4.62-1.914 1.147 2.77ZM53 33.5h5v-3h-5v3ZM33.5 53.908h-3v-5h3v5Zm-11.993 0h3v-5h-3v5Zm20.986 0h-3v-5h3v5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGasMeter;
