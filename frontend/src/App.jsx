import "./Index.css";

import AvantageFly from "./components/avantageFly/AvantageFly";
import NewsLetter from "./components/newsLetter/NewsLetter";
import QuestionsFreq from "./components/questionsFreq/QuestionsFreq";

import Banner from "./components/Banner";
import Bloc1 from "./components/Bloc1";
import Bloc2 from "./components/Bloc2";
import Welcome from "./components/welcome/Welcome";

export default function App() {
  return (
    <div>
      <main className="  bg-cream" />
      <Welcome />
      <Banner />
      <Bloc1 />
      <span className="border-t border-gray-400 my-6 block mx-auto w-80" />
      <Bloc2 />
      <AvantageFly />
      <QuestionsFreq />
      <NewsLetter />
    </div>
  );
}
