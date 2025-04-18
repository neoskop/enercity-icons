import * as React from 'react';
import { SVGProps } from 'react';
const SvgWallboxSolar = (props: SVGProps<SVGSVGElement>) => (
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
      d="m59.99 1.33 4 36c.05.43-.09.85-.37 1.17-.29.32-.69.5-1.12.5H38v20c0 2.76-2.24 5-5 5H5c-2.76 0-5-2.24-5-5V31c0-2.76 2.24-5 5-5h22.37l2.64-24.66C30.09.58 30.73 0 31.5 0h27c.76 0 1.41.57 1.49 1.33m-.83 22.75c.12 0 .23.01.34.04L58.49 15h-7.05l.3 9.08zM51.34 12h6.81l-1-9h-6.11zm-9.66 0h6.66l-.3-9h-6.09zm-3 0 .27-9h-6.12l-.96 9zm-5.69 49c1.1 0 2-.9 2-2H35V31c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2zm-2.62-35h2.62l-.01-.01c2.76 0 5 2.24 5 5v5h11.14l-.29-8.92h-3.34c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h3.24l-.3-9.08h-6.84l-.31 10.57c-.03.82-.69 1.46-1.5 1.46h-.04c-.83-.02-1.48-.71-1.46-1.54L38.59 15h-7.04zm21.47 1.08.29 8.92h8.69l-1.01-9.07c-.2.09-.42.15-.65.15zM24.25 39.12s1.09 4.59 5.25 5.88c2.02.73 3.5 2.41 3.5 4.71 0 2.92-2.35 5.29-5.25 5.29-1.84 0-3.47-.96-4.4-2.41q-.328-.543-.602-1.013c-1.338-2.28-1.937-3.303-4.918-3.637-2.116-.232-3.032-.981-3.948-1.73-1.1-.9-2.2-1.8-5.382-1.8-3.5 0-3.5-2.35-3.5-2.35 0-2.35 1.17-3.53 3.5-3.53q.169 0 .363.005c1.225.023 3.194.06 5.057-1.685a6.4 6.4 0 0 1 4.5-1.85c2.77 0 4.93 1.64 5.83 4.12M15.5 41.5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3M26 49.75c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75S28.72 48 27.75 48 26 48.78 26 49.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWallboxSolar;
