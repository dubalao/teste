import { memo, SVGProps } from 'react';

const ChevronIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M8 10.5L12 14.5L16 10.5' stroke='#6E7C87' />
  </svg>
);
const Memo = memo(ChevronIcon3);
export { Memo as ChevronIcon3 };
