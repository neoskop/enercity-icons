import * as React from 'react';
import { SVGProps } from 'react';
const SvgDoublePerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M40 8c0-4.41-3.589-8-8-8s-8 3.59-8 8 3.589 8 8 8 8-3.59 8-8Zm-8 5a5 5 0 1 1 0-10 5 5 0 1 1 0 10ZM17 24v17.5c0 3.02 2.44 5.48 5.452 5.5l1.97 14.41A3.013 3.013 0 0 0 27.393 64h3.161v-3h-3.16l-2.322-17h-2.58a2.49 2.49 0 0 1-2.481-2.5V24c0-1.66 1.34-3 2.99-3h7.563v-3h-7.562c-3.301 0-5.982 2.69-5.982 6H17Zm31.91 22.11-5.622-23.67s-.02-.05-.02-.08c-.71-2.65-2.81-4.36-5.371-4.36h-4.362v3h4.362c1.16 0 2.09.74 2.47 2.14l5.612 23.64a1 1 0 0 1-.97 1.22h-6.983l-1.33 13h-3.16v3h3.16c1.54 0 2.821-1.16 2.981-2.7l1.05-10.3h4.282c1.22 0 2.35-.55 3.11-1.5a3.98 3.98 0 0 0 .78-3.39h.01Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgDoublePerson;
