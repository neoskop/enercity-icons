import * as React from 'react';
import { SVGProps } from 'react';
const SvgWindowAlarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 8.25a.768.768 0 0 0 .532-.217L14.557 1.5h-2.114L6.967 6.968a.756.756 0 0 0 0 1.065c.15.142.338.217.533.217Zm8.467-1.283L12.435 10.5h2.13l2.467-2.468a.756.756 0 0 0 0-1.065.756.756 0 0 0-1.065 0Zm-1.815 14.175h6.098V12H3.75v9.142h6.098A2.24 2.24 0 0 1 12 19.5c1.027 0 1.89.698 2.152 1.642Zm-2.902.608c0 .413.338.75.75.75s.75-.337.75-.75A.752.752 0 0 0 12 21a.752.752 0 0 0-.75.75ZM3 0h18c.413 0 .75.338.75.75v21.142c0 .413-.337.75-.75.75h-6.938A2.253 2.253 0 0 1 12 24a2.254 2.254 0 0 1-2.063-1.358H3a.752.752 0 0 1-.75-.75V.75C2.25.338 2.587 0 3 0Zm9 13.5h-.002c-2.492 0-4.827 1.162-6.576 3.271a.752.752 0 0 0 1.155.957C8.037 15.97 9.96 15 11.998 15c2.041 0 3.967.969 5.424 2.729a.751.751 0 0 0 1.156-.957c-1.748-2.11-4.084-3.272-6.579-3.272Zm0 3h-.002c-1.36 0-2.63.63-3.576 1.771a.75.75 0 1 0 1.156.957c.656-.791 1.515-1.228 2.42-1.228.907 0 1.768.436 2.425 1.229a.748.748 0 0 0 1.056.099.75.75 0 0 0 .099-1.056c-.947-1.143-2.218-1.772-3.579-1.772Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgWindowAlarm;
