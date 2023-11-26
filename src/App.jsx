import "./App.css";
import bg from "./assets/hero_img.jpg";
import TranslateContainer from "./components/TranslateContainer";

function App() {
  return (
    <div className="flex h-full mb-[100px]">
      <div className="w-full">
        <img src={bg} alt="hero pic" className="w-full" />
      </div>
      <TranslateContainer />
    </div>
  );
}

export default App;
