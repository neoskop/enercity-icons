import * as React from 'react';
import { SVGProps } from 'react';
const SvgMultiLightning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.001 17.024v-2.025h-1.845c-1.058 0-2.017-.51-2.498-1.447a2.74 2.74 0 0 1 .203-2.873l1.14-1.68v-7.41c0-.712-.428-1.305-1.095-1.515a1.544 1.544 0 0 0-1.755.608L.278 12.697c-.323.465-.367 1.02-.12 1.485.264.502.818.817 1.463.817h5.88v7.41c0 .713.427 1.305 1.095 1.515a1.545 1.545 0 0 0 1.755-.607zm7.747-8.025c.473 0 .9.262 1.117.675.21.412.173.892-.09 1.26l-5.16 7.29c-.247.338-.6.525-.973.525q-.17.002-.339-.053c-.487-.157-.802-.614-.802-1.17V13.5h-3.248c-.472 0-.899-.263-1.116-.683a1.21 1.21 0 0 1 .09-1.26L13.989 9l3.248-4.719c.321-.45.884-.637 1.41-.471.509.164.854.629.854 1.161V9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMultiLightning;
