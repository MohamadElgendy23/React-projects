import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizQuestions from "./QuizQuestions";

//this component contains the start page (front page) for the quiz app
export default function StartQuizPage() {
  const [name, setName] = useState(
    localStorage.getItem("firstandlastname") ?? ""
  ); //for the user's inputted name
  const [topic, setTopic] = useState(""); //for the user's selected quiz topic
  const navigate = useNavigate(); //used for navigating between pages

  //saves the name in local storage and then navigates to the question page.
  const handleQuizStart = () => {
    localStorage.setItem("firstandlastname", name);
    navigate(`quizquestions/${topic}`);
  };

  return (
    <div className="QuizAppContainer">
      <h1 id="WelcomeQuizApp">Welcome to the Quiz App!</h1>
      <img
        src="https://www.icomedia.eu/wp-content/uploads/2017/06/Its-Quiz-Time-Logo.png"
        loading="lazy"
      ></img>
      <form onSubmit={handleQuizStart} className="StartQuizForm">
        <h1 id="QuizSettings">Quiz Settings</h1>
        <br></br>
        <input
          id="EnterName"
          type="text"
          value={name}
          placeholder="Enter First and Last Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <select
          id="Topic"
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        >
          <option>Select Quiz Topic</option>
          {Object.keys(QuizQuestions).map((key) => {
            return <option>{key}</option>;
          })}
        </select>
        <br></br>
        <br></br>
        <br></br>
        <button id="Submit" disabled={(!topic || !name) && true}>
          Start Quiz!
        </button>
      </form>
    </div>
  );
}
