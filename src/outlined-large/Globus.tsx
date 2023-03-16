import * as React from 'react';
import { SVGProps } from 'react';
const SvgGlobus = (props: SVGProps<SVGSVGElement>) => (
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
      d="m44.3 12.232 7.448 4.699C48.838 8.825 41.095 3 32 3c-.884 0-1.75.073-2.605.18l3.384 5.538c.144.235.22.506.22.782v4.23l10.253-1.71c.362-.06.737.015 1.048.212ZM39 33.644l4.427 7.95a21.113 21.113 0 0 0 7.716-9.007L46.945 29H39v4.644Zm-9 2.855v8.4c.659.061 1.325.1 2 .1a20.85 20.85 0 0 0 8.8-1.959l-4.612-8.277a1.5 1.5 0 0 1-.189-.73V27.5a1.5 1.5 0 0 1 1.5-1.5h10c.357 0 .703.128.975.36l3.753 3.207A20.92 20.92 0 0 0 53 24c0-.976-.09-1.93-.22-2.871l-9.597-6.055-11.436 1.906A1.502 1.502 0 0 1 30 15.5V9.922l-3.732-6.106a21.064 21.064 0 0 0-11.805 8.663l8.855 5.764c.425.277.682.75.682 1.257v11.297l5.46 4.55a1.5 1.5 0 0 1 .54 1.152ZM13.004 15.108A20.815 20.815 0 0 0 11 24c0 9.853 6.83 18.12 16 20.372v-7.17l-5.46-4.55A1.497 1.497 0 0 1 21 31.5V20.314l-7.996-5.206Zm18.995 32.891C18.768 48 8 37.233 8 24 8 12.683 15.88 3.175 26.439.659c.11-.04.223-.064.336-.078A23.865 23.865 0 0 1 32 0c13.232 0 24 10.767 24 24S45.231 48 32 48Zm-.033 2.834c7.677 0 14.774-2.696 19.473-7.394a1.5 1.5 0 1 1 2.12 2.121c-4.944 4.945-12.202 7.905-20.093 8.239v7.2H41.5a1.5 1.5 0 1 1 0 3h-19a1.5 1.5 0 1 1 0-3h7.966v-7.205C14.637 53.01 2 39.886 2 23.866 2 15.613 5.076 7.803 10.44 2.44a1.5 1.5 0 1 1 2.12 2.12C7.755 9.367 5 16.404 5 23.867c0 14.87 12.097 26.967 26.966 26.967Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGlobus;
