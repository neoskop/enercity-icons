import * as React from 'react';
import { SVGProps } from 'react';
const SvgMoneyBag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.5c3.606 0 6.044-.708 7.247-2.103.903-1.046 1.191-2.563.883-4.64-.605-4.078-4.082-6.895-4.899-7.506H8.77c-.817.611-4.294 3.428-4.899 7.505-.308 2.078-.02 3.595.883 4.641C5.956 21.792 8.394 22.5 12 22.5m.739-20.569c-.833.231-1.694.47-2.638.47-.913 0-1.861-.175-2.641-.372l1.233 2.472h6.66l1.643-2.653c-.27-.112-.716-.24-1.42-.32-.98-.111-1.884.139-2.837.403M8.25 6.376c0 .207.169.375.375.375h6.75a.376.376 0 0 0 0-.75h-6.75a.376.376 0 0 0-.375.375m8.55 1.205c1.463 1.235 4.232 4.036 4.814 7.955.376 2.534-.027 4.444-1.23 5.84C18.86 23.143 16.119 24 12 24s-6.862-.858-8.383-2.623c-1.204-1.397-1.607-3.307-1.23-5.841.58-3.919 3.35-6.72 4.814-7.955a1.857 1.857 0 0 1 .093-2.524l-1.965-3.94a.75.75 0 0 1 .95-1.031c.02.009 2.063.815 3.822.815.738 0 1.463-.2 2.23-.413l.007-.002.013-.003c1.046-.29 2.123-.59 3.394-.445 2.21.251 2.787.986 2.932 1.29a.75.75 0 0 1-.039.718l-1.893 3.058c.31.335.505.78.505 1.272 0 .46-.174.878-.45 1.205m-3.642 10.655a2.5 2.5 0 0 0 .64-.356.75.75 0 1 1 .903 1.199 3.84 3.84 0 0 1-2.343.8c-1.085 0-2.138-.47-2.93-1.352a4.5 4.5 0 0 1-.785-1.277H7.5a.75.75 0 1 1 0-1.5h.79q-.03-.375 0-.75H7.5a.75.75 0 1 1 0-1.5h1.143a4.4 4.4 0 0 1 .786-1.278c1.403-1.564 3.62-1.797 5.271-.556a.749.749 0 1 1-.9 1.198c-1.032-.774-2.37-.625-3.255.36a2 2 0 0 0-.15.2l-.053.076h1.655a.75.75 0 0 1 0 1.5H9.778q-.04.375 0 .75h2.22a.75.75 0 0 1 0 1.5h-1.654l.043.064c.05.072.098.145.158.211.692.77 1.692 1.043 2.613.711"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoneyBag;
