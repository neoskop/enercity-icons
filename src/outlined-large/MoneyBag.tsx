import * as React from 'react';
import { SVGProps } from 'react';
const SvgMoneyBag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M32 61c9.376 0 15.793-1.917 19.074-5.697 2.604-3 3.457-7.368 2.606-13.353C52.043 30.416 42.55 22.532 40.57 21H23.43c-1.98 1.532-11.473 9.416-13.11 20.95-.85 5.985.001 10.353 2.606 13.353C16.207 59.083 22.624 61 32 61Zm1.737-56.843c-2 .612-4.068 1.245-6.327 1.245-2.49 0-5.09-.598-7.084-1.203L23.853 12h16.383l4.385-7.814c-.605-.356-1.784-.838-3.963-1.112-2.4-.303-4.59.368-6.906 1.078l-.013.004h-.002ZM22 16.624A1.38 1.38 0 0 0 23.377 18h17.246a1.38 1.38 0 0 0 1.378-1.377v-.245A1.38 1.38 0 0 0 40.623 15H23.377A1.38 1.38 0 0 0 22 16.379v.245Zm21.734 3.074c3.582 3.046 11.352 10.8 12.92 21.83.98 6.897-.104 12.046-3.313 15.74C49.408 61.799 42.428 64 32 64c-10.429 0-17.408-2.202-21.34-6.731-3.209-3.695-4.292-8.844-3.313-15.74 1.568-11.03 9.337-18.785 12.92-21.831a4.36 4.36 0 0 1-1.268-3.074v-.245c0-1.498.758-2.82 1.91-3.61L16.131 2.205a1.5 1.5 0 0 1 1.972-1.99c.05.022 5.02 2.187 9.306 2.187 1.81 0 3.58-.541 5.452-1.114h.002c2.522-.773 5.13-1.571 8.167-1.19 5.356.672 6.595 2.626 6.847 3.208.185.43.16.922-.069 1.33l-4.612 8.22A4.364 4.364 0 0 1 45 16.379v.245a4.36 4.36 0 0 1-1.268 3.074ZM38.721 33.99a1.499 1.499 0 0 1-2.092.35c-2.938-2.094-6.895-1.687-9.408.972A7.923 7.923 0 0 0 26.009 37H32a1.5 1.5 0 0 1 0 3h-6.937a8.468 8.468 0 0 0 0 2H32a1.5 1.5 0 0 1 0 3h-5.99a7.937 7.937 0 0 0 1.211 1.687c1.993 2.106 4.888 2.849 7.556 1.929a7.225 7.225 0 0 0 1.852-.972 1.5 1.5 0 1 1 1.742 2.441 10.17 10.17 0 0 1-2.62 1.369 10.107 10.107 0 0 1-3.288.554c-2.744 0-5.413-1.136-7.422-3.261A10.928 10.928 0 0 1 22.728 45h-2.729a1.5 1.5 0 0 1 0-3h2.058a11.616 11.616 0 0 1-.001-2h-2.057a1.5 1.5 0 0 1 0-3h2.728a10.977 10.977 0 0 1 2.314-3.75c3.555-3.757 9.161-4.325 13.33-1.35.675.48.831 1.417.35 2.09Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMoneyBag;
