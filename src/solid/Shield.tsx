import * as React from 'react';
import { SVGProps } from 'react';
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m21.24 3.038-9-3.008s-.06-.007-.09-.015C12.097.015 12.052 0 12 0a.784.784 0 0 0-.143.015c-.03.007-.067 0-.097.015l-9 3.008a.76.76 0 0 0-.51.712v10.492s0 .06.007.09c.03.293.9 7.283 9.548 9.638.06.023.127.03.188.03h.014a.56.56 0 0 0 .188-.03c8.648-2.355 9.517-9.345 9.547-9.637.008-.03.008-.06.008-.09V3.75a.76.76 0 0 0-.51-.712Zm-4.132 5.64-5.386 7.507a.736.736 0 0 1-.554.308c-.015 0-.038.007-.053.007a.744.744 0 0 1-.54-.233l-3.615-3.72a.763.763 0 0 1 .015-1.065.763.763 0 0 1 1.065.016l2.985 3.082 4.867-6.772a.746.746 0 1 1 1.215.87Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgShield;