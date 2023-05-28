import QuizQuestions from "./QuizQuestions";
import { useState } from "react";

//the first question page of the quiz app. contains the answers choices for the first question (that users can select) as well as the actual question.
export default function FirstQuestionPage({ name, topic }) {
  const [score, setScore] = useState(""); //keeps track of the score out of 4 (4 questions) for each topic.
  return (
    <>
      <h1 id="QuizApp">Welcome to the Quiz App!</h1>
      <label className="WelcomeName">Mohamad Elgendy</label>
      <h1 id="Topic">Topic: {topic} </h1>
      <h1 id="Score">Score: </h1>
    </>
  );
}
