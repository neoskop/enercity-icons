import * as React from 'react';
import { SVGProps } from 'react';
const SvgLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.805 13.496.062.003H10.5a.75.75 0 0 1 .75.75v8.163c0 .057.017.074.045.083.023.007.05.009.089-.047l8.81-11.944-.061-.004H13.5a.75.75 0 0 1-.75-.75V1.588c0-.058-.017-.074-.045-.083-.024-.007-.05-.01-.09.047zM11.325 24q-.24 0-.478-.074c-.667-.209-1.097-.803-1.097-1.514V15H3.867c-.64 0-1.2-.312-1.463-.815-.243-.466-.196-1.022.127-1.487L11.396.679a1.55 1.55 0 0 1 1.756-.605c.667.21 1.098.803 1.098 1.514v7.413h5.883c.638 0 1.199.312 1.462.814.244.466.196 1.022-.127 1.487l-8.865 12.019a1.55 1.55 0 0 1-1.278.679"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLightning;
