import * as React from 'react';
import { SVGProps } from 'react';
const SvgEnergyFire = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.344 4.196C18.987 15.723 12 28.26 12 42.46c0 11.217 7.29 15.775 11.883 17.534-1.248-2.426-2.477-5.953-2.14-10.078.442-5.36 3.396-10.319 8.785-14.738a1.498 1.498 0 0 1 2.421 1.455c-1.098 5.48 1.772 8.415 4.546 11.252 1.582 1.62 3.077 3.147 3.798 5.071.981 2.612.632 5.12.004 7.021 4.161-1.81 10.886-6.45 10.698-17.492-.092-5.459-3.4-10.056-7.23-15.378-4.343-6.032-9.222-12.812-11.42-22.912ZM38.4 64a1.5 1.5 0 0 1-1.21-2.386c.05-.068 2.711-3.827 1.295-7.605-.5-1.332-1.78-2.639-3.134-4.025-2.392-2.446-5.249-5.368-5.61-9.999-3.024 3.182-4.704 6.582-5.005 10.144-.544 6.43 3.645 11.336 3.687 11.384.412.475.486 1.158.184 1.708a1.513 1.513 0 0 1-1.537.762C26.89 63.956 9 61.04 9 42.461 9 26.642 16.997 12.854 33.447.308a1.5 1.5 0 0 1 2.388.949c1.781 10.785 6.872 17.859 11.364 24.1 4.125 5.73 7.687 10.68 7.796 17.078.161 9.482-4.28 14.842-8.036 17.668-4.044 3.044-8.11 3.838-8.28 3.87A1.47 1.47 0 0 1 38.4 64Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEnergyFire;
