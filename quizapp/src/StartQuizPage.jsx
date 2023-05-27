import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//this component contains the start page (front page) for the quiz app
export default function StartQuizPage() {
  const [name, setName] = useState("Enter Your Name"); //for the user's inputted name
  const [topic, setTopic] = useState(""); //for the user's selected quiz topic

  const navigate = useNavigate(); //used for navigating between pages

  return (
    <>
      <h1 id="QuizApp">Welcome to the Quiz App!</h1>
      <img src="https://www.icomedia.eu/wp-content/uploads/2017/06/Its-Quiz-Time-Logo.png"></img>
      <form onSubmit={() => navigate("/questions")} className="StartQuizForm">
        <h1>Quiz Settings</h1>
        <br></br>
        <input
          id="EnterName"
          type="text"
          value={name}
          onClick={(e) => (e.target.value = "")}
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
