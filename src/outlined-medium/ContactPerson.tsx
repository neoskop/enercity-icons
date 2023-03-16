import * as React from 'react';
import { SVGProps } from 'react';
const SvgContactPerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.131 14.008-.273.818L12 16.962l2.142-2.136-.273-.818c-.47.17-.962.269-1.46.269h-.817c-.5 0-.991-.099-1.46-.27Zm-1.813-5.23v.8c0 1.603 1.636 3.206 3.274 3.206h.817c1.637 0 3.273-1.603 3.273-3.206v-.8s.818 0 .818-.803v-.8c0-.802-.818-.802-.818-.802 1.636-2.404-.818-4.808-.818-4.808s-.818 1.603-4.091 1.603c-2.806 0-2.605 1.766-2.49 2.775.018.168.035.315.035.43-.818 0-.818.542-.818.801v.801c0 .802.818.802.818.802Zm7.394 6.013a.746.746 0 0 1-.181.764l-3 2.991a.75.75 0 0 1-1.062 0l-2.652-2.644-3.368 1.319c-.653.256-1.117.78-1.241 1.402l-1.232 4.815a.749.749 0 0 1-.912.54.746.746 0 0 1-.54-.909l1.222-4.776c.215-1.084 1.023-2.019 2.154-2.462l3.499-1.37.39-1.166c0-.004.003-.007.005-.01s.005-.006.006-.01c-1.121-.855-1.915-2.157-1.978-3.522C6.338 9.366 6 8.767 6 7.976v-.801c0-.83.3-1.398.732-1.761-.031-.76.072-1.742.807-2.561.702-.782 1.79-1.178 3.234-1.178 1.965 0 2.636-.665 2.769-.825.181-.452.546-.714 1.03-.822.085-.018.171-.028.255-.028.405 0 .788.207 1.088.501.96.94 2.293 3.068 1.665 5.316.26.356.42.81.42 1.357v.801c0 .793-.338 1.391-.822 1.778-.063 1.365-.857 2.667-1.978 3.522a.044.044 0 0 0 .006.01c.002.003.005.006.006.01l.5 1.496Zm4.037-2.64c.23-.241.797-.28 1.753.512 1.28 1.069 1.782 3.908-1.323 7.797l-.007.022c-3.106 3.88-5.963 3.96-7.241 2.902-.957-.791-1.037-1.374-.85-1.653.186-.278.92-.987 1.79-1.555.774-.51.954-.317 1.592.364l.177.188c.785.82 1.623.13 2.962-1.554 1.35-1.685 1.853-2.65.893-3.264l-.203-.13c-.794-.503-1.013-.642-.688-1.53.372-.97.914-1.857 1.145-2.099Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgContactPerson;
