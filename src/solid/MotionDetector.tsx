import * as React from 'react';
import { SVGProps } from 'react';
const SvgMotionDetector = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.425 12.877a.907.907 0 0 1-.908-.908q0-.01.004-.018.003-.007.004-.02a.895.895 0 0 1 .69-.832l.063-.014a.6.6 0 0 1 .147-.023h.008a.908.908 0 0 1-.008 1.815m-.75 7.192H11.46V3.893h4.216v5.781l-.1.043-.058.025a2.37 2.37 0 0 0-1.304 1.276q-.002.017-.014.027l-.002.002a4 4 0 0 0-.122.417l-.012.048q-.045.225-.046.45v.007c0 .166.016.315.046.465l.006.03q.003.017.008.03c.18.848.788 1.516 1.598 1.778zm-7.177-7.334H6.653a.753.753 0 0 1-.75-.75c0-.42.337-.75.75-.75h1.845c.411 0 .75.33.75.75 0 .412-.339.75-.75.75m8.677-3.046V3.51a1.12 1.12 0 0 0-1.117-1.117H11.46v-.908c0-.466-.21-.893-.585-1.178a1.47 1.47 0 0 0-1.29-.255L1.102 2.309A1.49 1.49 0 0 0 0 3.742v16.425c0 .667.45 1.26 1.095 1.44l8.482 2.34c.136.03.263.052.398.052a1.487 1.487 0 0 0 1.485-1.492v-.938h4.598a1.12 1.12 0 0 0 1.117-1.117V14.25a2.4 2.4 0 0 0 1.657-2.28 2.41 2.41 0 0 0-1.657-2.28m2.779-1.237a.75.75 0 1 0-1.06 1.06 3.496 3.496 0 0 1 0 4.939.75.75 0 1 0 1.06 1.06 4.997 4.997 0 0 0 0-7.059m.765-1.834a.75.75 0 0 1 1.06 0c2.954 2.954 2.954 7.757 0 10.71a.75.75 0 0 1-.53.22.749.749 0 0 1-.53-1.28 6.08 6.08 0 0 0 0-8.59.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMotionDetector;
