import "./Index.css";
import Bloc1 from "./components/Bloc1";
import Bloc2 from "./components/Bloc2";
import Banner from "./components/Banner";

export default function App() {
  return (
    <div className="bg-cream">
      <Banner />
      <Bloc1 />
      <span className="border-t border-gray-400 my-6 block mx-auto w-80" />
      <Bloc2 />
    </div>
  );
}
