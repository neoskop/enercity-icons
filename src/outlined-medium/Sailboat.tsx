import * as React from 'react';
import { SVGProps } from 'react';
const SvgSailboat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.746 20.254c-1.288 0-1.96.806-2.45 1.393-.469.562-.739.855-1.299.855s-.83-.293-1.298-.855c-.491-.587-1.163-1.393-2.452-1.393-1.29 0-1.96.806-2.452 1.394-.047.058-.087.1-.13.151l-1.472-3.043h15.668l-1.378 3.219a8 8 0 0 1-.284-.328c-.492-.587-1.164-1.393-2.453-1.393m-10.094-6.74 4.096-9.205v9.204zm13.07 0h-5.996c1.14-1.37 2.562-4.513-.189-10.495 2.422 1.953 5.858 5.645 6.185 10.494m-7.474-.613V3.803c2.694 5.958.748 8.427 0 9.098m12.002 7.353c-1.29 0-1.96.805-2.452 1.393-.332.399-.567.654-.875.774l1.764-4.119a.748.748 0 0 0-.69-1.044h-9.75v-2.247h8.25c.416 0 .75-.334.75-.75 0-8.059-7.614-13.241-9.274-14.085a.745.745 0 0 0-.855-.075.74.74 0 0 0-.305.372v.002l-.004.009c-.012.027-.03.052-.037.081l-5.96 13.392a.75.75 0 0 0 .686 1.054h5.25v2.247h-6.75a.75.75 0 0 0-.675 1.075l2.004 4.144c-.442-.059-.713-.332-1.127-.83-.49-.587-1.161-1.393-2.45-1.393a.75.75 0 1 0 0 1.499c.56 0 .829.292 1.297.853.491.588 1.162 1.394 2.45 1.394 1.29 0 1.96-.806 2.452-1.393.468-.562.738-.854 1.298-.854s.83.292 1.298.854c.492.587 1.163 1.393 2.452 1.393 1.29 0 1.96-.806 2.452-1.394.468-.56.738-.853 1.297-.853.56 0 .831.292 1.3.854.49.587 1.163 1.393 2.452 1.393 1.29 0 1.961-.806 2.452-1.393.468-.562.74-.854 1.3-.854a.75.75 0 1 0 0-1.499"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSailboat;
