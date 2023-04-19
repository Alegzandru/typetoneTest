import { HeaderIcon, SearchIcon, SendIcon } from '~/components/Svgs';

const ChatWindow = () => (
  <div className="grow w-full flex items-end justify-between">
    <div className="h-full w-72 p-4 bg-white rounded-xl mr-3">
      <i className="absolute py-2.5 px-3.5">
        <SearchIcon className="w-6 h-6" />
      </i>
      <input
        type="text"
        className="w-full py-2.5 pl-12 pr-3.5 text-base border-ui-border border rounded-xl text-font-dark placeholder:text-ui-placeholder"
        placeholder="Search chat"
      />
    </div>
    <div className="h-full border border-ui-border rounded-xl grow flex flex-col items-center justify-end overflow-hidden">
      <div className="grow" />
      <div className="py-5 px-4 w-full bg-white flex items-center justify-center">
        <button
          className="p-2.5 mr-3 flex items-center justify-center border rounded-md border-ui-border"
          type="button"
          aria-label="Templates"
        >
          <HeaderIcon type="templates" className="w-6 h-6" />
        </button>
        <input
          type="text"
          className="grow py-2.5 px-3.5 mr-3 bg-ui-lightGrey text-base border border-ui-border rounded-md text-font-dark placeholder:text-ui-placeholder"
          placeholder="Send message here"
        />
        <button
          type="button"
          className="flex items-center justify-center px-4 py-2.5 bg-brand-normal rounded-md"
        >
          <SendIcon className="mr-2" />
          <span className="text-white font-medium text-base">Send</span>
        </button>
      </div>
    </div>
  </div>
);

export default ChatWindow;
