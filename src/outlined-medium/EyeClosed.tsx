import * as React from 'react';
import { SVGProps } from 'react';
const SvgEyeClosed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17.454c-1.685 0-3.277-.673-4.65-1.557l1.942-1.215A3.729 3.729 0 0 0 12 15.852a3.754 3.754 0 0 0 3.75-3.75c0-.461-.095-.898-.248-1.306l2.46-1.54a19.926 19.926 0 0 1 2.839 2.846c-1.091 1.349-4.68 5.352-8.8 5.352ZM9.807 12.59a2.23 2.23 0 0 1-.057-.488c0-1.24 1.01-2.25 2.25-2.25.528 0 1.008.19 1.39.495L9.808 12.59Zm4.443-.488c0 1.241-1.01 2.25-2.25 2.25-.527 0-1.007-.19-1.39-.495l3.584-2.242c.035.157.056.32.056.487Zm-11.05 0c1.09-1.348 4.68-5.351 8.8-5.351 1.686 0 3.278.673 4.65 1.557l-1.94 1.215A3.73 3.73 0 0 0 12 8.353a3.754 3.754 0 0 0-3.75 3.75c0 .46.096.898.249 1.306l-2.46 1.539a19.84 19.84 0 0 1-2.84-2.846Zm19.16-.436c-.092-.13-1.234-1.698-3.05-3.253l2.838-1.777a.75.75 0 1 0-.795-1.271l-3.306 2.07C16.357 6.236 14.28 5.25 12 5.25c-5.704 0-10.172 6.154-10.36 6.415a.748.748 0 0 0 0 .873c.093.129 1.234 1.698 3.052 3.252l-2.84 1.777a.75.75 0 1 0 .796 1.272l3.306-2.07c1.69 1.198 3.766 2.184 6.046 2.184 5.705 0 10.173-6.154 10.36-6.415a.748.748 0 0 0 0-.873Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEyeClosed;
