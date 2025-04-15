import * as React from 'react';
import { SVGProps } from 'react';
const SvgError = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.959 12.58c0 .532-.426.96-.96.96a.956.956 0 0 1-.961-.96V7.54c0-.534.427-.96.96-.96.535 0 .96.426.96.96zm-.285 4.58c-.177.213-.426.284-.674.284a1 1 0 0 1-.71-.284 1.04 1.04 0 0 1-.25-.675.97.97 0 0 1 .285-.674c.356-.355.993-.355 1.349 0 .179.178.28.42.285.674a.9.9 0 0 1-.285.675M12 0C5.376.007.007 5.375 0 12c.007 6.624 5.376 11.993 12 12 6.624-.008 11.993-5.376 12-12A11.99 11.99 0 0 0 12 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgError;
