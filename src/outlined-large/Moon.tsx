import * as React from 'react';
import { SVGProps } from 'react';
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40.56 6.513a1.531 1.531 0 0 1 1.704-.408v.001C53.038 10.366 60 20.551 60 32.052 60 47.462 47.34 60 31.777 60c-10.165 0-19.584-5.444-24.581-14.207a1.489 1.489 0 0 1 .18-1.728 1.524 1.524 0 0 1 1.706-.4 25.065 25.065 0 0 0 9.358 1.783c13.892 0 25.194-11.19 25.194-24.946a24.64 24.64 0 0 0-3.248-12.26 1.49 1.49 0 0 1 .175-1.728ZM12.206 47.765C16.944 53.542 24.124 57 31.777 57 45.67 57 56.97 45.81 56.97 32.053c0-8.86-4.627-16.844-12.075-21.309a27.787 27.787 0 0 1 1.766 9.758c0 15.41-12.66 27.946-28.222 27.946a28.48 28.48 0 0 1-6.235-.683ZM25.712 19.79l-2.403-.858c-.883-.315-.883-1.55 0-1.866l2.402-.858a1.96 1.96 0 0 0 1.187-1.174l.866-2.38c.318-.873 1.565-.873 1.883 0l.866 2.38c.2.546.634.978 1.186 1.175l2.403.858c.882.315.882 1.55 0 1.866l-2.403.858a1.96 1.96 0 0 0-1.186 1.174l-.866 2.38c-.318.873-1.565.873-1.883 0l-.866-2.38a1.965 1.965 0 0 0-1.186-1.174Zm-7.67 14.832 1.6.572a1.3 1.3 0 0 1 .79.783l.578 1.586c.212.583 1.044.583 1.256 0l.577-1.586c.133-.365.422-.652.79-.783l1.602-.572a.66.66 0 0 0 0-1.244l-1.601-.572a1.304 1.304 0 0 1-.79-.783l-.578-1.586c-.212-.583-1.044-.583-1.256 0l-.577 1.586a1.304 1.304 0 0 1-.79.783l-1.602.572a.66.66 0 0 0 0 1.244Zm-6.986-10.727-1.201-.43a.494.494 0 0 1 0-.932l1.201-.43a.982.982 0 0 0 .593-.586l.433-1.19a.502.502 0 0 1 .942 0l.433 1.19a.982.982 0 0 0 .592.587l1.202.429a.494.494 0 0 1 0 .933l-1.201.429a.982.982 0 0 0-.593.587l-.433 1.19a.502.502 0 0 1-.942 0l-.433-1.19a.982.982 0 0 0-.593-.587Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMoon;