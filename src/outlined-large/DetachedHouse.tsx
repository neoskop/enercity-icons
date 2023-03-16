import * as React from 'react';
import { SVGProps } from 'react';
const SvgDetachedHouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38 46.5V61h16V41H42.5c-.223 0-.443-.05-.645-.146L32 36.161l-9.855 4.693A1.502 1.502 0 0 1 21.5 41H10v20h16V46.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5ZM35 61h-6V48h6v13ZM16.5 27h-3.426L7.869 38h13.292l10.194-4.854a1.502 1.502 0 0 1 1.29 0L42.839 38h13.292l-5.205-11H16.5Zm4.5-3h-3v-4h3v4Zm36 37h1.5a1.5 1.5 0 0 1 0 3h-53a1.5 1.5 0 0 1 0-3H7V41H5.5c-.514 0-.992-.264-1.268-.697a1.502 1.502 0 0 1-.087-1.445l6.625-14A1.498 1.498 0 0 1 12.125 24H15v-5.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5V24h27.875c.58 0 1.107.334 1.355.858l6.625 14c.221.465.187 1.01-.087 1.445A1.505 1.505 0 0 1 58.5 41H57v20ZM16 48v5h4v-5h-4Zm5.5-3h-7a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5ZM44 53h4v-5h-4v5Zm5.5-8h-7a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgDetachedHouse;
