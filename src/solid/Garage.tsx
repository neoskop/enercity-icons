import * as React from 'react';
import { SVGProps } from 'react';
const SvgGarage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.742 18.744H8.25a.752.752 0 0 0-.75.75c0 .413.338.75.75.75h7.492c.413 0 .75-.337.75-.75a.752.752 0 0 0-.75-.75Zm0-3H8.25a.752.752 0 0 0-.75.75c0 .413.338.75.75.75h7.492c.413 0 .75-.337.75-.75a.752.752 0 0 0-.75-.75Zm0-3H8.25a.752.752 0 0 0-.75.75c0 .413.338.75.75.75h7.492c.413 0 .75-.337.75-.75a.752.752 0 0 0-.75-.75Z"
      fill="currentColor"
    />
    <path
      d="M23.235 22.494H22.5l-.015-13.852.352.232a.75.75 0 0 0 .413.12.74.74 0 0 0 .622-.33.751.751 0 0 0-.21-1.042L12.42.129a.734.734 0 0 0-.832 0L.345 7.622a.75.75 0 0 0-.202 1.042.747.747 0 0 0 1.034.21l.338-.225.015 13.845H.75a.746.746 0 1 0 0 1.493h1.47s.037.015.06.015l9.165-.015h11.79c.42 0 .75-.33.75-.75s-.33-.743-.75-.743Zm-5.242-.015-6.54.015H6V11.357c0-.465.3-.863.668-.863h10.65c.367 0 .674.398.674.863v11.122Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGarage;