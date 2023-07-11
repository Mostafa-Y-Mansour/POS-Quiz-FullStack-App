import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Button from "./components/Button";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [name, setName] = useState<string>("");
  const [outlet, setOutlet] = useState<string>("welcome");
  const [index, setIndex] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  // this state will be used to set its value to none every time we have a new question
  const [isCorrect, setIsCorrect] = useState<boolean | string>("none");

  // these functions will run when clicking on button
  // go to quiz
  const startHandler = (): void => {
    setOutlet("quiz");
  };

  //  change the quiz question on click
  const nextHandler = (): void => {
    if (index < 9) {
      setIndex(index + 1);
    } else {
      console.log("stop");
    }
  };

  // see result page
  const resultHandler = (): void => {
    setOutlet("result");
  };

  // run the functions on clicking on the button based on the state of the app
  const onClickHandler = (): void => {
    // reset the value to none
    setIsCorrect("none");
    if (outlet === "welcome") {
      return startHandler();
    } else if (outlet === "quiz" && index < 9) {
      return nextHandler();
    } else if (index >= 9) {
      return resultHandler();
    }
  };

  // change page based on outlet value
  const outLetData = () => {
    if (outlet === "welcome") {
      return <Welcome name={name} setName={setName} />;
    } else if (outlet === "quiz") {
      return (
        <Quiz
          isCorrect={isCorrect}
          setIsCorrect={setIsCorrect}
          index={index}
          correctAnswer={correctAnswer}
          setCorrectAnswer={setCorrectAnswer}
        />
      );
    } else if (outlet === "result") {
      return <Result name={name} correctAnswer={correctAnswer} />;
    }
  };

  return (
    <div className="App">
      <div className="box">
        {outLetData()}
        <Button
          // pass function and conditions to Button component
          // check if the user entered his name
          disabled={name === ""}
          // hide the button when showing the result
          display={outlet === "result"}
          onClick={onClickHandler}
          className="btn"
          type={index >= 9 ? "result" : "next"}
        >
          {index >= 9 ? "result" : "next"}
        </Button>
      </div>
    </div>
  );
}

export default App;
