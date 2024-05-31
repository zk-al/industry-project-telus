import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StreamingPartners from "./components/StreamingService/StreamingService";
import PriceCalc from "./components/PriceCalc/PriceCalc";
import ThemePacks from "./components/ThemePacks/ThemePacks";
import TvChannels from "./components/tvchannels/tvchannels";

function App() {
  /* --------------------------- STREAMING SERVICES --------------------------- */
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

  /* ------------------------------- THEME PACKS ------------------------------ */
  const [selectedPacks, setSelectedPacks] = useState([]);
  const [tpTotalPrice, setTpTotalPrice] = useState(0);

  const handleSelectPack = (pack) => {
    let updatedSelectedPacks;
    if (selectedPacks.includes(pack)) {
      updatedSelectedPacks = selectedPacks.filter((p) => p.id !== pack.id);
    } else {
      updatedSelectedPacks = [...selectedPacks, pack];
    }
    setSelectedPacks(updatedSelectedPacks);

    const total = updatedSelectedPacks.reduce(
      (sum, p) => sum + parseFloat(p.pricing.slice(1)),
      0
    );
    setTpTotalPrice(total.toFixed(2));
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
          <Route
            path="/streaming"
            element={
              <StreamingPartners
                selectedPartners={selectedPartners}
                handleSelectPartner={handleSelectPartner}
                spTotalPrice={spTotalPrice}
              />
            }
          />
          <Route path="/tv" />
          <Route
            path="/theme-packs"
            element={
              <ThemePacks
                selectedPacks={selectedPacks}
                handleSelectPack={handleSelectPack}
                tpTotalPrice={tpTotalPrice}
              />
            }
          />
        </Routes>
        <PriceCalc
          selectedPartners={selectedPartners}
          // handleSelectPartner={handleSelectPartner}
          spTotalPrice={spTotalPrice}
          selectedPacks={selectedPacks}
          // handleSelectPack={handleSelectPack}
          tpTotalPrice={tpTotalPrice}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
