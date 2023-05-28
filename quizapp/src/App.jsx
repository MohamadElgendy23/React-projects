import "./styles.css";
import StartQuizPage from "./StartQuizPage.jsx";
import { Routes, Route } from "react-router-dom";
import FirstQuestionPage from "./FirstQuestionPage";

//App component for the Quiz App. Sets up the routes for page navigation.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartQuizPage />} />
      <Route path="firstquestion" element={<FirstQuestionPage />} />
    </Routes>
  );
}
