import * as React from 'react';
import { SVGProps } from 'react';
const SvgTreeTrunk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M60.971 36.507a.502.502 0 0 1-.5.501H45.463c-.393 0-.77.155-1.053.432l-4.642 4.577H28.456a1.5 1.5 0 0 0-1.061.44l-6.003 6.011a1.504 1.504 0 0 0 1.06 2.565c.385 0 .769-.146 1.063-.44l5.562-5.57h7.64l-15.48 15.259a2.43 2.43 0 0 1-3.436 0l-8.984-8.997 3.692-3.698a1.503 1.503 0 0 0 0-2.124 1.497 1.497 0 0 0-2.122 0L6.695 49.16l-2.982-2.985a2.418 2.418 0 0 1-.712-1.72c0-.65.253-1.26.712-1.72l29.525-29.563 1.59 7.816-12.435 12.453a1.504 1.504 0 0 0 1.06 2.565c.385 0 .769-.146 1.062-.44L37.52 22.542c.357-.356.511-.869.41-1.363l-2.148-10.555 6.898-6.908a2.416 2.416 0 0 1 1.718-.711 2.42 2.42 0 0 1 1.718.71l9.256 9.27-9.993 10.461c-.572.6-.552 1.551.047 2.125.291.28.665.416 1.038.416.395 0 .79-.155 1.084-.463l9.947-10.413 2.71 2.712A2.72 2.72 0 0 1 61 19.605a2.198 2.198 0 0 1-.642 1.672l-7.966 8.2a1.504 1.504 0 0 0 1.075 2.55h7.004a.5.5 0 0 1 .5.5v3.98Zm-.5-7.486h-3.45l5.473-5.635c2.072-2.073 1.996-5.523-.168-7.688L48.238 1.59a5.43 5.43 0 0 0-7.68 0L1.592 40.61A5.401 5.401 0 0 0 0 44.455c0 1.452.565 2.82 1.591 3.845l4.04 4.046c0 .001 0 .002.002.002l.002.002 10.044 10.057a5.413 5.413 0 0 0 3.844 1.592 5.396 5.396 0 0 0 3.828-1.583l18.092-17.834 4.635-4.569h14.393a3.507 3.507 0 0 0 3.501-3.506v-3.98a3.507 3.507 0 0 0-3.5-3.506Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTreeTrunk;
