import { memo, SVGProps } from 'react';

const CasinhaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 33 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M13.2 24V15.5294H19.8V24H28.05V12.7059H33L16.5 0L0 12.7059H4.95V24H13.2Z' fill='black' />
  </svg>
);
const Memo = memo(CasinhaIcon);
export { Memo as CasinhaIcon };
