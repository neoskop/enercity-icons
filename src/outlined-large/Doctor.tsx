import * as React from 'react';
import { SVGProps } from 'react';
const SvgDoctor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M48 38.5c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5a6.508 6.508 0 0 0-6.5 6.5Zm-31.512.5-1.918.018.085 1.466c.09 1.537.832 2.516 1.305 2.516h1.08c.473 0 1.215-.98 1.305-2.517l.085-1.467L16.488 39ZM6.377 24H3.1c.777 5.949 6.06 12 13.392 12 7.341 0 12.63-6.051 13.408-12h-3.2c-1.003 3.669-4.022 8.999-10.198 9H16.5c-6.17-.002-9.146-5.328-10.123-9Zm47.059-4.732c1.873 1.982 2.706 5.151 2.609 9.869C60.549 29.879 64 33.789 64 38.5c0 5.238-4.262 9.5-9.5 9.5S45 43.738 45 38.5c0-4.743 3.498-8.674 8.048-9.377.087-3.86-.498-6.425-1.793-7.794C50.41 20.435 49.182 20 47.5 20c-4.07 0-6.5 3.413-6.5 9.129V45.5C41 54.034 37.559 64 27.861 64c-8.47 0-12.477-8.902-12.832-18.144-1.829-.53-3.217-2.583-3.368-5.198l-.143-2.468C4.541 35.865 0 28.888 0 22.5A1.5 1.5 0 0 1 1.5 21H3V7.498C3 4.219 5.646 1.55 8.914 1.504A2.987 2.987 0 0 1 11.5 0a3 3 0 1 1 0 6 2.99 2.99 0 0 1-2.58-1.492A2.997 2.997 0 0 0 6 7.498V21h1.587a1.5 1.5 0 0 1 1.481 1.264c.051.312 1.341 7.734 7.432 7.736h.002c6.111 0 7.465-7.436 7.519-7.752A1.505 1.505 0 0 1 25.5 21H27V7.504A3.008 3.008 0 0 0 23.996 4.5h-.412A2.988 2.988 0 0 1 21 6a3 3 0 1 1 0-6c1.107 0 2.064.607 2.584 1.5h.412A6.01 6.01 0 0 1 30 7.504V21h1.5a1.5 1.5 0 0 1 1.5 1.5c0 7.661-5.403 13.476-11.513 15.604l-.148 2.553c-.15 2.585-1.509 4.615-3.305 5.175.343 9.125 4.2 15.168 9.827 15.168C34.115 61 38 55.061 38 45.5V29.129C38 20.187 42.907 17 47.5 17c2.516 0 4.513.763 5.936 2.268ZM52 38.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgDoctor;
