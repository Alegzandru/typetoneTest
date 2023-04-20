import { AccountPhoto } from '~/components/AccountTab/AccountTab';

type Props = {
  text: string;
  type: 'question' | 'answer'
};

const ChatMessage = ({ text, type }: Props): JSX.Element => {
  const isAnswer = type === 'answer';

  return (
    <li
      className={`
        p-4 flex justify-start items-center w-full
        ${isAnswer ? 'bg-ui-darkGrey' : 'bg-white'}
      `}
    >
      <AccountPhoto logo={isAnswer} />
      <div className="grow">
        {text}
      </div>
    </li>
  );
};

export default ChatMessage;
