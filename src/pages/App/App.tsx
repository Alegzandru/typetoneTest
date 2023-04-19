import Header from '~/components/Header/Header';
import ChatWindow from '~/components/ChatWindow/ChatWindow';
import './App.css';

const App = () => (
  <div className="bg-ui-grey h-screen p-3 flex flex-col justify-start items-center">
    <Header />
    <ChatWindow />
  </div>
);

export default App;
