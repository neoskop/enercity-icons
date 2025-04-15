import * as React from 'react';
import { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M32.884 10.289 61 30.829v-6.284L31.999 3.357 3 24.545v6.284l28.114-20.54a1.5 1.5 0 0 1 1.77 0M29.5 60.999h26V30.527l-23.501-17.17L8.5 30.527V61h5V40.5A1.5 1.5 0 0 1 15 39h13a1.5 1.5 0 0 1 1.5 1.5zM25 49h1.5v-7h-10v19h10v-9H25a1.5 1.5 0 0 1 0-3M50.5 6h-4v4.237l4 2.923zm3 9.352 9.885 7.22c.386.283.615.734.615 1.212v10c0 .565-.317 1.082-.82 1.338a1.5 1.5 0 0 1-1.565-.127L58.5 32.719v29.78A1.5 1.5 0 0 1 57 64H7a1.5 1.5 0 0 1-1.5-1.5V32.719l-3.115 2.276a1.5 1.5 0 0 1-1.565.127A1.5 1.5 0 0 1 0 33.783v-10c0-.478.229-.93.615-1.211L31.114.289a1.5 1.5 0 0 1 1.77 0L43.5 8.045V4.5A1.5 1.5 0 0 1 45 3h7a1.5 1.5 0 0 1 1.5 1.5zM46.496 49h-7v-7h7zm1.5 3h-10a1.5 1.5 0 0 1-1.5-1.5v-10a1.5 1.5 0 0 1 1.5-1.5h10a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHome;
