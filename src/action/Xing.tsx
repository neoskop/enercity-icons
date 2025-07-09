import * as React from 'react';
import { SVGProps } from 'react';
const SvgXing = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.455 16.5q.477 0 .816-.58 3.103-5.52 3.229-5.748L8.44 6.567Q8.113 6 7.61 6H4.609q-.289 0-.402.189-.138.19.013.466l2.022 3.517q.012.013 0 .013l-3.178 5.647a.44.44 0 0 0 0 .453.42.42 0 0 0 .389.215zm14.075-15h-3.108q-.503 0-.825.571L9.75 14.031l4.37 7.898q.31.57.852.571h3.081q.285 0 .413-.19.13-.217-.013-.47l-4.332-7.809v-.012L20.93 2.16q.142-.266 0-.47-.115-.19-.4-.19"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgXing;
