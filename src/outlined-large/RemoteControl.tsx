import * as React from 'react';
import { SVGProps } from 'react';
const SvgRemoteControl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={65}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M62.203 30.268a1.5 1.5 0 0 0 1.645-1.339c.804-7.83-1.964-15.55-7.596-21.182C50.595 2.09 42.846-.678 34.99.142a1.501 1.501 0 0 0-1.336 1.649 1.508 1.508 0 0 0 1.648 1.336c6.957-.734 13.814 1.728 18.827 6.74 5.065 5.066 7.456 11.726 6.734 18.756a1.5 1.5 0 0 0 1.339 1.645Zm-6.64.03a1.499 1.499 0 0 1-1.489-1.696c.684-5.178-1.04-10.263-4.727-13.95-3.745-3.745-8.84-5.465-13.986-4.723a1.5 1.5 0 0 1-.428-2.969c6.086-.88 12.114 1.15 16.535 5.57 4.352 4.353 6.386 10.354 5.58 16.464a1.5 1.5 0 0 1-1.486 1.304Zm-30.978-7.104a11.31 11.31 0 0 1 8.048-3.333c3.04 0 5.897 1.184 8.047 3.333a11.305 11.305 0 0 1 3.334 8.048c0 3.039-1.184 5.897-3.269 7.986L19.363 58.225c-4.325 3.674-10.096 3.708-13.723.083-3.549-3.55-3.51-9.451.064-13.702l18.881-21.412ZM3.52 60.429a12.11 12.11 0 0 0 8.65 3.59c3.145 0 6.39-1.175 9.162-3.53l21.47-19.08c5.607-5.606 5.607-14.73 0-20.336-5.607-5.608-14.73-5.606-20.4.068L3.43 42.648c-4.608 5.479-4.57 13.123.088 17.78Zm21.257-27.852a4.599 4.599 0 0 1 3.26-1.348 4.6 4.6 0 0 1 3.26 1.348 4.617 4.617 0 0 1 0 6.52 4.616 4.616 0 0 1-6.52 0 4.617 4.617 0 0 1 0-6.52Zm-2.12 8.642a7.587 7.587 0 0 0 5.38 2.225 7.59 7.59 0 0 0 5.381-2.225c2.966-2.968 2.966-7.796 0-10.763-2.967-2.967-7.795-2.967-10.762 0-2.967 2.967-2.967 7.795 0 10.763Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRemoteControl;
