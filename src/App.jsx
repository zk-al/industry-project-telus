// import "./App.scss";
// <<<<<<< feature-modal
// import Modal from "./components/Modal/Modal";

// function App() {
//   return <div className="App">
//     <Modal />
//   </div>;
// =======
// import Header from "./components/Header/Header";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import StreamingPartners from "./components/StreamingService/StreamingService";
// import ThemePacks from "./components/ThemePacks/ThemePacks";
// import TvChannels from "./components/tvchannels/tvchannels";

// function App() {
//   return (
//     <div className="App">
//         <BrowserRouter>
//             <Header />
//             <StreamingPartners />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/streaming" element={<StreamingPartners />}/>
//                 <Route path="/theme-packs" element={<ThemePacks />}/>
//                 <Route path="/tv" />
//             </Routes>
//         </BrowserRouter>
  



//   </div>
//   );
// >>>>>>> develop
// }

// export default App;

import "./App.scss";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StreamingPartners from "./components/StreamingService/StreamingService";
import ThemePacks from "./components/ThemePacks/ThemePacks";
import TvChannels from "./components/tvchannels/tvchannels";

function App() {
  return (
    <div className="App">
      <Modal />
      <BrowserRouter>
        <Header />
        <StreamingPartners />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/streaming" element={<StreamingPartners />} />
          <Route path="/theme-packs" element={<ThemePacks />} />
          <Route path="/tv" element={<TvChannels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;