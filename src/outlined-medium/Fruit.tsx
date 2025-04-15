import * as React from 'react';
import { SVGProps } from 'react';
const SvgFruit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.61 13.594c-.466 3.067-2.113 6.823-4.737 8.295-1.391.78-2.932.824-4.58.133a.76.76 0 0 0-.58 0c-1.65.691-3.19.647-4.582-.133-2.624-1.472-4.27-5.228-4.737-8.295-.244-1.607-.386-4.517 1.416-5.966 1.532-1.233 4.272-1.142 7.923.263a.76.76 0 0 0 .538 0c3.653-1.405 6.393-1.496 7.923-.263 1.802 1.45 1.66 4.36 1.417 5.966M7.969 1.524c.99.085 2.47.524 3.568 2.225-.99-.084-2.471-.523-3.568-2.224m13.167 4.934c-1.76-1.416-4.434-1.566-7.943-.47.153-.622.36-1.41.537-1.9.302-.829 1.067-2.035 1.146-2.16l.007-.01a.75.75 0 0 0-1.26-.813c-.028.043-.535.83-.945 1.657C10.824.07 7.997-.2 6.596.095a.753.753 0 0 0-.532 1.032c1.406 3.24 3.981 4.113 5.76 4.144-.095.38-.18.73-.236.978-3.893-1.37-6.83-1.31-8.718.21C1.1 7.881.405 10.495.91 13.818c.485 3.178 2.212 7.54 5.488 9.378 1.705.957 3.637 1.067 5.604.324.858.324 1.71.486 2.538.486a6.2 6.2 0 0 0 3.067-.81c3.276-1.838 5.003-6.2 5.487-9.377.505-3.324-.19-5.938-1.96-7.362m-10.044 6.77a.749.749 0 1 0-1.176-.93c-1.67 2.111-.684 4.035.07 4.757a.743.743 0 0 0 1.052-.02.753.753 0 0 0-.01-1.059c-.197-.197-1.118-1.252.064-2.748m1.824 0a.749.749 0 1 1 1.176-.93c1.67 2.11.685 4.035-.069 4.757a.75.75 0 0 1-1.042-1.08c.199-.199 1.116-1.253-.065-2.747"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFruit;
