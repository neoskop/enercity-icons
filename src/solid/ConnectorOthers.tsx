import * as React from 'react';
import { SVGProps } from 'react';
const SvgConnectorOthers = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.75 7.5H18V2.25A2.257 2.257 0 0 0 15.75 0a2.257 2.257 0 0 0-2.25 2.25V7.5h-3V2.25A2.257 2.257 0 0 0 8.25 0 2.257 2.257 0 0 0 6 2.25V7.5h-.75A2.257 2.257 0 0 0 3 9.75v5.565c0 .54.195 1.057.54 1.47l3.03 3.532c.112.136.18.308.18.488V22.5c0 .825.675 1.5 1.5 1.5h7.5c.825 0 1.5-.675 1.5-1.5v-1.695c0-.18.067-.352.18-.488l3.03-3.532c.345-.413.54-.93.54-1.47V9.75a2.257 2.257 0 0 0-2.25-2.25M7.5 2.25c0-.413.338-.75.75-.75s.75.337.75.75V7.5H7.5zM15 16.5H9a.75.75 0 0 1-.75-.75c0-.412.338-.75.75-.75h6c.412 0 .75.338.75.75 0 .413-.338.75-.75.75m.75-3h-7.5a.75.75 0 0 1-.75-.75c0-.412.338-.75.75-.75h7.5c.413 0 .75.338.75.75s-.337.75-.75.75m.75-6H15V2.25c0-.413.338-.75.75-.75.413 0 .75.337.75.75z"
    />
  </svg>
);
export default SvgConnectorOthers;
