import "./App.css";
import bg from "./assets/hero_img.jpg";
import TranslateContainer from "./components/TranslateContainer";

function App() {
  return (
    <div className="flex h-full pb-[100px]">
      <div className="w-full">
        <img src={bg} alt="hero pic" className="w-full" />
      </div>
      {/* transalte component */}
      <TranslateContainer />
    </div>
  );
}

export default App;
