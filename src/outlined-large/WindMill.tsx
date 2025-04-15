import * as React from 'react';
import { SVGProps } from 'react';
const SvgWindMill = (props: SVGProps<SVGSVGElement>) => (
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
      d="m60.51 40.39-7.68-7.04a1.5 1.5 0 0 0-.92-.39l-3.42-.21V19.49c0-.77-.58-1.41-1.34-1.49-.76-.07-1.46.43-1.62 1.18l-2.16 10.27c-.07.33-.03.67.12.97l1.55 3.14-11.3 6.63c-.66.39-.92 1.21-.61 1.91.25.55.79.88 1.37.88.16 0 .31-.02.47-.08l9.84-3.24c.14-.05.26-.12.38-.2l-.82 21.51H24.13l-1.92-38.1 13.54 7.9c.24.14.5.2.75.2.46 0 .92-.21 1.21-.61.45-.62.37-1.48-.2-2l-9.83-8.96a1.5 1.5 0 0 0-.92-.39l-4.77-.29V1.5c0-.77-.58-1.41-1.34-1.49-.77-.07-1.47.43-1.62 1.18l-2.77 13.08c-.07.33-.03.67.12.98l2.15 4.34L3.74 28.2c-.66.39-.93 1.21-.61 1.91.25.55.79.89 1.37.89.15 0 .31-.02.47-.07l12.59-4.12c.32-.11.6-.32.79-.61l.59-.91L17.14 61H7.5c-.83 0-1.5.67-1.5 1.5S6.67 64 7.5 64h49c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-7.2l-.92-24.28 10.36 6.08a1.49 1.49 0 0 0 1.97-.4c.46-.62.37-1.48-.19-2z"
    />
  </svg>
);
export default SvgWindMill;
