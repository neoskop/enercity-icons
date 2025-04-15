import * as React from 'react';
import { SVGProps } from 'react';
const SvgSnowflake = (props: SVGProps<SVGSVGElement>) => (
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
      d="m59.25 46-2.78-1.6 2.34-1.15a1.5 1.5 0 1 0-1.33-2.69l-4.14 2-3-1.7L56 38.1a1.5 1.5 0 0 0-1.33-2.69l-7.38 3.64-2.95-1.7 2.34-1.15a1.5 1.5 0 1 0-1.33-2.69l-3.54 1.74v-6.5l3.54 1.74a1.5 1.5 0 1 0 1.33-2.69l-2.34-1.15L47.26 25l7.38 3.64c.207.107.437.162.67.16a1.5 1.5 0 0 0 .69-2.9l-5.58-2.75 3-1.7 4.14 2a1.5 1.5 0 1 0 1.33-2.69l-2.34-1.15 2.78-1.6a1.5 1.5 0 0 0 .545-2.055 1.5 1.5 0 0 0-2.055-.545L55 17.05l.16-2.6a1.503 1.503 0 0 0-3-.19l-.3 4.59-2.95 1.7.41-6.2a1.51 1.51 0 0 0-3-.19l-.53 8.19-3 1.7.17-2.6a1.503 1.503 0 0 0-3-.19l-.26 3.94-5.66-3.26 3.3-2.19a1.504 1.504 0 0 0-1.67-2.5L33.5 18.7v-3.4l6.86-4.55a1.503 1.503 0 0 0-1.67-2.5L33.5 11.7V8.3l3.85-2.55a1.503 1.503 0 1 0-1.67-2.5L33.5 4.7V1.5a1.5 1.5 0 1 0-3 0v3.2l-2.18-1.45a1.503 1.503 0 1 0-1.67 2.5L30.5 8.3v3.4l-5.19-3.45a1.503 1.503 0 1 0-1.67 2.5l6.86 4.55v3.4l-2.18-1.45a1.502 1.502 0 1 0-1.67 2.5L30 21.94l-5.71 3.26-.29-3.94a1.503 1.503 0 0 0-3 .19l.17 2.6-2.95-1.7-.53-8.19a1.51 1.51 0 0 0-3 .19l.41 6.2-2.95-1.7-.3-4.59a1.503 1.503 0 0 0-3 .19l.15 2.6-2.77-1.6a1.505 1.505 0 0 0-2.208 1.685 1.5 1.5 0 0 0 .698.915l2.78 1.6-2.31 1.15a1.5 1.5 0 1 0 1.33 2.69l4.14-2 2.95 1.7L8 25.9a1.5 1.5 0 0 0 .66 2.85c.233.002.463-.053.67-.16L16.74 25l3 1.7-2.39 1.1a1.5 1.5 0 0 0 .65 2.85c.23 0 .456-.054.66-.16l3.54-1.74v6.5l-3.54-1.74a1.5 1.5 0 1 0-1.33 2.69l2.34 1.15-3 1.7-7.31-3.64A1.507 1.507 0 0 0 8 38.1l5.58 2.75-2.95 1.7-4.14-2a1.499 1.499 0 0 0-2.26 1.817 1.5 1.5 0 0 0 .96.833l2.34 1.15L4.75 46a1.5 1.5 0 0 0 .76 2.8 1.5 1.5 0 0 0 .75-.2L9 47l-.16 2.6a1.49 1.49 0 0 0 1.4 1.59h.1a1.5 1.5 0 0 0 1.5-1.41l.3-4.59 2.95-1.7-.41 6.2a1.5 1.5 0 0 0 1.41 1.59h.1a1.51 1.51 0 0 0 1.5-1.41l.53-8.19L21.2 40l-.2 2.55a1.49 1.49 0 0 0 1.4 1.59h.1a1.5 1.5 0 0 0 1.5-1.4l.26-3.94L30 42.06l-3.3 2.19a1.503 1.503 0 0 0 1.67 2.5l2.13-1.45v3.4l-6.86 4.55a1.503 1.503 0 0 0 1.67 2.5l5.19-3.45v3.4l-3.85 2.55a1.505 1.505 0 0 0 0 2.5 1.5 1.5 0 0 0 1.67 0l2.18-1.45v3.2a1.5 1.5 0 0 0 3 0v-3.2l2.18 1.45a1.52 1.52 0 0 0 1.729-.041 1.5 1.5 0 0 0-.059-2.459L33.5 55.7v-3.4l5.19 3.45a1.52 1.52 0 0 0 1.729-.041 1.5 1.5 0 0 0-.059-2.459L33.5 48.7v-3.4l2.18 1.45a1.52 1.52 0 0 0 1.729-.041 1.5 1.5 0 0 0-.059-2.459l-3.3-2.19 5.66-3.26.29 3.94a1.5 1.5 0 0 0 1.5 1.41h.1a1.49 1.49 0 0 0 1.4-1.6L42.8 40l3 1.7.53 8.19a1.51 1.51 0 0 0 1.5 1.41h.1a1.5 1.5 0 0 0 1.41-1.59l-.41-6.2 2.95 1.7.3 4.59a1.5 1.5 0 0 0 1.5 1.41h.1a1.49 1.49 0 0 0 1.4-1.59L55 47l2.77 1.6c.228.132.487.201.75.2a1.5 1.5 0 0 0 .76-2.8zM32 39.77l-6.77-3.89v-7.76L32 24.23l6.77 3.89v7.76z"
    />
  </svg>
);
export default SvgSnowflake;
