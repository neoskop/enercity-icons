import * as React from 'react';
import { SVGProps } from 'react';
const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 9.75c.412 0 .75.338.75.75s-.338.75-.75.75H8.31a5.028 5.028 0 0 0 0 1.5h2.94c.412 0 .75.338.75.75s-.338.75-.75.75H8.812c.18.338.383.668.653.953 1.08 1.177 2.648 1.59 4.088 1.08.337-.113.674-.3 1.004-.54a.744.744 0 0 1 1.043.157c.248.33.18.803-.157 1.05a5.228 5.228 0 0 1-3.143 1.058c-1.455 0-2.88-.623-3.945-1.793a5.98 5.98 0 0 1-1.2-1.965H6a.752.752 0 0 1-.75-.75c0-.412.338-.75.75-.75h.803a7.163 7.163 0 0 1 0-1.5H6a.752.752 0 0 1-.75-.75c0-.412.338-.75.75-.75h1.155a6.09 6.09 0 0 1 1.2-1.972c1.89-2.063 4.867-2.37 7.088-.735.337.24.405.712.165 1.05a.754.754 0 0 1-1.05.157c-1.59-1.17-3.736-.937-5.093.54-.27.293-.473.623-.652.96h2.437ZM12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCoin;
