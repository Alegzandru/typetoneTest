import { SVGAttributes } from 'react';

type Props = { inheritStroke?: boolean } & Pick<SVGAttributes<SVGElement>, 'className'>;

const SendIcon = ({ inheritStroke, className }: Props): JSX.Element => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5782 11.3437L4.74378 2.47499C4.6104 2.4013 4.45774 2.36999 4.30612 2.38523C4.15451 2.40046 4.01113 2.46152 3.89508 2.56026C3.77902 2.65901 3.6958 2.79076 3.65649 2.93799C3.61718 3.08521 3.62365 3.24091 3.67503 3.38436L6.65628 11.7469C6.72195 11.9092 6.72195 12.0908 6.65628 12.2531L3.67503 20.6156C3.62365 20.7591 3.61718 20.9148 3.65649 21.062C3.6958 21.2092 3.77902 21.341 3.89508 21.4397C4.01113 21.5385 4.15451 21.5995 4.30612 21.6147C4.45774 21.63 4.6104 21.5987 4.74378 21.525L20.5782 12.6562C20.6954 12.5914 20.7931 12.4963 20.8611 12.3809C20.9292 12.2655 20.9651 12.134 20.9651 12C20.9651 11.866 20.9292 11.7345 20.8611 11.6191C20.7931 11.5037 20.6954 11.4086 20.5782 11.3437V11.3437Z" stroke={inheritStroke ? 'inherit' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.75 12H12.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SendIcon;
