import * as React from 'react';
import { SVGProps } from 'react';
const SvgMoneyBag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.229 6a.75.75 0 0 1-.671-.415l-2.23-4.467a.75.75 0 0 1 .95-1.032c.02.009 2.064.815 3.823.815.737 0 1.463-.2 2.23-.413l.007-.002.009-.002c1.046-.291 2.126-.591 3.398-.446 2.21.251 2.787.986 2.931 1.29a.75.75 0 0 1-.039.718l-2.228 3.6a.75.75 0 0 1-.638.355H8.229Zm4.52 8.25a.752.752 0 0 0-.75-.75h-1.657a2.91 2.91 0 0 0 .076-.107c.04-.057.08-.115.127-.17.885-.983 2.22-1.133 3.255-.36a.746.746 0 0 0 1.05-.15.752.752 0 0 0-.15-1.05c-1.65-1.238-3.87-1.005-5.273.562A4.579 4.579 0 0 0 8.64 13.5H7.5a.752.752 0 0 0-.75.75c0 .412.337.75.75.75h.787a6.256 6.256 0 0 0 0 .75H7.5a.752.752 0 0 0-.75.75c0 .413.337.75.75.75h1.14c.195.457.45.9.787 1.275.795.885 1.845 1.35 2.933 1.35a3.95 3.95 0 0 0 1.305-.225c.36-.135.705-.323 1.035-.57a.752.752 0 0 0 .15-1.05.752.752 0 0 0-1.05-.15c-.21.158-.428.277-.645.353-.923.337-1.92.06-2.61-.706a2.456 2.456 0 0 1-.127-.17l-.076-.107H12c.412 0 .75-.337.75-.75a.752.752 0 0 0-.75-.75H9.78a3.136 3.136 0 0 1 0-.75H12c.412 0 .75-.338.75-.75Zm4.426-6.337c1.425 1.282 3.892 3.975 4.44 7.62.375 2.534-.03 4.447-1.23 5.842C18.862 23.145 16.117 24 12 24c-4.118 0-6.863-.856-8.385-2.625-1.2-1.395-1.605-3.308-1.23-5.842.547-3.645 3.015-6.338 4.44-7.62A1.637 1.637 0 0 1 7.912 7.5h8.175c.405 0 .795.151 1.088.413Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMoneyBag;
