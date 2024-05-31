import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StreamingPartners from "./components/StreamingService/StreamingService";
import PriceCalc from "./components/PriceCalc/PriceCalc";

function App() {
  const [selectedPartners, setSelectedPartners] = useState([]);
  const [spTotalPrice, setSpTotalPrice] = useState(0);

  const handleSelectPartner = (partner) => {
    let updatedSelectedPartners;
    if (selectedPartners.includes(partner)) {
      updatedSelectedPartners = selectedPartners.filter(
        (p) => p.id !== partner.id
      );
    } else {
      updatedSelectedPartners = [...selectedPartners, partner];
    }
    setSelectedPartners(updatedSelectedPartners);

    const total = updatedSelectedPartners.reduce(
      (sum, p) => sum + parseFloat(p.pricing.slice(1)),
      0
    );
    setSpTotalPrice(total.toFixed(2));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <StreamingPartners
          selectedPartners={selectedPartners}
          handleSelectPartner={handleSelectPartner}
          spTotalPrice={spTotalPrice}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/streaming" element={<StreamingPartners />} />
          <Route path="/tv" />
          <Route path="/theme-packs" />
        </Routes>
        <PriceCalc
          selectedPartners={selectedPartners}
          handleSelectPartner={handleSelectPartner}
          spTotalPrice={spTotalPrice}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
