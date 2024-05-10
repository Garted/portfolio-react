import "./portfolio.scss";

import building from "..//..//img/portfolio/building.webp";
import cubes from "..//..//img/portfolio/cubes.webp";

const Portfolio = () => {
    return (
        <section className="portfolio" id="works">
            <div className="container-cr">
                <div className="portfolio__block">
                    <h2 className="main-title portfolio__title">
                        Browse our selected projects and learn more about our
                        work
                    </h2>
                    <div className="arrow-nav portfolio__nav">
                        <div className="left portfolio__nav-left">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z"
                                    fill="#424551"
                                />
                            </svg>
                        </div>
                        <div className="right portfolio__nav-right active-arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
                                    fill="#424551"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="portfolio__wrap">
                    <div className="portfolio__wrap-item">
                        <img
                            className="portfolio__item-img"
                            src={building}
                            alt="build"
                        />
                        <h4 className="name-title portfolio-item-name">
                            Red Finger Building
                        </h4>
                        <p className="main-subtitle portfolio-item-subtitle">
                            Business Centers
                        </p>
                        <button className="main__btn portfolio__btn">
                            View Project
                        </button>
                    </div>
                    <div className="portfolio__wrap-item">
                        <img
                            className="portfolio__item-img portfolio__item-img-hover"
                            src={cubes}
                            alt="build"
                        />
                        <h4 className="name-title portfolio-item-name">
                            Cubes Building
                        </h4>
                        <p className="main-subtitle portfolio-item-subtitle">
                            Business Centers
                        </p>
                        <button className="main__btn portfolio__btn">
                            View Project
                        </button>
                    </div>
                    <div className="portfolio__wrap-item">
                        <img
                            className="portfolio__item-img"
                            src={building}
                            alt="build"
                        />
                        <h4 className="name-title portfolio-item-name">
                            The Pencil Building
                        </h4>
                        <p className="main-subtitle portfolio-item-subtitle">
                            Stores & Malls
                        </p>
                        <button className="main__btn portfolio__btn">
                            View Project
                        </button>
                    </div>
                </div>
                <div className="portfolio__explore">
                    <h3 className="title-left portfolio__explore-text">
                        Explore all our works
                    </h3>
                    <div className="main__btn portfolio__explore-btn">
                        View portfolio
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
