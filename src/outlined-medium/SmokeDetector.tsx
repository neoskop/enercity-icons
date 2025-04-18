import * as React from 'react';
import { SVGProps } from 'react';
const SvgSmokeDetector = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.5 7.5h-8.389A2.245 2.245 0 0 0 12 6c-.976 0-1.8.628-2.111 1.5H1.5V3.75h21zM18.003 12h-1.834l.593-3h2.425zM11.25 8.25a.75.75 0 1 1 1.502.002.75.75 0 0 1-1.502-.002m2.861.75h1.121l-.592 3h-1.89v-1.638A2.24 2.24 0 0 0 14.111 9M9.89 9a2.24 2.24 0 0 0 1.361 1.361V12H9.36l-.592-3zM4.813 9h2.425l.593 3H5.997zM23.25 2.25H.75A.75.75 0 0 0 0 3v5.25c0 .414.335.75.75.75h2.451l1.589 4.025a.75.75 0 0 0 .696.475h13.028a.75.75 0 0 0 .697-.475L20.799 9h2.451a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75M12 18.75c1.36 0 2.631-.63 3.578-1.771a.751.751 0 0 0-1.156-.957c-.657.792-1.516 1.228-2.422 1.228s-1.765-.436-2.422-1.229a.75.75 0 0 0-1.156.957c.947 1.143 2.217 1.772 3.578 1.772m0 1.5c2.039 0 3.965-.969 5.422-2.728a.75.75 0 0 1 1.156.956C16.83 20.588 14.494 21.75 12 21.75s-4.83-1.162-6.578-3.272a.749.749 0 1 1 1.156-.956C8.035 19.282 9.96 20.25 12 20.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmokeDetector;
