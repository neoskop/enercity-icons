import * as React from 'react';
import { SVGProps } from 'react';
const SvgCarreer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.882 11.887H22.5V7.545c0-.427-.502-.795-1.095-.795H2.595c-.592 0-1.095.368-1.095.795v4.342h7.935v-1.462c0-.413.33-.75.75-.75h2.947c.413 0 .75.337.75.75v1.462Zm-1.5 2.213v-2.925h-1.447V14.1h1.447Zm2.19-10.357-1.844.003-3.301.004v1.5h5.145V3.743Zm1.5 1.507h5.332C22.837 5.25 24 6.285 24 7.545v5.092c0 .42-.337.75-.75.75h-9.367v1.463c0 .42-.337.75-.75.75h-2.947c-.42 0-.75-.33-.75-.75v-1.463H.75a.747.747 0 0 1-.75-.75V7.545C0 6.285 1.163 5.25 2.595 5.25h5.34V3.743A1.49 1.49 0 0 1 9.427 2.25h5.152c.818 0 1.493.667 1.493 1.493V5.25ZM2.596 21.503h18.81c1.454 0 2.594-.852 2.594-1.94V15.64a.75.75 0 1 0-1.5 0v3.922c0 .11-.388.441-1.094.441H2.596c-.705 0-1.094-.33-1.094-.44V15.64a.75.75 0 1 0-1.5 0v3.922c0 1.089 1.139 1.941 2.594 1.941Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCarreer;
