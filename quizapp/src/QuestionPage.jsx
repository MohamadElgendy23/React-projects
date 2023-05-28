import { useState } from "react";
import { useParams } from "react-router-dom";
import Question from "./Question";

//the question page of the quiz app. contains the User information and selected information as well as the question (from question.jsx)
export default function QuestionPage({ Questions }) {
  const [score, setScore] = useState(""); //keeps track of the score out of 4 (4 questions) for each topic.
  const [category, id] = useParams(); //gets params from params passed into the path (format is :category)
  return (
    <>
      <h1 id="QuizApp">Welcome to the Quiz App!</h1>
      <label className="WelcomeName">Mohamad Elgendy</label>
      <h1 id="SelectedTopic">Topic: {category} </h1>
      <h1 id="Score">Score: {score}</h1>
      <Question Questions={Questions} Category={category} />
    </>
  );
}
