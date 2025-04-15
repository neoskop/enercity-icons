import * as React from 'react';
import { SVGProps } from 'react';
const SvgLightBulb = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.327 13.807h-.082a.75.75 0 0 1-.75-.668l-.195-1.785-1.433-.157-4.823 4.823a.77.77 0 0 1-.532.217.77.77 0 0 1-.533-.217.756.756 0 0 1 0-1.065l4.823-4.823-.158-1.433-1.785-.194a.757.757 0 0 1-.667-.833c.045-.412.427-.697.832-.66l2.385.263a.75.75 0 0 1 .66.667l.203 1.785 1.785.203a.75.75 0 0 1 .667.66l.263 2.385a.753.753 0 0 1-.66.832m-9.473 6.99-3.653-3.652.9-.9 3.652 3.652zM5.46 22.184a1.06 1.06 0 0 1-1.508 0l-2.137-2.137a1.07 1.07 0 0 1 0-1.515l.33-.33 3.653 3.652zM21.248 2.753A9.35 9.35 0 0 0 14.594 0c-1.26 0-2.474.24-3.6.705a9.4 9.4 0 0 0-3.045 2.04C5.533 5.16 5.182 7.837 5.001 10.837c-.09 1.478-.158 2.543-.764 3.15L1.61 16.612l-.862.863a2.57 2.57 0 0 0 0 3.629l2.137 2.138a2.575 2.575 0 0 0 3.638.008l3.488-3.495c.57-.57 1.567-.66 3.143-.75 2.992-.181 5.67-.526 8.093-2.948A9.33 9.33 0 0 0 24 9.405a9.34 9.34 0 0 0-2.752-6.653"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLightBulb;
