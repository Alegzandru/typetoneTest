import { SearchIcon } from '~/components/Svgs';

const SideBar = (): JSX.Element => (
  <div className="h-full min-w-72 p-4 bg-white rounded-xl mr-3">
    <i className="absolute py-2.5 px-3.5">
      <SearchIcon className="w-6 h-6" />
    </i>
    <input
      type="text"
      className="w-full py-2.5 pl-12 pr-3.5 text-base border-ui-border border rounded-xl text-font-dark placeholder:text-ui-placeholder"
      placeholder="Search chat"
    />
  </div>
);

export default SideBar;
