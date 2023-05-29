import { useState } from "react";

//this component represents each question in the UI. A question is formatted as such: question -> answer choices -> quit button and next

export default function Question({ Questions, Category, ID }) {
  const [score, setScore] = useState(""); //keeps track of the score out of 4 (4 questions) for each topic.
  const [color, setColor] = useState("");

  const mapTopicToIndices = (topic) => {
    //maps topic/category to indices for easy array mapping
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
    <form className="QuestionForm" onSubmit={handleAnswerSelect}>
      <h1>Question {ID}:</h1>
      <p>{Questions[mapTopicToIndices(Category)][ID - 1].question}</p>
      {Questions.filter((question) => question[ID - 1].id === ID).map(
        (question) => {
          return <button>{question[ID - 1].answerChoices[key - 1]}</button>;
        }
      )}
    </form>
  );
}
