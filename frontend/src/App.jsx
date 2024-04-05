import "./App.css";
import AvantageFly from "./components/avantageFly/AvantageFly";
import QuestionsFreq from "./components/questionsFreq/QuestionsFreq";
import NewsLetter from "./components/newsLetter/NewsLetter";

function App() {
  return (
    <div>
      <main className="min-h-[calc(100vh-160px)] bg-cream" />
      <AvantageFly />
      <QuestionsFreq />
      <NewsLetter />
    </div>
  );
}

export default App;
