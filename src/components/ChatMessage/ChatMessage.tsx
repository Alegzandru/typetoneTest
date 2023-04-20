import { AccountPhoto } from '~/components/AccountTab/AccountTab';

type Props = {
  text: string
  type: 'question' | 'answer'
  className?: string
};

const ChatMessage = ({ text, type, className }: Props): JSX.Element => {
  const isAnswer = type === 'answer';

  return (
    <li
      className={`
        p-4 flex justify-start items-center w-full
        ${isAnswer ? 'bg-ui-darkGrey' : 'bg-white'}
        ${className}
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
