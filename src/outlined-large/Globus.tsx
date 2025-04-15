import * as React from 'react';
import { SVGProps } from 'react';
const SvgGlobus = (props: SVGProps<SVGSVGElement>) => (
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
      d="m44.3 12.232 7.448 4.699C48.838 8.825 41.095 3 32 3c-.884 0-1.75.073-2.605.18l3.384 5.538c.144.235.22.506.22.782v4.23l10.253-1.71c.362-.06.737.015 1.048.212M39 33.644l4.427 7.95a21.1 21.1 0 0 0 7.716-9.007L46.945 29H39zm-9 2.855v8.4c.659.061 1.325.1 2 .1a20.85 20.85 0 0 0 8.8-1.959l-4.612-8.277a1.5 1.5 0 0 1-.189-.73V27.5a1.5 1.5 0 0 1 1.5-1.5h10c.357 0 .703.128.975.36l3.753 3.207A21 21 0 0 0 53 24c0-.976-.09-1.93-.22-2.871l-9.597-6.055-11.436 1.906A1.502 1.502 0 0 1 30 15.5V9.922l-3.732-6.106a21.06 21.06 0 0 0-11.805 8.663l8.855 5.764c.425.277.682.75.682 1.257v11.298l5.46 4.55c.342.285.54.706.54 1.151M13.004 15.108A20.8 20.8 0 0 0 11 24c0 9.853 6.83 18.12 16 20.372v-7.17l-5.46-4.55A1.5 1.5 0 0 1 21 31.5V20.314zM32 47.999C18.767 48 8 37.233 8 24 8 12.683 15.879 3.175 26.438.659q.166-.059.336-.078A24 24 0 0 1 32 0c13.232 0 24 10.767 24 24S45.231 48 32 48m-.034 2.834c7.677 0 14.774-2.696 19.473-7.394a1.5 1.5 0 1 1 2.12 2.121c-4.944 4.945-12.202 7.905-20.093 8.239V61H41.5a1.5 1.5 0 1 1 0 3h-19a1.5 1.5 0 1 1 0-3h7.966v-7.205C14.637 53.01 2 39.886 2 23.866 2 15.613 5.076 7.803 10.44 2.44a1.5 1.5 0 1 1 2.12 2.12C7.755 9.367 5 16.404 5 23.867c0 14.87 12.097 26.967 26.966 26.967"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGlobus;
