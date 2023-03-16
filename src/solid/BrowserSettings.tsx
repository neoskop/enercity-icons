import * as React from 'react';
import { SVGProps } from 'react';
const SvgBrowserSettings = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.75 4.5c0 .412.338.75.75.75s.75-.338.75-.75a.752.752 0 0 0-.75-.75.752.752 0 0 0-.75.75Zm-2.25 0c0 .412.338.75.75.75S6 4.912 6 4.5a.752.752 0 0 0-.75-.75.752.752 0 0 0-.75.75Zm-2.25 0c0 .412.337.75.75.75s.75-.338.75-.75A.752.752 0 0 0 3 3.75a.752.752 0 0 0-.75.75Zm.757-3h17.985C22.65 1.5 24 2.835 24 4.47v12.81c0 1.635-1.35 2.97-3.008 2.97a.752.752 0 0 1-.75-.75c0-.413.338-.75.75-.75.833 0 1.508-.66 1.508-1.47V7.5h-21v9.405c0 .832.697 1.845 1.507 1.845.413 0 .75.337.75.75s-.337.75-.75.75C1.282 20.25 0 18.488 0 16.905V4.47C0 2.835 1.35 1.5 3.007 1.5Zm6.87 14.25c0 1.17.953 2.123 2.123 2.123 1.17 0 2.123-.953 2.123-2.123 0-1.17-.953-2.122-2.123-2.122-1.17 0-2.122.952-2.122 2.122Zm7.23.675.863.495c.225.135.39.353.465.608a.995.995 0 0 1-.105.757l-.967 1.68c-.278.48-.886.638-1.365.368l-.855-.495c-.36.277-.75.502-1.178.675v.99a.995.995 0 0 1-.99.997h-1.95a.995.995 0 0 1-.99-.997v-.99a4.949 4.949 0 0 1-1.177-.675l-.855.495a1.005 1.005 0 0 1-1.365-.368l-.968-1.68a.995.995 0 0 1-.105-.757c.075-.255.24-.473.465-.608l.863-.495a5.114 5.114 0 0 1-.053-.675c0-.225.023-.45.053-.675l-.863-.495a1.052 1.052 0 0 1-.465-.607.995.995 0 0 1 .105-.758l.968-1.68c.277-.48.892-.637 1.365-.367l.855.495c.36-.278.75-.503 1.177-.675v-.99c0-.548.442-.998.99-.998h1.95c.548 0 .99.45.99.998v.99c.428.172.818.397 1.178.675l.854-.495a1.003 1.003 0 0 1 1.366.367l.967 1.68a.995.995 0 0 1 .105.758 1.05 1.05 0 0 1-.465.607l-.862.495c.03.225.052.45.052.675 0 .225-.023.45-.052.675Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBrowserSettings;
