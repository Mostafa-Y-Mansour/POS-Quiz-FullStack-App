import React from "react";
import "./Choice.css";

type ChoiceProps = {
  children: string;
  option: string;
  pos: string;
  correctAnswer: number;
  setCorrectAnswer: React.Dispatch<React.SetStateAction<number>>;
  disabled: boolean;
  isCorrect: boolean | string;
  setIsCorrect: React.Dispatch<React.SetStateAction<string | boolean>>;
};

export default function Choice({
  children,
  option,
  pos,
  correctAnswer,
  setCorrectAnswer,
  disabled,
  isCorrect,
  setIsCorrect,
}: ChoiceProps) {
  return (
    <button
      disabled={isCorrect === "none" || !disabled ? false : true}
      onClick={(): void => {
        // if the answer is correct set the count of correct answers + 10
        if (pos === option && isCorrect === "none") {
          setCorrectAnswer(correctAnswer + 10);
          setIsCorrect(true);
        } else {
          setIsCorrect(false);
        }
      }}
      className={`Choice btn-shine ${
        pos === option && (isCorrect === true || isCorrect === false)
          ? "focus correct"
          : pos !== option && (isCorrect === true || isCorrect === false)
          ? "disabled not-correct"
          : ""
      }`}
    >
      <span>{children}</span>
    </button>
  );
}
