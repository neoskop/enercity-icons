import * as React from 'react';
import { SVGProps } from 'react';
const SvgGasPlant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.726 20.287h9.958c.4 0 .726-.326.726-.726v-.54H6v.54c0 .4.325.726.726.726Zm8.3 2.213H8.384v-.713h6.64v.713Zm2.384-4.979H6V8.51h11.41v9.012ZM7.83 5.741H6.726c-.4 0-.726.326-.726.726v.542h11.41v-.542c0-.4-.326-.725-.726-.725H7.831ZM8.938 1.5a.357.357 0 0 0-.357.357v2.385h1.902v-.866a.75.75 0 0 1 .75-.75h.8a.75.75 0 0 1 .75.75v.866h2.044V1.857a.356.356 0 0 0-.356-.357H8.938Zm7.39 2.742h.356c1.227 0 2.226.999 2.226 2.225v13.094a2.228 2.228 0 0 1-2.226 2.226h-.159v1.236a.978.978 0 0 1-.978.977H7.861a.978.978 0 0 1-.976-.977v-1.236h-.16A2.228 2.228 0 0 1 4.5 19.561V6.467c0-1.226.998-2.225 2.226-2.225h.355V1.857A1.86 1.86 0 0 1 8.938 0h5.533c1.024 0 1.856.833 1.856 1.857v2.385Zm-4.482 7.365c-.525.085-1.753.351-1.854 1.008-.165 1.07.556 1.262.64 1.28a.525.525 0 0 1 .025.007c.14.034 1.365.296 1.97-.89a5.15 5.15 0 0 0 .514-1.697c-.49.148-.97.24-1.295.292Zm-3.125 4.42c-.02-.085-.142-.72.251-1.536-.369-.475-.609-1.156-.463-2.104.127-.825.768-1.886 3.099-2.26.816-.131 1.53-.35 1.91-.587a.753.753 0 0 1 1.14.543c.009.073.221 1.826-.695 3.614-.707 1.382-1.95 1.752-2.89 1.752a3.13 3.13 0 0 1-.83-.108 1.053 1.053 0 0 0-.057.364.766.766 0 0 1-.746.88.73.73 0 0 1-.719-.559Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGasPlant;
