import * as React from 'react';
import { SVGProps } from 'react';
const SvgSafeLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m17.513 9.51-1.552 1.553.097.104a1.18 1.18 0 0 1 0 1.665l-.983.983a3.9 3.9 0 0 1-2.752 1.14c-.706 0-1.41-.195-2.01-.586l-1.876 1.875a.77.77 0 0 1-.532.218.78.78 0 0 1-.533-.218.756.756 0 0 1 0-1.064l1.875-1.875a3.7 3.7 0 0 1-.614-2.01 3.68 3.68 0 0 1 1.087-2.67l1.065-1.065a1.19 1.19 0 0 1 1.673 0l.097.105 1.553-1.56a.756.756 0 0 1 1.064 0 .745.745 0 0 1 0 1.058l-1.56 1.56 1.284 1.282 1.559-1.56a.746.746 0 0 1 1.058 0 .756.756 0 0 1 0 1.065m2.437-7.417c-3.142 0-4.08-.623-4.905-1.178C14.37.465 13.68 0 12.225 0s-2.152.464-2.827.915C8.573 1.47 7.635 2.092 4.5 2.092c-.42 0-.75.338-.75.75V13.83a7.35 7.35 0 0 0 2.782 5.79l5.228 4.155a.72.72 0 0 0 .465.165.72.72 0 0 0 .465-.165l5.228-4.156A7.35 7.35 0 0 0 20.7 13.83V2.843a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSafeLoading;
