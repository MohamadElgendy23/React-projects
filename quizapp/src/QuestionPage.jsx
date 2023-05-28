import QuizQuestions from "./QuizQuestions";
import { useState } from "react";
import { useParams } from "react-router-dom";

//the question page of the quiz app. contains the answers choices for the question (that users can select) as well as the actual question. this page loads based on the id of the question and what kind of topic (clean page reuse)
export default function QuestionPage({ Questions }) {
  const [score, setScore] = useState(""); //keeps track of the score out of 4 (4 questions) for each topic.
  const [category, id] = useParams(); //gets params from params passed into the path (format is :category and :id)

  return (
    <>
      <h1 id="QuizApp">Welcome to the Quiz App!</h1>
      <label className="WelcomeName">Mohamad Elgendy</label>
      <h1 id="SelectedTopic">Topic: {topic} </h1>
      <h1 id="Score">Score: {score}</h1>
      <form
        onSubmit={setScore((currentScore) => {
          if (e.target.value === QuizQuestions[0][0].answer) {
            currentScore++;
          }
        })}
        className="FirstQuestionForm"
      ></form>
    </>
  );
}
