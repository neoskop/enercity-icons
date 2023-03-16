import * as React from 'react';
import { SVGProps } from 'react';
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.5 24c-2.032 0-4.271-.74-6.643-2.215-3.545-2.204-6.551-5.547-8.047-7.741C1.84 12.62-1.195 7.67.51 3.72.852 2.928 2.852.223 4.78.013c.751-.081 1.423.225 1.888.863l.129.176c2.157 2.94 2.957 4.53 2.763 5.489-.17.84-1.044 1.504-1.814 2.09-.247.188-.48.365-.625.504-.209.199-.292.427-.27.738.129 1.795 3.466 4.747 4.97 5.819.17.122.345.252.522.385 1.5 1.128 2.104 1.384 2.723.674.09-.103.208-.253.332-.41.666-.844 1.493-1.895 2.479-1.9h.01c1.11 0 2.536.976 3.792 1.836.418.285.813.556 1.09.71 1.525.853 1.299 1.782 1.057 2.765-.027.107-.054.22-.083.342a.694.694 0 0 1-.831.518.687.687 0 0 1-.526-.82l.087-.363c.086-.353.161-.66.125-.807-.036-.146-.3-.319-.515-.44-.332-.185-.733-.46-1.198-.777-.926-.633-2.323-1.59-2.999-1.59h-.004c-.327.025-1.124 1.037-1.387 1.37-.135.171-.263.334-.376.463-1.579 1.81-3.41.432-4.622-.478-.166-.126-.332-.25-.493-.366-.052-.038-5.33-3.879-5.542-6.835-.05-.715.188-1.345.692-1.825.2-.19.464-.39.741-.602.46-.35 1.23-.938 1.3-1.273.034-.18-.044-1.03-2.526-4.414l-.131-.179c-.219-.299-.42-.322-.605-.301-1.165.128-2.865 2.239-3.142 2.882-1.43 3.31 1.302 7.739 2.174 9.017 2.878 4.22 11.139 12.179 16.938 8.335a.7.7 0 0 1 .965.188.68.68 0 0 1-.19.953A7.401 7.401 0 0 1 17.5 24Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPhone;
