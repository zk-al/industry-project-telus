import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/streaming" />
                <Route path="/tv" />
                <Route path="/theme-packs" />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
