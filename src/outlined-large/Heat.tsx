import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M42.104 29.935c6.014 4.262 7.883 8.351 8.275 11.33 2.272-2.422 4.847-5.895 4.605-9.492-.183-2.732-1.988-5.33-5.362-7.721L39.392 16.8c-6.015-4.263-7.883-8.354-8.276-11.331-2.272 2.42-4.846 5.894-4.605 9.491.184 2.733 1.988 5.33 5.362 7.722zm9.253-8.33c4.146 2.938 6.374 6.291 6.62 9.967.432 6.42-5.395 11.856-7.883 14.177q-.346.322-.598.564a1.5 1.5 0 0 1-1.933.127 1.5 1.5 0 0 1-.446-1.886c.098-.209 2.512-5.61-6.748-12.172l-10.23-7.252c-4.147-2.938-6.374-6.291-6.621-9.967-.432-6.42 5.395-11.857 7.883-14.18.229-.212.431-.401.598-.562a1.5 1.5 0 0 1 2.379 1.759c-.098.208-2.512 5.61 6.748 12.174zM24.609 47.199c6.014 4.262 7.883 8.353 8.275 11.331 2.272-2.421 4.847-5.894 4.605-9.492-.183-2.732-1.987-5.329-5.361-7.72l-10.231-7.253c-6.015-4.262-7.883-8.353-8.275-11.33-2.273 2.42-4.847 5.893-4.606 9.491.183 2.732 1.988 5.33 5.362 7.722zm-.978-15.58 10.232 7.251c4.145 2.938 6.373 6.292 6.62 9.967.43 6.42-5.396 11.857-7.884 14.178q-.346.322-.598.564a1.5 1.5 0 0 1-1.933.127 1.5 1.5 0 0 1-.446-1.886c.098-.208 2.513-5.612-6.748-12.174l-10.23-7.25c-4.147-2.939-6.374-6.293-6.621-9.969-.43-6.418 5.393-11.853 7.883-14.177l.002-.002q.345-.32.597-.562a1.501 1.501 0 0 1 2.379 1.76c-.098.208-2.512 5.61 6.747 12.172"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeat;
