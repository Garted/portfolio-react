import "./works.scss";

import rickandmorty from "./images/rick_and_morty.webp";
import building from "./images/building.webp";
import project from "./images/projP.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Works = () => {
    const [cardAni, setCardAni] = useState(null);

    const card = [
        {
            id: 1,
            text: "Page about building company",
            link: "createx",
            img: building,
        },
        {
            id: 2,
            text: "Rick and Morty information portal",
            link: "rick",
            img: rickandmorty,
        },
        {
            id: 3,
            text: "App about films",
            link: "arrowflicks",
            img: project,
        },
    ];

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="portfolio-title">My Recent Work</div>
                <div className="portfolio-subtitle">
                    Here are a few past design projects I've worked on.
                </div>
                <div className="portfolio-wrap">
                    {card.map((item) => {
                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => setCardAni(item.id)}
                                onMouseLeave={() => setCardAni(null)}
                                className="portfolio-item"
                            >
                                <div className="item-fade-in">
                                    <div className="item-descr item-description">
                                        {item.text}
                                    </div>
                                    <Link
                                        to={item.link}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <button className="button-portfolio item-button">
                                            Visit page
                                        </button>
                                    </Link>
                                </div>
                                <img
                                    src={item.img}
                                    alt="building"
                                    className={
                                        item.id === cardAni
                                            ? "portfolio-img img-transform-in"
                                            : "portfolio-img"
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Works;
