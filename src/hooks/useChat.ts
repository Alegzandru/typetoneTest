import { useEffect, useMemo, useState } from 'react';

const API_KEY = import.meta.env.VITE_OPENAI_KEY;

const useChat = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);

  const promptApi = useMemo(() => {
    let text = '';
    questions.forEach((question, index) => {
      text += `${index === 0 ? '' : ' '}Human: ${question}`;
      if (answers[index]) {
        text += ` AI: ${answers[index]}`;
      }
    });
    return text;
  }, [questions, answers]);

  const requestBody = {
    model: 'text-davinci-003',
    prompt: promptApi,
    temperature: 0.9,
    max_tokens: 1500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [' Human:', ' AI:'],
  };

  const callApi = async () => {
    const apiResponseRaw = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    const apiResponse = await apiResponseRaw.json();

    setAnswers((prevState) => [...prevState, apiResponse?.choices?.[0]?.text || '']);
  };

  useEffect(() => {
    if (questions.length) {
      callApi();
    }
  }, [questions]);

  return {
    questions,
    setQuestions,
    answers,
  };
};

export default useChat;
