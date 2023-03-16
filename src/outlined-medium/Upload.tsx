import * as React from 'react';
import { SVGProps } from 'react';
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.88 19.54h12.944a3.682 3.682 0 0 0 3.676-3.68 3.681 3.681 0 0 0-4.136-3.649.747.747 0 0 1-.82-.92A5.538 5.538 0 0 0 12.159 4.5a5.536 5.536 0 0 0-5.527 5.533.75.75 0 0 1-.75.75 4.384 4.384 0 0 0-4.38 4.377 4.385 4.385 0 0 0 4.38 4.38Zm13.31-9.508c0 .223-.01.443-.03.662A5.183 5.183 0 0 1 24 15.86a5.184 5.184 0 0 1-5.177 5.18H5.881A5.888 5.888 0 0 1 0 15.158a5.886 5.886 0 0 1 5.165-5.834C5.522 5.778 8.522 3 12.158 3a7.04 7.04 0 0 1 7.032 7.032Zm-6.9-.94a.765.765 0 0 1 .241.163l2.766 2.766a.751.751 0 0 1-1.06 1.061l-1.487-1.487v5.198a.75.75 0 1 1-1.5 0v-5.198l-1.486 1.487a.75.75 0 0 1-1.06-1.061l2.765-2.766a.753.753 0 0 1 .82-.163Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgUpload;
