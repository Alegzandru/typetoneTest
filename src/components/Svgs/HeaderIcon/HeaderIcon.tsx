import { SVGAttributes } from 'react';

export type HeaderIconType = 'templates' | 'history' | 'chat';

type Props = { type: HeaderIconType, inheritStroke?: boolean } & Pick<SVGAttributes<SVGElement>, 'className'>;

const HeaderIcon = ({ type, className, inheritStroke }: Props): JSX.Element | null => {
  if (type === 'templates') {
    return (
      <svg className={className} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.25 16.875C4.24897 16.6285 4.29676 16.3842 4.39062 16.1562C4.48448 15.9283 4.62256 15.7212 4.79687 15.5469C4.97119 15.3725 5.1783 15.2345 5.40625 15.1406C5.6342 15.0467 5.87848 14.999 6.125 15H16.75V2.49999H6.125C5.87848 2.49895 5.6342 2.54674 5.40625 2.64061C5.1783 2.73447 4.97119 2.87254 4.79687 3.04686C4.62256 3.22117 4.48448 3.42828 4.39062 3.65623C4.29676 3.88419 4.24897 4.12847 4.25 4.37499V16.875Z" stroke={inheritStroke ? 'inherit' : '#4B5565'} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.25 16.875V17.5H15.5" stroke={inheritStroke ? 'inherit' : '#4B5565'} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'history') {
    return (
      <svg className={className} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 17.5C14.6421 17.5 18 14.1421 18 10C18 5.85786 14.6421 2.5 10.5 2.5C6.35786 2.5 3 5.85786 3 10C3 14.1421 6.35786 17.5 10.5 17.5Z" stroke={inheritStroke ? 'inherit' : '#4B5565'} strokeMiterlimit="10" />
        <path d="M10.5 5.625V10H14.875" stroke={inheritStroke ? 'inherit' : '#4B5565'} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 13.75H2.34375C2.21943 13.75 2.1002 13.7006 2.01229 13.6127C1.92439 13.5248 1.875 13.4056 1.875 13.2812V8.125C1.875 6.63316 2.46763 5.20242 3.52252 4.14752C4.57742 3.09263 6.00816 2.5 7.5 2.5V2.5C8.99184 2.5 10.4226 3.09263 11.4775 4.14752C12.5324 5.20242 13.125 6.63316 13.125 8.125V8.125C13.125 9.61684 12.5324 11.0476 11.4775 12.1025C10.4226 13.1574 8.99184 13.75 7.5 13.75V13.75Z" stroke={inheritStroke ? 'inherit' : '#4B5565'} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.19531 13.75C7.58313 14.8469 8.30154 15.7966 9.25158 16.4682C10.2016 17.1398 11.3365 17.5003 12.5 17.5H17.6562C17.7806 17.5 17.8998 17.4506 17.9877 17.3627C18.0756 17.2748 18.125 17.1556 18.125 17.0312V11.875C18.127 10.4353 17.5761 9.04972 16.5861 8.00443C15.596 6.95914 14.2424 6.3339 12.8047 6.25781" stroke={inheritStroke ? 'inherit' : '#4B5565'} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default HeaderIcon;
