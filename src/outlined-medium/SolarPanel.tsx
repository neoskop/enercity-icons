import * as React from 'react';
import { SVGProps } from 'react';
const SvgSolarPanel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 21v-5.245h7.318L20.875 21H12.75Zm-8.82-5.245h7.319V21H3.124l.807-5.245ZM5.893 3h5.357v5.245H5.086L5.893 3Zm13.02 5.245H12.75V3h5.356l.807 5.245Zm-7.663 6.01H4.162l.694-4.51h6.394v4.51Zm1.5-4.51h6.394l.693 4.51H12.75v-4.51Zm6.74-7.609a.75.75 0 0 0-.74-.636H5.25a.75.75 0 0 0-.741.636l-3 19.5a.747.747 0 0 0 .74.864h19.5a.749.749 0 0 0 .742-.864l-3-19.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSolarPanel;
