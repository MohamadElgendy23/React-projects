export default function StartQuizPage() {
  return (
    <>
      <h1 id="QuizApp">Welcome to the Quiz App!</h1>
      <img src="https://www.icomedia.eu/wp-content/uploads/2017/06/Its-Quiz-Time-Logo.png"></img>
      <form className="StartQuizForm">
        <h1>Quiz Settings</h1>
        <br></br>
        <input id="EnterName" type="text" placeholder="Enter Your Name"></input>
        <br></br>
        <br></br>
        <select id="Topic">
          <option>Select Quiz Topic</option>
          <option>Computer Science</option>
          <option>Math</option>
          <option>Geography</option>
        </select>
      </form>
    </>
  );
}
