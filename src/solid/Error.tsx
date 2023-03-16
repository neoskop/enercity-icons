import * as React from 'react';
import { SVGProps } from 'react';
const SvgError = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.959 12.58c0 .532-.426.96-.96.96a.956.956 0 0 1-.961-.96V7.54c0-.534.427-.96.96-.96.535 0 .96.426.96.96v5.04Zm-.285 4.58c-.177.213-.426.284-.674.284a.998.998 0 0 1-.71-.284 1.043 1.043 0 0 1-.25-.675.972.972 0 0 1 .285-.674c.356-.355.993-.355 1.349 0 .179.178.28.42.285.674a.914.914 0 0 1-.285.675ZM12 0C5.376.007.007 5.375 0 12c.007 6.624 5.376 11.992 12 12 6.624-.008 11.993-5.376 12-12A11.989 11.989 0 0 0 12 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgError;
