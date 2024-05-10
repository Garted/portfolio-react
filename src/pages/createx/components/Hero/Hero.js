import "./hero.scss";
import { useState } from "react";
const Hero = () => {
    const [active, setActive] = useState(1);

    const arrNums = [
        { id: 1, name: "01" },
        { id: 2, name: "02" },
        { id: 3, name: "03" },
        { id: 4, name: "04" },
    ];

    return (
        <section className="hero">
            <div className="container-cr">
                <h1 className="hero__title">
                    CREATE<span className="orangeX">X</span> CONSTRUCTION
                </h1>
                <p className="hero__text">
                    Cras ultrices leo vitae non viverra. Fringilla nisi quisque
                    consequat, dignissim vitae proin ipsum sed. Pellentesque nec
                    turpis purus eget pellentesque integer ipsum elementum
                    felis.
                </p>
                <div className="hero__buttons">
                    <button className="hero__btn-transparent">
                        Learn more about us
                    </button>
                    <button className="main__btn hero__btn-orange">
                        SUBMIT REQUEST
                    </button>
                </div>
                <div className="hero__blocks">
                    {arrNums.map((item) => {
                        return (
                            <div
                                onClick={() => setActive(item.id)}
                                key={item.id}
                                className={
                                    active === item.id
                                        ? "hero__blocks-item hero__blocks-item-active"
                                        : "hero__blocks-item"
                                }
                            >
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Hero;
