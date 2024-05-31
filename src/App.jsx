import "./App.scss";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
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

  /* ------------------------------- TV CHANNELS ------------------------------ */
  const [selectedChannel, setSelectedChannel] = useState([]);
  const [scTotalPrice, setScTotalPrice] = useState(0);

  const handleSelectedChannel = (channel) => {
    let updatedChannels;
    if (selectedChannel.includes(channel)) {
      updatedChannels = selectedChannel.filter(
        (c) => channel.id !== channel.id
      );
    } else {
      updatedChannels = [...selectedChannel, channel];
    }

    setSelectedChannel(updatedChannels);

    const total = updatedChannels.reduce(
      (sum, c) => sum + parseFloat(c.price.slice(1)),
      0
    );
    setScTotalPrice(total.toFixed(2));
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
        <ThemePacks
          selectedPacks={selectedPacks}
          handleSelectPack={handleSelectPack}
          tpTotalPrice={tpTotalPrice}
        />
          <TvChannels
          selectedChannel={selectedChannel}
          handleSelectedChannel={handleSelectedChannel}
          scTotalPrice={scTotalPrice}
        />
        <PriceCalc
          spTotalPrice={spTotalPrice}
          tpTotalPrice={tpTotalPrice}
          scTotalPrice={scTotalPrice}
        />
        <Modal />
      </BrowserRouter>
    </div>
  );
}

export default App;
