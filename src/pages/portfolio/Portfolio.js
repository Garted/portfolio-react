import "./portfolio.scss";
import Header from "./comonents/Header/Header";
import Promo from "./comonents/Promo/Promo";
import About from "./comonents/About/About";
import Stack from "./comonents/Stack/Stack";
import Works from "./comonents/Works/Works";
import Footer from "./comonents/Footer/Footer";
import Form from "./comonents/Form/Form";

import { useEffect, useState } from "react";

const Portfolio = () => {
    const [showForm, setShowForm] = useState(false);

    const [scrollValue, setScrollValue] = useState({
        count: 0,
        status: false,
    });

    useEffect(() => {
        window.scrollTo(0, scrollValue.count);
    }, [showForm]);

    console.log(scrollValue);
    const disable = {
        overflowY: "hidden",
        position: "fixed",
        top: `-${scrollValue.count}px`,
        width: `calc(100% - 17px)`,
    };
    console.log("render");
    return (
        <div
            style={
                scrollValue.status
                    ? disable
                    : { position: "relative", top: "auto" }
            }
            className="port"
        >
            <Header />
            <Promo />
            <About />
            <Stack />
            <Works />
            <Footer
                showForm={showForm}
                setShowForm={setShowForm}
                setScrollValue={setScrollValue}
            />
            <Form
                showForm={showForm}
                setShowForm={setShowForm}
                scrollValue={scrollValue}
                setScrollValue={setScrollValue}
            />
        </div>
    );
};

export default Portfolio;
