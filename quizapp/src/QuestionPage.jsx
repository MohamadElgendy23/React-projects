import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Question from "./Question";

//the question page of the quiz app. contains the User information and selected information as well as the question (from question.jsx)
export default function QuestionPage({ Questions }) {
  const { category } = useParams(); //gets params fromparams passed into the path (format is :name && :category)
  const [score, setScore] = useState(0); //keeps track of the score out of 4 (4 questions) for each topic.
  const [index, setIndex] = useState(0); //keeps track of the index (question index in the array) (index: 0-3)

  const navigate = useNavigate(); //used for navigating to the start quiz page

  const name = localStorage.getItem("firstandlastname") ?? "";

  //maps topic/category to indices (topic indices) for easy array mapping
  const mapTopicToIndices = (topic) => {
    switch (topic) {
      case "Computer Science":
        return 0;
      case "Math":
        return 1;
      case "Geography":
        return 2;
    }
  };

  //when user selects an answer out of the possible answers
  const handleAnswerSelect = (event) => {
    //answer choice is the right answer
    if (event.target.innerHTML === questionObj.answer) {
      setScore((score) => score + 1);
    }
    setIndex((index) => index + 1);
  };

  let questionObj = Questions[mapTopicToIndices(category)][index]; //each question (each object inside a topic array)

  //show score output page if user answers all questions (questionObj is undefined). final score in %.
  if (!questionObj) {
    let scorePercentage = "";
    scorePercentage =
      (
        (score / Questions[mapTopicToIndices(category)].length) *
        100
      ).toString() + "%";

    return (
      <div className="FinishQuizOutputContainer">
        <h1>Game over! Your score is: {scorePercentage}</h1>
        <button onClick={() => navigate("/")}>Start Another Quiz!</button>
      </div>
    );
  }

  return (
    <div className="QuestionPageContainer">
      <h1 id="WelcomeQuizApp">Welcome to the Quiz App!</h1>
      <label className="WelcomeName">{name}</label>
      <h1 id="SelectedTopic">Topic: {category} </h1>
      <h1 id="Score">Score: {score} </h1>
      <Question
        questionObj={questionObj}
        handleAnswerSelect={handleAnswerSelect}
      />
    </div>
  );
}
