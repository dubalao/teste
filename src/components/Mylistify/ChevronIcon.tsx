import { memo, SVGProps } from 'react';

const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M8.5 10.5L12.5 14.5L16.5 10.5' stroke='#6E7C87' />
  </svg>
);
const Memo = memo(ChevronIcon);
export { Memo as ChevronIcon };
