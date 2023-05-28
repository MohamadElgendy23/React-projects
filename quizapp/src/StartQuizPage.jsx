import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizQuestions from "./QuizQuestions";

//this component contains the start page (front page) for the quiz app
export default function StartQuizPage() {
  const [name, setName] = useState(""); //for the user's inputted name
  const [topic, setTopic] = useState(""); //for the user's selected quiz topic

  const navigate = useNavigate(); //used for navigating between pages

  //navigates to a specific question page based on the category (topic) and id (question 1-4) => path="quizquestions/:category/:id"
  /* function navigateToQuestionPage(theName, theTopic) {
    if (theTopic === "Computer Science") {
      navigate(`quizquestions/${QuizQuestions[0]}/${QuizQuestions[0][0].id}`);
    } else if (theTopic === "Math") {
      navigate(`quizquestions/${QuizQuestions[1]}/${QuizQuestions[1][0].id}`);
    } else {
      navigate(`quizquestions/${QuizQuestions[2]}/${QuizQuestions[2][0].id}`);
    }
  }
 */
  return (
    <>
      <h1 id="QuizApp">Welcome to the Quiz App!</h1>
      <img
        src="https://www.icomedia.eu/wp-content/uploads/2017/06/Its-Quiz-Time-Logo.png"
        loading="lazy"
      ></img>
      <form
        //onSubmit={navigateToQuestionPage(name, topic)}
        className="StartQuizForm"
      >
        <h1>Quiz Settings</h1>
        <br></br>
        <input
          id="EnterName"
          type="text"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <select id="Topic" onChange={(e) => setTopic(e.target.value)}>
          <option>Select Quiz Topic</option>
          <option>Computer Science</option>
          <option>Math</option>
          <option>Geography</option>
        </select>
        <br></br>
        <br></br>
        <br></br>
        <button id="Submit">Start Quiz!</button>
      </form>
    </>
  );
}
