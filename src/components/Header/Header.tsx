import HeaderTab from '~/components/HeaderTab/HeaderTab';
import AccountTab from '~/components/AccountTab/AccountTab';

const Header = (): JSX.Element => (
  <div className="p-3 mb-3 w-full rounded-xl bg-white flex items-center justify-between">
    <img
      src="logoExtended.png"
      alt="Typetone Logo"
      className="h-10"
    />
    <div className="flex items-center justify-center">
      <HeaderTab text="Templates" icon="templates" />
      <HeaderTab text="Chat with AI" icon="chat" active />
      <HeaderTab text="History" icon="history" />
    </div>
    <AccountTab />
  </div>
);

export default Header;
