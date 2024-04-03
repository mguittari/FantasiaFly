import Layout from "./components/layout/Layout";
import "./App.css";
import AvantageFly from "./components/avantageFly/AvantageFly";
import QuestionsFreq from "./components/questionsFreq/QuestionsFreq";

function App() {
  return (
    <Layout>
      <main className="min-h-[calc(100vh-160px)] bg-cream" />
      <AvantageFly />
      <div className=" ">
        <QuestionsFreq />
      </div>
    </Layout>
  );
}

export default App;
