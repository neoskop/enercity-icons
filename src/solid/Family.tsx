import * as React from 'react';
import { SVGProps } from 'react';
const SvgFamily = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.212 17.145-2.047-1.117h4.087l-2.04 1.117ZM12 8.25a.806.806 0 1 1 .008 1.612A.806.806 0 0 1 12 8.25Zm4.117 10.582c1.005 0 1.83.825 1.83 1.837 0 1.005-.825 1.83-1.83 1.83a1.84 1.84 0 0 1-1.837-1.83 1.84 1.84 0 0 1 1.837-1.837ZM6.307 22.5a1.833 1.833 0 0 1 0-3.668 1.833 1.833 0 0 1 0 3.668Zm17.49-16.365-.683-.713a.74.74 0 0 0-.921-.127c-1.553.915-1.973 2.198-2.078 3.008h-6.023a2.185 2.185 0 0 0-.817-1.058 2.018 2.018 0 0 0-.488-.263V2.265A2.26 2.26 0 0 0 10.53 0H9.285C4.17 0 0 4.162 0 9.278v3.051a3.707 3.707 0 0 0 3.705 3.699H6.03L9.645 18l-.863.465a3.286 3.286 0 0 0-2.475-1.132c-1.837 0-3.33 1.5-3.33 3.336A3.337 3.337 0 0 0 6.307 24c1.838 0 3.33-1.5 3.33-3.33 0-.316-.052-.607-.135-.892l1.71-.93 1.703.93a3.461 3.461 0 0 0-.135.891c0 1.831 1.5 3.331 3.337 3.331 1.838 0 3.33-1.5 3.33-3.33a3.338 3.338 0 0 0-3.33-3.337 3.3 3.3 0 0 0-2.482 1.132L12.78 18l3.607-1.972h1.508A3.707 3.707 0 0 0 21.6 12.33V8.984a.455.455 0 0 0-.004-.053.455.455 0 0 1-.004-.052c-.007-.015-.142-1.08.885-1.958l.232.248c.285.3.765.307 1.066.022a.747.747 0 0 0 .022-1.057ZM6.307 19.929a.737.737 0 1 0-.002 1.474.737.737 0 0 0 .002-1.474Zm10.545.738a.737.737 0 1 1-1.475 0 .737.737 0 0 1 1.475 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFamily;
