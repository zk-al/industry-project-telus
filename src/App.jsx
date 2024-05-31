import "./App.scss";
import PriceCalc from "./components/PriceCalc/PriceCalc";

import footerImage from "./assets/images/telus-footer.png";

function App() {
  return (
    <div className="App">
      <PriceCalc />
      <img src={footerImage} alt="Image of the Telus Footer" />
    </div>
  );
}

export default App;
