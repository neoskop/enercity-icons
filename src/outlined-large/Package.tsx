import * as React from 'react';
import { SVGProps } from 'react';
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M33.5 32.927v27.146L61 46.323V19.177l-27.5 13.75Zm-22.48-9.74L3 19.177v27.146l27.5 13.75V32.927l-9.08-4.541v12.56a1.5 1.5 0 0 1-2.172 1.343l-7.398-3.7a1.502 1.502 0 0 1-.83-1.342v-14.06ZM39.674 7.013 32 3.177 4.854 16.75l7.673 3.837L39.674 7.013Zm3.354 1.678L15.882 22.263l3.99 1.996 27.146-13.574-3.99-1.994ZM18.42 26.886l-4.399-2.199V36.32l4.4 2.199V26.886Zm4.807-.95L32 30.322 59.146 16.75l-8.774-4.387-27.146 13.572Zm40.692-9.653a1.436 1.436 0 0 1 .082.467v30.5a1.5 1.5 0 0 1-.829 1.342l-30.5 15.25a1.51 1.51 0 0 1-1.342 0L.83 48.592A1.5 1.5 0 0 1 0 47.25v-30.5a1.436 1.436 0 0 1 .082-.467 1.428 1.428 0 0 1 .138-.305l.02-.035a1.418 1.418 0 0 1 .27-.312l.023-.019c.077-.065.16-.122.248-.17l.023-.016a.191.191 0 0 1 .025-.018L31.33.158c.422-.21.92-.21 1.342 0l18.11 9.056c.221.054.43.153.605.301l11.785 5.893a.13.13 0 0 1 .024.017l.024.016c.089.05.171.106.248.17l.028.023a1.562 1.562 0 0 1 .266.309l.019.035a1.428 1.428 0 0 1 .138.306ZM47.651 45.897l7.35-3.664v-6.97l-7.35 3.664v6.97Zm8.18-14.4A1.501 1.501 0 0 1 58 32.837V43.16a1.5 1.5 0 0 1-.83 1.343l-10.35 5.16a1.495 1.495 0 0 1-1.458-.068 1.5 1.5 0 0 1-.71-1.275V38c0-.57.321-1.09.83-1.344l10.348-5.16Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPackage;
