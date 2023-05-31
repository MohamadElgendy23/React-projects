export default function ScoreOutputPage () {

    //show score output page if user answers all questions (questionObj is undefined). final score is % based out of 100%.
  if (!questionObj) {
    let scorePercentage = "";
    scorePercentage =
      (
        (score / Questions[mapTopicToIndices(category)].length) *
        100
      ).toString() + "%";
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
    return (

    );
}