import * as React from 'react';
import { SVGProps } from 'react';
const SvgXing = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.455 16.5c.318 0 .59-.193.816-.58 2.069-3.68 3.145-5.596 3.229-5.748L8.44 6.567C8.222 6.19 7.946 6 7.61 6H4.609c-.193 0-.326.063-.402.189-.092.126-.088.282.013.466l2.022 3.517c.008.009.008.013 0 .013l-3.178 5.647a.442.442 0 0 0 0 .453.42.42 0 0 0 .389.215h3.003Zm14.075-15h-3.108c-.335 0-.61.19-.825.571L9.75 14.031l4.37 7.898c.207.38.49.571.852.571h3.081c.19 0 .327-.064.413-.19.086-.145.082-.301-.013-.47l-4.332-7.809v-.012L20.93 2.16c.095-.177.095-.334 0-.47-.077-.127-.21-.19-.4-.19Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgXing;
