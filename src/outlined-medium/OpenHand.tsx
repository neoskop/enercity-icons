import * as React from 'react';
import { SVGProps } from 'react';
const SvgOpenHand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.195 12.406 11.94 17.404 1.5 14.156V9h5.212c2.968 0 3.53 1.76 3.55 1.825a.75.75 0 0 0 .724.556h5.068a.542.542 0 1 1 0 1.082H9.108a.75.75 0 1 0 0 1.5h6.946c.34 0 .657-.091.939-.238.012-.005.024-.004.036-.01l4.692-2.284a.543.543 0 0 1 .724.25.543.543 0 0 1-.25.725m1.599-1.383a2.043 2.043 0 0 0-2.73-.94l-3.006 1.463a2.04 2.04 0 0 0-1.996-1.663l-.008-.002h-4.578C11.022 9.028 9.778 7.5 6.712 7.5H.75a.75.75 0 0 0-.75.75v6.458c0 .329.214.62.527.716l11.25 3.5.011.002q.1.03.204.03l.009.002h.002a.7.7 0 0 0 .29-.068c.012-.004.025-.001.037-.007l10.523-5.13a2.045 2.045 0 0 0 .94-2.73"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOpenHand;
