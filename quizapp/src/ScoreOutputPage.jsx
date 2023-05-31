import confetti from "./Confetti";
import { useNavigate } from "react-router-dom";

export default function ScoreOutputPage({
  Questions,
  mapTopicToIndices,
  score,
  category,
}) {
  const navigate = useNavigate(); //used to navigate page
  let scorePercentage = "";
  scorePercentage =
    ((score / Questions[mapTopicToIndices(category)].length) * 100).toString() +
    "%";
  let imageSrc = "";
  //congratulate user for getting all the questions right, also use confetti effect from imported confetti class
  if (scorePercentage === "100%") {
    imageSrc =
      "http://www.desicomments.com/wp-content/uploads/2017/02/Lovely-Image-Of-Congratulations.jpg";
    confetti.start();
  } else {
    imageSrc =
      "https://sd.keepcalm-o-matic.co.uk/i/keep-calm-it-s-the-end-of-the-quiz.png";
  }

  return (
    <div className="FinishQuizOutputContainer">
      <img src={imageSrc} loading="lazy"></img>
      <h1>Quiz over! Your score is: {scorePercentage}</h1>
      <button
        onClick={() => {
          confetti.remove();
          navigate("/");
        }}
      >
        Start Another Quiz!
      </button>
    </div>
  );
}
