import "./figures.scss";

import figuresBg from "..//..//img/figures/bg.webp";
const Figures = () => {
    return (
        <section className="figures">
            <div className="figures__bg">
                <img src={figuresBg} alt="bg" />
            </div>
            <div className="container-cr">
                <h2 className="main-title figures__title">
                    Some facts and figures
                </h2>
                <div className="figures__wrap">
                    <div className="figures__wrap-item">
                        <div className="figures__wrap-item-circle figures__wrap-item-circle-orange">
                            98%
                        </div>
                        <div className="figures__wrap-item-subtitle">
                            Totally satisfied clients
                        </div>
                    </div>
                    <div className="figures__wrap-item">
                        <div className="figures__wrap-item-circle figures__wrap-item-circle-orange-pink"></div>
                        <div className="figures__wrap-item-subtitle">
                            Years of experience
                        </div>
                    </div>
                    <div className="figures__wrap-item">
                        <div className="figures__wrap-item-circle figures__wrap-item-circle-orange-blue">
                            9452
                        </div>
                        <div className="figures__wrap-item-subtitle">
                            Working hours spent
                        </div>
                    </div>
                    <div className="figures__wrap-item">
                        <div className="figures__wrap-item-circle figures__wrap-item-circle-orange-green">
                            100%
                        </div>
                        <div className="figures__wrap-item-subtitle">
                            Succeeded projects
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Figures;
