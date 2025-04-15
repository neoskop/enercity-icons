import * as React from 'react';
import { SVGProps } from 'react';
const SvgTraining = (props: SVGProps<SVGSVGElement>) => (
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
      d="M32 37.839 4.993 24.999 32 12.162 59.007 25zm16 1.613C47.516 40.652 41.685 45 32 45s-15.516-4.348-16-5.548v-5.898l15.356 7.3a1.51 1.51 0 0 0 1.288 0L48 33.555zM32 52c-9.57 0-16-3.318-16-6.417v-2.018C19.318 45.928 25.113 48 32 48s12.682-2.072 16-4.435v2.018C48 48.682 41.57 52 32 52m24.199-6 .625-5h1.352l.625 5zm6.945-22.354-30.5-14.5a1.5 1.5 0 0 0-1.288 0l-30.5 14.5a1.498 1.498 0 0 0 0 2.709L13 32.128v13.455C13 51.04 20.99 55 32 55s19-3.96 19-9.417V32.128l5-2.378V38h-.5a1.5 1.5 0 0 0-1.488 1.314l-1 8A1.5 1.5 0 0 0 54.5 49h6a1.498 1.498 0 0 0 1.488-1.686l-1-8A1.5 1.5 0 0 0 59.5 38H59v-9.676l4.144-1.97a1.5 1.5 0 0 0 0-2.708"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTraining;
