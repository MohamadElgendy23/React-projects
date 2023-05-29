import "./styles.css";
import StartQuizPage from "./StartQuizPage.jsx";
import { Routes, Route } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import QuizQuestions from "./QuizQuestions";
import GameOverPage from "./GameOverPage";
//App component for the Quiz App. Sets up the routes for page navigation.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartQuizPage />} />
      <Route
        path="quizquestions/:name/:category"
        element={<QuestionPage Questions={QuizQuestions} />}
      />
      <Route path="/gameover" element={<GameOverPage />} />
    </Routes>
  );
}
