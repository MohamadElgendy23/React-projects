import QuizQuestions from "./QuizQuestions";

//the first question page of the quiz app. contains the answers choices for the first question (that users can select) as well as the actual question.
export default function FirstQuestionPage({ name, topic }) {
  return <h1 id="Question1">{QuizQuestions[0][0].question}</h1>;
}
