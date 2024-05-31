import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StreamingPartners from "./components/StreamingService/StreamingService";
import PriceCalc from "./components/PriceCalc/PriceCalc";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <StreamingPartners />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/streaming" element={<StreamingPartners />} />
          <Route path="/tv" />
          <Route path="/theme-packs" />
        </Routes>
        <PriceCalc />
      </BrowserRouter>
    </div>
  );
}

export default App;
