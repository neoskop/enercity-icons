import * as React from 'react';
import { SVGProps } from 'react';
const SvgSpeechbubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.5 13.31c0 .4-.326.726-.725.726h-3.197a.75.75 0 0 0-.73.579l-.746 3.182-3.162-3.513a.75.75 0 0 0-.557-.248H6.57a.727.727 0 0 1-.726-.725V3.726c0-.4.326-.726.726-.726h15.205c.4 0 .725.326.725.726v9.585Zm-11.337 5.06a.172.172 0 0 1-.172.172h-4.05a.749.749 0 0 0-.557.247l-1.615 1.79-.32-1.45a.751.751 0 0 0-.733-.587H1.678a.172.172 0 0 1-.17-.172L1.5 12.48c0-.095.077-.172.172-.172h2.672v1.003c0 1.227.998 2.225 2.226 2.225h4.593v2.833ZM21.775 1.5H6.57a2.228 2.228 0 0 0-2.226 2.227v7.082H1.672c-.922 0-1.672.75-1.672 1.674l.007 5.889c.002.92.752 1.67 1.671 1.67h1.435l.504 2.281a.752.752 0 0 0 .733.589.75.75 0 0 0 .557-.248l2.367-2.622h3.717c.922 0 1.672-.75 1.672-1.672v-2.833h.386l3.897 4.33a.749.749 0 0 0 1.288-.33l.938-4h2.603A2.228 2.228 0 0 0 24 13.311V3.726A2.228 2.228 0 0 0 21.775 1.5ZM8.317 7.41h6.9a.75.75 0 1 0 0-1.5h-6.9a.75.75 0 1 0 0 1.5Zm0 2.001h11.71a.75.75 0 1 1 0 1.5H8.317a.75.75 0 1 1 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSpeechbubble;
