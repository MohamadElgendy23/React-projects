import "./styles.css";
import StartQuizPage from "./StartQuizPage.jsx";
import { Routes, Route } from "react-router-dom";
import Questions from "./Questions.jsx";

//App component for the Quiz App. Renders out the start page.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartQuizPage />} />
      <Route path="questions" element={<Questions />} />
    </Routes>
  );
}
