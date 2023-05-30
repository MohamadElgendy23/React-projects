//this component represents each question in the UI. A question is formatted as such: question -> answer choices -> quit button and next

export default function Question({ questionObj, handleAnswerSelect }) {
  return (
    <div className="QuestionFormContainer">
      <h1>Question {questionObj.id}:</h1>
      <p>{questionObj.question}</p>
      {questionObj.answerChoices.map((answerChoice, index) => {
        return (
          <button
            key={index}
            className="answerchoicesbuttons"
            onClick={handleAnswerSelect}
          >
            {answerChoice}
          </button>
        );
      })}
    </div>
  );
}
