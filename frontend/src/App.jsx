import "./Index.css";
import { useContext, useEffect } from "react";

import { UserContext } from "./context/userContext";
import AvantageFly from "./components/avantageFly/AvantageFly";
import QuestionsFreq from "./components/questionsFreq/QuestionsFreq";
import NewsLetter from "./components/newsLetter/NewsLetter";

import Banner from "./components/Banner";
import Bloc1 from "./components/Bloc1";
import Bloc2 from "./components/Bloc2";

export default function App() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:3310/api/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setUser(res);
      })
      .catch((err) => console.info(err));
  }, [setUser]);

  return (
    <div>
      <main className="min-h-[calc(100vh-160px)] bg-cream" />

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
