import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Question from "./Question";
import ScoreOutputPage from "./ScoreOutputPage";

const STARTTIME = 5; //what second timer starts at
//the question page of the quiz app. contains the User information and selected information as well as the question (from question.jsx)
export default function QuestionPage({ Questions }) {
  const { category } = useParams(); //gets params fromparams passed into the path (format is :name && :category)
  const [score, setScore] = useState(0); //keeps track of the score out of 4 (4 questions) for each topic.
  const [index, setIndex] = useState(0); //keeps track of the index (question index in the array) (index: 0-3)
  const [time, setTime] = useState(STARTTIME); //STARTTIME seconds to answer each question

  const name = localStorage.getItem("firstandlastname") ?? "";
  //timer logic
  let intervalID = useRef(null); //for the specified timer interval, used for clearing intervals when needed.
  let timeRemaining = useRef(STARTTIME); //represents the time remaining for each "state"

  //timer logic
  useEffect(() => {
    setTime(STARTTIME);
    timeRemaining.current = STARTTIME;
    intervalID.current = setInterval(() => {
      if (timeRemaining.current === 0) {
        setIndex((index) => index + 1);
        return; //go to clear interval
      }
      timeRemaining.current--;
      setTime(timeRemaining.current);
    }, 1000);
    //clear timer interval when returned (hook cleanup). runs before above code so that it clears the previous interval
    return () => {
      clearInterval(intervalID.current);
    };
  }, [index]);

  //when user selects an answer out of the possible answers
  const handleAnswerSelect = (event) => {
    //answer choice is the right answer
    if (event.target.innerHTML === questionObj.answer) {
      setScore((score) => score + 1);
    }
    setIndex((index) => index + 1);
  };

  let questionObj = Questions[category][index]; //each question (each object inside a topic array)

  //show score output page if user answers all questions (questionObj is undefined). final score is % based out of 100%.
  if (!questionObj) {
    const scorePercentage =
      ((score / Questions[category].length) * 100).toString() + "%";
    return <ScoreOutputPage scorePercentage={scorePercentage} />;
  }
  return (
    <div className="QuestionPageContainer">
      <h1 id="WelcomeQuizApp">Welcome to the Quiz App!</h1>
      <label className="WelcomeName">{name}</label>
      <h1 id="SelectedTopic">Topic: {category} </h1>
      <h1 id="TimeLeft">Time Left: {time} seconds</h1>
      <h1 id="Score">Score: {score}</h1>
      <Question
        questionObj={questionObj}
        handleAnswerSelect={handleAnswerSelect}
      />
    </div>
  );
}
