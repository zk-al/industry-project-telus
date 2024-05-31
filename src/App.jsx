import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" />
                <Route path="/streaming" />
                <Route path="/tv" />
                <Route path="/theme-packs" />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
