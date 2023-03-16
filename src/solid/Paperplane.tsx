import * as React from 'react';
import { SVGProps } from 'react';
const SvgPaperplane = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23.677 1.672a.752.752 0 0 0-.781-.109L.448 11.454a.75.75 0 0 0 .043 1.39l2.825 1.043c.189.07.399.06.58-.027l10.805-5.118-6.567 5.61a.754.754 0 0 0-.263.566l-.041 6.546a.75.75 0 0 0 1.236.576l4.98-4.227 5.047 1.784a.75.75 0 0 0 .98-.537L23.93 2.419a.75.75 0 0 0-.252-.747Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPaperplane;
