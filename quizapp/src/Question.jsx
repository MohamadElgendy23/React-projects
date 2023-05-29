import { useState } from "react";

//this component represents each question in the UI. A question is formatted as such: question -> answer choices -> quit button and next

export default function Question({ questionObj }) {
  const [score, setScore] = useState(""); //keeps track of the score out of 4 (4 questions) for each topic.
  //when user selects an answer out of the possible answers
  function handleAnswerSelect(event) {
    if (
      event.target.value ===
      Questions[mapTopicToIndices(Category)][ID - 1].answer
    ) {
      return "Correct";
    }
    return "Wrong";
  }

  return (
    <div className="QuestionForm">
      <h1>Question {questionObj.id}:</h1>
      <p>{questionObj.question}</p>
      {questionObj.answerChoices.map((answerChoice, index) => {
        return (
          <button key={index} onClick={handleAnswerSelect}>
            {answerChoice}
          </button>
        );
      })}
    </div>
  );
}
