//this component represents each question in the UI. A question is formatted as such: question -> answer choices -> quit button and next

export default function Question({ questionObj, handleAnswerSelect }) {
  return (
    <div className="QuestionForm">
      {questionObj === null && <h1 id="finishedquiz">No more questions!</h1>}
      <h1>Question {questionObj.id}:</h1>
      <p>{questionObj.question}</p>
      {questionObj.answerChoices.map((answerChoice, index) => {
        return (
          <button
            className="answerchoicesbuttons"
            key={index}
            onClick={handleAnswerSelect}
          >
            {answerChoice}
          </button>
        );
      })}
    </div>
  );
}
