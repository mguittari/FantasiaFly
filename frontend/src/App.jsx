import Layout from "./components/layout/Layout";
import "./App.css";
import AvantageFly from "./components/avantageFly/AvantageFly";
import QuestionsFreq from "./components/questionsFreq/QuestionsFreq";
import NewsLetter from "./components/newsLetter/NewsLetter";

function App() {
  return (
    <Layout>
      <main className="min-h-[calc(100vh-160px)] bg-cream" />
      <AvantageFly />

      <QuestionsFreq />
      <NewsLetter />
    </Layout>
  );
}

export default App;
