import * as React from 'react';
import { SVGProps } from 'react';
const SvgHouseConnection = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 21.76a.75.75 0 0 1-.75.747h-9.135A2.257 2.257 0 0 1 12 23.999c-.975 0-1.8-.627-2.115-1.492H.75A.75.75 0 0 1 0 21.76a.75.75 0 0 1 .75-.746h9.135a2.272 2.272 0 0 1 1.365-1.36v-1.627H4.5a.75.75 0 0 1-.75-.746V9.817h-1.5a.748.748 0 0 1-.488-1.314L11.475.18a.75.75 0 0 1 .975 0l9.787 8.323c.315.269.353.74.083 1.053a.76.76 0 0 1-.57.26h-1.5v7.465a.75.75 0 0 1-.75.746h-6.75v1.628a2.272 2.272 0 0 1 1.365 1.359h9.135a.75.75 0 0 1 .75.746Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHouseConnection;
