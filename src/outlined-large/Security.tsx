import * as React from 'react';
import { SVGProps } from 'react';
const SvgSecurity = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M52 37.056c0 5.096-2.271 9.822-6.233 12.969L32.5 60.583l-13.268-10.56C15.27 46.879 13 42.153 13 37.057V8.683c8.44-.209 11.394-2.185 13.791-3.79l.003-.002.002-.001C28.436 3.792 29.62 3 32.5 3s4.063.793 5.7 1.89h.002C40.599 6.498 43.55 8.475 52 8.684zM53.5 5.7c-8.7 0-11.32-1.755-13.63-3.303C38.11 1.217 36.29 0 32.5 0s-5.613 1.219-7.375 2.399C22.814 3.947 20.193 5.701 11.5 5.701a1.5 1.5 0 0 0-1.5 1.5v29.855c0 6.017 2.685 11.6 7.365 15.316l14.2 11.302a1.5 1.5 0 0 0 1.869 0l14.2-11.301c4.68-3.717 7.366-9.3 7.366-15.317V7.2a1.5 1.5 0 0 0-1.5-1.5M38.002 21.26v4.378H26.996v-4.377a5.51 5.51 0 0 1 5.503-5.503 5.51 5.51 0 0 1 5.503 5.503M41 42.538V28.639H24v13.898zM23.996 21.262v4.377H22.5a1.5 1.5 0 0 0-1.5 1.5v16.898a1.5 1.5 0 0 0 1.5 1.5h20a1.5 1.5 0 0 0 1.5-1.5V27.139a1.5 1.5 0 0 0-1.5-1.5h-1.497v-4.377c0-4.688-3.814-8.503-8.503-8.503-4.688 0-8.503 3.815-8.503 8.503M31 34.338a1.5 1.5 0 1 1 3 0v2.5a1.5 1.5 0 1 1-3 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSecurity;
