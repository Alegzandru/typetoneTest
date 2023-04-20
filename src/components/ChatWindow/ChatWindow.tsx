import { useMemo, useState } from 'react';
import ChatMessage from '~/components/ChatMessage/ChatMessage';
import SideBar from '~/components/SideBar/SideBar';
import { HeaderIcon, SendIcon } from '~/components/Svgs';
import useChat from '~/hooks/useChat';

const ChatWindow = (): JSX.Element => {
  const {
    questions,
    setQuestions,
    answers,
  } = useChat();
  const [prompt, setPrompt] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuestions((prevState) => [...prevState, prompt]);
    setPrompt('');
  };

  const renderedMessages = useMemo(() => {
    const elements: JSX.Element[] = [];
    for (let index = questions.length - 1; index >= 0; index -= 1) {
      const hasAnswer = Boolean(answers[index]);

      elements.push(
        <>
          {hasAnswer && <ChatMessage text={answers[index]} type="answer" />}
          <ChatMessage text={questions[index]} type="question" className={index === questions.length ? 'mt-auto' : ''} />
        </>,
      );
    }

    return elements;
  }, [questions, answers]);

  return (
    <div className="grow w-full flex items-end justify-between min-h-0">
      <SideBar />
      <div className="h-full bg-ui-darkGrey rounded-xl grow flex flex-col justify-end items-center overflow-hidden relative">
        <ul className="grow h-full w-full flex flex-col-reverse overflow-y-auto">
          {renderedMessages}
        </ul>
        <form
          onSubmit={onSubmit}
          className="py-5 px-4 w-full bg-white flex items-center justify-center"
        >
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
            value={prompt}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2.5 bg-brand-normal rounded-md"
          >
            <SendIcon className="mr-2" />
            <span className="text-white font-medium text-base">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
