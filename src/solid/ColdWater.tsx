import * as React from 'react';
import { SVGProps } from 'react';
const SvgColdWater = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5.697a1.881 1.881 0 0 0-2.273-.514c-.253.12-.476.296-.652.514C8.947 2.666 3 10.873 3 15.014c0 2.383.948 4.669 2.636 6.354a9.007 9.007 0 0 0 12.728 0A8.979 8.979 0 0 0 21 15.014c0-4.14-5.948-12.348-7.5-14.317Zm2.16 15.5a.751.751 0 1 1-.75 1.303l-2.16-1.228v2.449a.748.748 0 0 1-1.28.53.748.748 0 0 1-.22-.53v-2.449L9.127 17.5a.753.753 0 0 1-.97-1.11.752.752 0 0 1 .22-.193l2.123-1.22-2.123-1.22a.752.752 0 1 1 .75-1.304l2.123 1.228v-2.448a.748.748 0 0 1 1.28-.53c.14.14.22.331.22.53v2.448l2.122-1.228a.753.753 0 0 1 1.102.848.752.752 0 0 1-.352.455l-2.122 1.22 2.16 1.221Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgColdWater;
