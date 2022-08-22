import "./App.css";
import BestSalads from "./components/BestSalads/BestSalads";
import HeroSection from "./components/HeroSection/HeroSection";
import HomePage from "./components/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <HeroSection />
      <BestSalads />
    </div>
  );
}

export default App;
