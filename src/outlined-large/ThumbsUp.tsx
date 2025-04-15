import * as React from 'react';
import { SVGProps } from 'react';
const SvgThumbsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M58.5 31h-18a1.5 1.5 0 0 0 0 3h15c1.379 0 2.5 1.121 2.5 2.5S56.879 39 55.5 39h-15a1.5 1.5 0 0 0 0 3h12c1.379 0 2.5 1.121 2.5 2.5S53.879 47 52.5 47h-12a1.5 1.5 0 0 0 0 3h9c1.379 0 2.5 1.121 2.5 2.5S50.879 55 49.5 55H17V28.942C28.771 28.116 33 17.58 33 8.5c0-1.3.632-3.5 3-3.5 2.062 0 3 1.814 3 3.5v16a1.5 1.5 0 0 0 1.5 1.5h18c1.379 0 2.5 1.121 2.5 2.5S59.879 31 58.5 31M14 56.5c0 .827-.673 1.5-1.5 1.5h-8c-.827 0-1.5-.673-1.5-1.5v-29c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5zm50-28c0-3.032-2.468-5.5-5.5-5.5H42V8.5C42 5.349 39.897 2 36 2c-3.939 0-6 3.27-6 6.5 0 8.129-3.536 16.771-13.297 17.436C16.064 24.227 14.429 23 12.5 23h-8A4.505 4.505 0 0 0 0 27.5v29C0 58.981 2.019 61 4.5 61h8c1.953 0 3.603-1.258 4.224-3H49.5c3.032 0 5.5-2.468 5.5-5.5a5.45 5.45 0 0 0-.766-2.785A5.51 5.51 0 0 0 58 44.5a5.45 5.45 0 0 0-.766-2.785A5.51 5.51 0 0 0 61 36.5a5.45 5.45 0 0 0-.766-2.785A5.51 5.51 0 0 0 64 28.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThumbsUp;
