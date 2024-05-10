import "./createx.scss";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import VideoBlock from "./components/VideoBlock/VideoBlock";
import Values from "./components/Values/Values";
import Request from "./components/Request/Request";
import Services from "./components/Servic/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Clients from "./components/Clients/Clients";
import Figures from "./components/Figures/Figures";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="createx">
            <Header />
            <Hero />
            <VideoBlock />
            <Values />
            <Request />
            <Services />
            <Portfolio />
            <Clients />
            <Figures />
            <News />
            <Footer />
        </div>
    );
};

export default App;
