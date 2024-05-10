import "./clients.scss";

import svg1 from "..//..//img/clients/icons/client-logo.svg";
import svg2 from "..//..//img/clients/icons/client-logo1.svg";
import svg3 from "..//..//img/clients/icons/client-logo2.svg";
import svg4 from "..//..//img/clients/icons/client-logo3.svg";
import svg5 from "..//..//img/clients/icons/client-logo4.svg";
import svg6 from "..//..//img/clients/icons/client-logo5.svg";

import avatar from "..//..//img/clients/avatar.webp";
import twogays from "..//..//img/clients/twoguys.webp";

const Clients = () => {
    return (
        <section className="clients">
            <div className="container-cr">
                <h2 className="main-title clients__title">
                    Supported by 12+ partners
                </h2>
                <div className="clients__supports">
                    <div className="clients__supports-item">
                        <img src={svg1} alt="logo" />
                    </div>
                    <div className="clients__supports-item">
                        <img src={svg5} alt="sd" />
                    </div>
                    <div className="clients__supports-item">
                        <img src={svg2} alt="sdf" />
                    </div>
                    <div className="clients__supports-item">
                        <img src={svg3} alt="sdf" />
                    </div>
                    <div className="clients__supports-item">
                        <img src={svg4} alt="sdf" />
                    </div>
                    <div className="clients__supports-item">
                        <img src={svg6} alt="sdf" />
                    </div>
                </div>
                <div className="clients__feedback">
                    <div className="clients__feedback-comment">
                        <h2 className="main-title clients__feedback-title">
                            What our clients are saying
                        </h2>
                        <img
                            className="clients__feedback-avatar"
                            src={avatar}
                            alt="avatar"
                        />
                        <div className="clients__feedback-text">
                            Ipsum aute sunt aliquip aute et occaecat. Anim minim
                            do cillum eiusmod enim. Consectetur magna cillum
                            consequat minim laboris cillum laboris voluptate
                            minim proident exercitation ullamco.
                        </div>
                        <div className="clients__feedback-nav">
                            <div>
                                <h4 className="name-title clients__feedback-name">
                                    Shawn Edwards
                                </h4>
                                <p className="main-subtitle clients__feedback-subtitle">
                                    Position, Company name
                                </p>
                            </div>
                            <div className="arrow-nav clients__feedback-nav-arrows">
                                <div className="left clients__feedback-nav-arrows-left">
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
                                <div className="right clients__feedback-nav-arrows-right">
                                    <svg
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
                    </div>

                    <div className="clients__feedback-photo">
                        <img
                            className="clients__feedback-img"
                            src={twogays}
                            alt="twogays"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Clients;
