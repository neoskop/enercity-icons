import * as React from 'react';
import { SVGProps } from 'react';
const SvgTreeTrunk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.5 13.5h-5.25a.75.75 0 0 0-.527.216L15.42 15h-4.922a.75.75 0 0 0-.522.212l-2.32 2.25a.75.75 0 1 0 1.045 1.077l2.101-2.039h3.095l-5.74 5.658c-.458.456-1.2.454-1.657 0l-2.924-2.924L5.03 17.78a.75.75 0 1 0-1.061-1.06l-1.453 1.453-.674-.675a1.174 1.174 0 0 1 0-1.656L12.257 5.426l.438 2.567L8.47 12.22a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 .21-.656l-.683-3.997 2.285-2.285a1.17 1.17 0 0 1 1.656 0l2.925 2.924-3.703 3.703a.75.75 0 1 0 1.061 1.06l3.703-3.701.674.673c.456.456.456 1.2-.013 1.67l-2.438 2.563A.75.75 0 0 0 20.25 12h2.25zm0-3h-.501l1.219-1.282a2.675 2.675 0 0 0 0-3.777L18.558.78a2.673 2.673 0 0 0-3.778 0l-2.586 2.59c-.02.021-.043.036-.058.057L.78 14.781a2.674 2.674 0 0 0 0 3.778l4.66 4.66c.52.52 1.205.78 1.889.78s1.366-.259 1.885-.777l7.043-6.941L17.558 15H22.5c.827 0 1.5-.674 1.5-1.5V12c0-.828-.673-1.5-1.5-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTreeTrunk;
