import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.145 58h49.71A4.15 4.15 0 0 0 61 53.854V19.958H3v33.896A4.15 4.15 0 0 0 7.145 58Zm9.782-51H7.145A4.15 4.15 0 0 0 3 11.146v5.812h8.032L16.927 7Zm32.528 0H36.688l-5.896 9.958h12.766L49.455 7ZM20.416 7l-5.897 9.958h12.785L33.2 7H20.416ZM61 16.958v-5.812A4.15 4.15 0 0 0 56.854 7h-3.912l-5.897 9.958H61ZM7.145 4h49.71C60.793 4 64 7.205 64 11.146v42.708c0 3.94-3.206 7.145-7.146 7.145H7.145C3.205 61 0 57.795 0 53.855V11.146C0 7.205 3.205 4 7.145 4Zm18.557 44.333 14.74-9.508a.168.168 0 0 0 .083-.151.167.167 0 0 0-.08-.15l-.002-.002-14.74-9.509-.003-.001a.17.17 0 0 0-.094-.031.183.183 0 0 0-.089.026c-.094.05-.094.129-.094.158v19.016c0 .03 0 .108.094.159.095.05.159.01.184-.007h.001Zm1.627-21.841 14.74 9.509a3.166 3.166 0 0 1 1.456 2.672 3.166 3.166 0 0 1-1.456 2.673l-14.74 9.508a3.183 3.183 0 0 1-4.906-2.673V29.165c0-1.165.636-2.236 1.66-2.793a3.177 3.177 0 0 1 3.246.12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlay;
