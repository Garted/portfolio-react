import Portfolio from "./pages/portfolio/Portfolio";
import RickAndMorty from "./pages/rickadnmorty/RickAndMorty";
import Createx from "./pages/createx/Createx";
import Arrowflicks from "./pages/arrowflicks/Arrowflicks";
import Page40 from "./pages/asdd/Pag4";
import { useEffect } from "react";

import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    useEffect(() => {
        if (!localStorage.getItem("localData")) {
            localStorage.setItem("localData", JSON.stringify([]));
        }
    }, []);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/rick/*" element={<RickAndMorty />} />
                    <Route path="/createx" element={<Createx />} />
                    <Route path="/arrowflicks/*" element={<Arrowflicks />} />

                    <Route path="*" element={<Page40 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
