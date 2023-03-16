import * as React from 'react';
import { SVGProps } from 'react';
const SvgSafeLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M45.767 50.025C49.728 46.88 52 42.154 52 37.055V8.685c-8.448-.21-11.4-2.187-13.798-3.793l-.002-.001C36.562 3.793 35.38 3 32.5 3c-2.88 0-4.065.793-5.705 1.892l-.004.003C24.393 6.499 21.44 8.475 13 8.683v28.373c0 5.097 2.271 9.823 6.231 12.968L32.5 60.583l13.267-10.558ZM39.872 2.4c2.31 1.548 4.93 3.302 13.627 3.302a1.5 1.5 0 0 1 1.5 1.5v29.854c0 6.019-2.685 11.602-7.366 15.317l-14.2 11.3A1.494 1.494 0 0 1 32.5 64c-.33 0-.66-.108-.934-.326l-14.2-11.301C12.686 48.658 10 43.075 10 37.057V7.202a1.5 1.5 0 0 1 1.5-1.5c8.693 0 11.314-1.755 13.625-3.302l.001-.001.002-.001C26.887 1.219 28.709 0 32.499 0c3.792 0 5.611 1.219 7.371 2.399l.002.001ZM38.46 35.247l2.679-2.678a.686.686 0 0 0 0-.972l-8.076-8.078h-.002l-.001-.002-.001-.002-1.714-1.713a.69.69 0 0 0-.973 0l-2.891 2.892a7.561 7.561 0 0 0-2.231 5.457 7.563 7.563 0 0 0 2.337 5.413c2.965 2.854 7.843 2.712 10.873-.317Zm-4.994-15.566.655.655 3.889-3.89a1.5 1.5 0 1 1 2.12 2.122l-3.887 3.89 4.242 4.242 3.888-3.89a1.5 1.5 0 1 1 2.12 2.122l-3.887 3.889.654.654a3.662 3.662 0 0 1 1.08 2.608c0 .985-.384 1.91-1.08 2.606l-2.68 2.68a11.046 11.046 0 0 1-7.812 3.24 10.48 10.48 0 0 1-6.264-2.052l-4.68 4.681a1.495 1.495 0 0 1-1.061.44 1.501 1.501 0 0 1-1.061-2.56l4.679-4.68a10.534 10.534 0 0 1-2.131-6.26 10.533 10.533 0 0 1 3.11-7.605l2.89-2.892a3.693 3.693 0 0 1 5.216 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSafeLoading;
