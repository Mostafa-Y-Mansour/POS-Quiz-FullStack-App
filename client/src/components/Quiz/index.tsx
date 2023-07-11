import React, { useEffect, useState } from "react";
import Choice from "../Choice";
import "./Quiz.css";
import axios from "axios";

type QuizProps = {
  index: number;
  correctAnswer: number;
  setCorrectAnswer: React.Dispatch<React.SetStateAction<number>>;
  isCorrect: boolean | string;
  setIsCorrect: React.Dispatch<React.SetStateAction<string | boolean>>;
};

type wordObj = {
  id: number;
  word: string;
  pos: string;
};

export default function Quiz({
  index,
  correctAnswer,
  setCorrectAnswer,
  isCorrect,
  setIsCorrect,
}: QuizProps) {
  const [wordsList, setWordsList] = useState<wordObj[]>([] as wordObj[]);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const options: string[] = ["verb", "noun", "adjective", " adverb"];

  const onChoiceClick = (): void => {
    setIsDisabled(true);
  };

  useEffect(() => {
    const getWords = async () => {
      try {
        const res = await axios.get("/api/wordlist");
        const data = res.data;
        setWordsList(data);
        console.log(data);
      } catch (err) {
        console.error("Words Error", err);
      }
    };

    getWords();
  }, []);

  return (
    <main className="Quiz">
      <div className="progress">
        <div className="bar">
          {/* change the bar state based on the question number */}
          <span style={{ width: `${(index + 1) * 10}%` }}></span>
        </div>
        <span>{(index + 1) * 10}%</span>
      </div>

      <h2>What type of "{wordsList[index]?.word}" ?</h2>
      <div
        className="options"
        key={wordsList[index]?.id}
        onClick={onChoiceClick}
      >
        {options.map((option) => {
          return (
            <Choice
              isCorrect={isCorrect}
              setIsCorrect={setIsCorrect}
              correctAnswer={correctAnswer}
              setCorrectAnswer={setCorrectAnswer}
              pos={wordsList[index]?.pos}
              option={option}
              key={index + option + wordsList[index]?.word}
              disabled={isDisabled}
            >
              {option}
            </Choice>
          );
        })}
      </div>
    </main>
  );
}
