import HeaderIcon, { HeaderIconType } from '~/components/Svgs/HeaderIcon/HeaderIcon';

type Props = {
  text: string
  icon: HeaderIconType
  active?: boolean
};

const HeaderTab = ({ text, icon, active = false }: Props): JSX.Element => (
  <button
    className={`
      py-3 px-4 flex items-center justify-center rounded-lg 
      ${active ? 'bg-brand-light' : ''}
    `}
    type="button"
  >
    <HeaderIcon type={icon} className="mr-1 stroke-brand-text" inheritStroke={active} />
    <span
      className={`
        text-base
        ${active ? 'font-medium text-brand-text' : ''}
      `}
    >
      {text}
    </span>
  </button>
);

export default HeaderTab;
