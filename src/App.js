import Portfolio from "./pages/portfolio/Portfolio";
import RickAndMorty from "./pages/rickadnmorty/RickAndMorty";
import Createx from "./pages/createx/Createx";

import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/rick/*" element={<RickAndMorty />} />
                    <Route path="/createx" element={<Createx />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
