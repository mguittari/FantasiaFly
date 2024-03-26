import Layout from "./components/layout/Layout";
import "./App.css";
import AvantageFly from "./components/avantageFly/AvantageFly";

function App() {
  return (
    <Layout>
      <main className="min-h-[calc(100vh-160px)]" />
      <AvantageFly />
    </Layout>
  );
}

export default App;
