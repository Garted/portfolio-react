import "./footer.scss";
import { HashLink as Link } from "react-router-hash-link";
const Footer = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <footer className="footer" id="contacts">
            <div className="footer__top-bg">
                <div className="container-cr">
                    <div className="footer__top">
                        <form
                            className="footer__form"
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            <div className="title-left footer__form-title">
                                A quick way to discuss details
                            </div>
                            <div className="footer__form-block">
                                <label
                                    className="form-label footer__form-label"
                                    htmlFor="text"
                                >
                                    Name*
                                </label>
                                <input
                                    className="form-input footer__form-input footer__form-input-name"
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="footer__form-block">
                                <label
                                    className="form-label footer__form-label"
                                    htmlFor="tel"
                                >
                                    Phone*
                                </label>
                                <input
                                    className="form-input footer__form-input footer__form-input-phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="Your phone number"
                                />
                            </div>
                            <div className="footer__form-block">
                                <label
                                    className="form-label footer__form-label"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="form-input footer__form-input footer__form-input-name-email"
                                    type="email"
                                    name="email"
                                    placeholder="Your working email"
                                />
                            </div>
                            <div className="footer__form-block">
                                <label
                                    className="form-label footer__form-label"
                                    htmlFor="textarea"
                                >
                                    Message
                                </label>
                                <input
                                    className="form-input footer__form-input footer__form-input-message"
                                    type="text"
                                    name="message"
                                    placeholder="Your message"
                                />
                            </div>

                            <div className="footer__form-block-check">
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    id="happy"
                                    name="happy"
                                    value="yes"
                                />
                                <label
                                    className="footer__label-check"
                                    htmlFor="happy"
                                >
                                    I agree to receive communications from
                                    Createx
                                    <br />
                                    Construction Bureau.
                                </label>
                            </div>

                            <button className="main__btn footer__formbtn">
                                send request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer__bottom-bg">
                <div className="container-cr">
                    <div className="footer__bottom">
                        <div className="footer__bottom-history">
                            <div className="footer__bottom-history-block">
                                <Link
                                    className="footer__logo"
                                    to="/createx/#header"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="142"
                                        height="24"
                                        viewBox="0 0 142 24"
                                        fill="none"
                                    >
                                        <g clipPath="url(#clip0_90023_1938)">
                                            <path
                                                d="M0 12.1089C0 5.45433 3.60461 1.41797 9.50308 1.41797C13.9815 1.41797 17.5862 4.14524 18.2415 8.18161C18.3508 8.61797 18.0231 8.94524 17.5862 8.94524H14.7462C14.4185 8.94524 14.2 8.72706 14.0908 8.39979C13.5446 6.32706 11.7969 5.01797 9.50308 5.01797C6.33538 5.01797 4.36923 7.74524 4.36923 12.1089C4.36923 16.4725 6.33538 19.1998 9.61231 19.1998C11.9062 19.1998 13.5446 17.9998 14.2 16.0362C14.3092 15.7089 14.5277 15.4907 14.8554 15.4907H17.6954C18.1323 15.4907 18.46 15.9271 18.3508 16.2543C17.6954 20.1816 14.2 22.7998 9.61231 22.7998C3.60462 22.7998 0 18.6543 0 12.1089Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M26.5428 22.2546H23.3751C23.0474 22.2546 22.8289 22.0364 22.8289 21.7092V2.83643C22.8289 2.40007 23.2659 1.9637 23.7028 1.9637H31.3489C35.8274 1.9637 38.5582 4.47279 38.5582 8.40007C38.5582 10.691 37.4659 12.7637 35.6089 13.8546C35.172 14.0728 35.0628 14.6182 35.2812 14.9455L38.6674 21.3819C38.8859 21.7092 38.5582 22.1455 38.2305 22.1455H34.6259C34.4074 22.1455 34.1889 22.0364 34.0797 21.8182L30.912 15.2728C30.8028 14.9455 30.4751 14.8364 30.1474 14.8364H27.6351C27.3074 14.8364 27.0889 15.0546 27.0889 15.3819V21.8182C27.1982 22.0364 26.8705 22.2546 26.5428 22.2546ZM27.1982 11.1273C27.1982 11.4546 27.4166 11.6728 27.7443 11.6728H31.0212C33.2059 11.6728 34.4074 10.4728 34.4074 8.50916C34.4074 6.54552 33.0966 5.34552 31.0212 5.34552H27.8535C27.5259 5.34552 27.3074 5.5637 27.3074 5.89098V11.1273H27.1982Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M56.2537 22.2546H44.2383C43.8014 22.2546 43.4737 21.9273 43.4737 21.491V2.72734C43.4737 2.29098 43.8014 1.9637 44.2383 1.9637H56.2537C56.6906 1.9637 57.0183 2.29098 57.0183 2.72734V4.80007C57.0183 5.23643 56.6906 5.5637 56.2537 5.5637H48.2798C47.9521 5.5637 47.7337 5.78188 47.7337 6.10916V9.81825C47.7337 10.1455 47.9521 10.3637 48.2798 10.3637H55.7075C56.1445 10.3637 56.4721 10.691 56.4721 11.1273V12.9819C56.4721 13.4182 56.1445 13.7455 55.7075 13.7455H48.2798C47.9521 13.7455 47.7337 13.9637 47.7337 14.291V18.4364C47.7337 18.7637 47.9521 18.9819 48.2798 18.9819H56.2537C56.6906 18.9819 57.0183 19.3092 57.0183 19.7455V21.8182C57.0183 21.9273 56.6906 22.2546 56.2537 22.2546Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M73.1846 17.3455H66.9584C66.6307 17.3455 66.4123 17.5637 66.303 17.7819L65.1015 21.8182C64.9923 22.1455 64.7738 22.2546 64.4461 22.2546H61.6061C61.1692 22.2546 60.8415 21.8182 60.9507 21.3819L67.5046 2.40007C67.6138 2.18189 67.8323 1.9637 68.16 1.9637H72.2015C72.5292 1.9637 72.7476 2.18189 72.8569 2.40007L79.4107 21.3819C79.5199 21.8182 79.1923 22.2546 78.7553 22.2546H75.5876C75.2599 22.2546 75.0415 22.0364 74.9323 21.8182L73.7307 17.7819C73.7307 17.5637 73.403 17.3455 73.1846 17.3455ZM67.8323 14.1819H72.3107C72.5292 14.1819 72.6384 13.9637 72.6384 13.7455L70.2353 6.10916H70.0169L67.6138 13.7455C67.5046 13.9637 67.6138 14.1819 67.8323 14.1819Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M86.2925 21.4914V6.00049C86.2925 5.67322 86.074 5.45504 85.7463 5.45504H80.9402C80.5033 5.45504 80.0663 5.12777 80.0663 4.58231V2.72777C80.0663 2.2914 80.394 1.85504 80.9402 1.85504H95.7955C96.2324 1.85504 96.6694 2.18231 96.6694 2.72777V4.58231C96.6694 5.01867 96.3417 5.45504 95.7955 5.45504H90.9894C90.6617 5.45504 90.4432 5.67322 90.4432 6.00049V21.6005C90.4432 22.0369 90.1155 22.3641 89.6786 22.3641H86.9479C86.6202 22.255 86.2925 21.9278 86.2925 21.4914Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M113.381 22.2546H101.366C100.929 22.2546 100.601 21.9273 100.601 21.491V2.72734C100.601 2.29098 100.929 1.9637 101.366 1.9637H113.381C113.818 1.9637 114.146 2.29098 114.146 2.72734V4.80007C114.146 5.23643 113.818 5.5637 113.381 5.5637H105.408C105.08 5.5637 104.861 5.78188 104.861 6.10916V9.81825C104.861 10.1455 105.08 10.3637 105.408 10.3637H112.835C113.272 10.3637 113.6 10.691 113.6 11.1273V12.9819C113.6 13.4182 113.272 13.7455 112.835 13.7455H105.408C105.08 13.7455 104.861 13.9637 104.861 14.291V18.4364C104.861 18.7637 105.08 18.9819 105.408 18.9819H113.381C113.818 18.9819 114.146 19.3092 114.146 19.7455V21.8182C114.146 21.9273 113.818 22.2546 113.381 22.2546Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M128.564 10.5827L121.792 1.74634C121.355 1.30998 120.809 1.0918 120.263 1.0918C119.717 1.0918 119.171 1.30998 118.734 1.74634C117.969 2.61907 117.969 3.92816 118.734 4.80089L124.086 12.0009L118.734 19.2009C117.969 20.0736 117.969 21.3827 118.734 22.2554C119.171 22.6918 119.717 22.91 120.263 22.91C120.809 22.91 121.355 22.6918 121.792 22.2554L128.564 13.4191C129.329 12.7645 129.329 11.4554 128.564 10.5827Z"
                                                fill="#FF5A30"
                                            />
                                            <path
                                                d="M131.451 10.5827L138.223 1.74634C138.66 1.30998 139.207 1.0918 139.753 1.0918C140.299 1.0918 140.845 1.30998 141.282 1.74634C142.047 2.61907 142.047 3.92816 141.282 4.80089L135.93 12.0009L141.282 19.2009C142.047 20.0736 142.047 21.3827 141.282 22.2554C140.845 22.6918 140.299 22.91 139.753 22.91C139.207 22.91 138.66 22.6918 138.223 22.2554L131.451 13.4191C130.686 12.7645 130.686 11.4554 131.451 10.5827Z"
                                                fill="#FF5A30"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_90023_1938">
                                                <rect
                                                    width="142"
                                                    height="24"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    className="footer__link"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g opacity="0.6">
                                            <path
                                                d="M22 11.7424C22 17.1231 17.6047 21.4849 12.1818 21.4849C10.4602 21.4849 8.84289 21.0449 7.43578 20.2727L2 22L3.77222 16.7729C2.87822 15.3049 2.36333 13.5831 2.36333 11.7424C2.36333 6.36178 6.75911 2 12.1818 2C17.6051 2 22 6.36178 22 11.7424ZM12.1818 3.55156C7.62978 3.55156 3.92711 7.226 3.92711 11.7424C3.92711 13.5347 4.51133 15.1944 5.49956 16.5447L4.46822 19.5867L7.64044 18.5784C8.94378 19.4342 10.5051 19.9333 12.182 19.9333C16.7333 19.9333 20.4367 16.2593 20.4367 11.7429C20.4367 7.22644 16.7336 3.55156 12.1818 3.55156ZM17.1398 13.9862C17.0791 13.8869 16.9189 13.8269 16.6784 13.7076C16.4376 13.5882 15.254 13.0102 15.034 12.9309C14.8133 12.8513 14.6524 12.8113 14.4922 13.0502C14.332 13.2893 13.8707 13.8269 13.73 13.9862C13.5896 14.146 13.4493 14.166 13.2084 14.0464C12.968 13.9271 12.1927 13.6747 11.2733 12.8613C10.558 12.2284 10.0749 11.4471 9.93444 11.2078C9.79422 10.9689 9.91978 10.8398 10.04 10.7209C10.1484 10.6138 10.2809 10.442 10.4011 10.3027C10.5218 10.1631 10.5618 10.0638 10.6416 9.90422C10.7222 9.74489 10.682 9.60556 10.6216 9.48578C10.5616 9.36644 10.0798 8.19133 9.87933 7.71311C9.67889 7.23533 9.47867 7.31489 9.338 7.31489C9.19778 7.31489 9.03711 7.29489 8.87667 7.29489C8.71622 7.29489 8.45533 7.35467 8.23467 7.59356C8.01422 7.83267 7.39267 8.41044 7.39267 9.58533C7.39267 10.7604 8.25467 11.8958 8.37533 12.0549C8.49556 12.214 10.0398 14.7038 12.4864 15.66C14.9333 16.6158 14.9333 16.2969 15.3747 16.2569C15.8156 16.2171 16.7982 15.6793 16.9996 15.122C17.1996 14.5638 17.1996 14.0858 17.1398 13.9862Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    className="footer__link"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g opacity="0.6">
                                            <path
                                                d="M12 2C6.4775 2 2 6.145 2 11.2587C2 14.1725 3.45375 16.7712 5.72625 18.4688V22L9.13125 20.1313C10.04 20.3825 11.0025 20.5187 12 20.5187C17.5225 20.5187 22 16.3737 22 11.26C22 6.14625 17.5225 2 12 2ZM12.9937 14.4688L10.4475 11.7525L5.47875 14.4688L10.945 8.66625L13.5538 11.3825L18.46 8.66625L12.9937 14.4688Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    className="footer__link"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g opacity="0.6">
                                            <path
                                                d="M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    className="footer__link"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g opacity="0.6">
                                            <path
                                                d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    className="footer__link"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g opacity="0.6">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M21.3903 4.11358C22.4182 4.39044 23.2288 5.20086 23.5055 6.22899C24.0197 8.10691 23.9999 12.0213 23.9999 12.0213C23.9999 12.0213 23.9999 15.9158 23.5057 17.7939C23.2288 18.8218 22.4184 19.6324 21.3903 19.9091C19.5122 20.4035 12 20.4035 12 20.4035C12 20.4035 4.50731 20.4035 2.60961 19.8895C1.58148 19.6127 0.771054 18.802 0.4942 17.7741C0 15.9158 0 12.0015 0 12.0015C0 12.0015 0 8.10691 0.4942 6.22899C0.770871 5.20104 1.60125 4.37066 2.60943 4.09399C4.48753 3.59961 11.9998 3.59961 11.9998 3.59961C11.9998 3.59961 19.5122 3.59961 21.3903 4.11358ZM15.8549 12.0016L9.60788 15.5996V8.40355L15.8549 12.0016Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                            <p className="footer__bottom-text">
                                Createx Construction Bureau has been
                                successfully operating in the USA construction
                                market since 2000. We are proud to offer you
                                quality construction and exemplary service. Our
                                mission is to set the highest standards for
                                construction sphere.
                            </p>
                        </div>
                        <div className="footer__bottom-subscribe">
                            <div className="footer__bottom-subscribe-title">
                                Let’s stay in touch
                            </div>
                            <form
                                className="footer__bottom-form"
                                onSubmit={(e) => {
                                    handleSubmit(e);
                                }}
                            >
                                <input
                                    className="footer__bottom-form-input"
                                    type="text"
                                    name="email"
                                    placeholder="Your email address "
                                />
                                <button className="main__btn footer__bottom-form-btn">
                                    subscribe
                                </button>
                            </form>
                            <div className="footer__bottom-subscribe-text">
                                *Subscribe to our newsletter to receive
                                communications and early updates from Createx
                                Construction Bureau.
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom-about">
                        <div className="footer__bottom-about-head">
                            <div className="footer__bottom-about-head-address">
                                <div className="footer__bottom-about-title footer__bottom-about-head-title">
                                    HEAD OFFICE
                                </div>
                                <div className="footer__bottom-about-item-wh">
                                    Address:
                                    <Link
                                        className="footer__bottom-about-item"
                                        to="https://maps.app.goo.gl/wnieWYZaVP3iDzk16"
                                    >
                                        8502 Preston Rd. Inglewood, New York
                                    </Link>
                                </div>
                                <div className="footer__bottom-about-call">
                                    <div className="footer__bottom-about-item-wh">
                                        Call:
                                    </div>
                                    <Link
                                        className="footer__bottom-about-item"
                                        to="/createx"
                                    >
                                        (405) 555-0128
                                    </Link>
                                </div>
                                <div className="footer__bottom-about-head-email">
                                    <div className="footer__bottom-about-item-wh">
                                        Email:
                                    </div>
                                    <Link
                                        className="footer__bottom-about-item"
                                        to="/createx"
                                    >
                                        hello@createx.com
                                    </Link>
                                </div>
                            </div>
                            <div className="footer__bottom-about-whowe">
                                <div className="footer__bottom-about-title footer__bottom-about-whowe-title">
                                    WHO WE ARE
                                </div>
                                <Link
                                    className="footer__bottom-about-item footer__bottom-about-ourexp-aboutus"
                                    to="/createx/#about"
                                >
                                    About Us
                                </Link>
                                <Link
                                    className="footer__bottom-about-item footer__bottom-about-ourexp-available"
                                    to="/createx/#works"
                                >
                                    Available Positions
                                </Link>
                                <Link
                                    className="footer__bottom-about-item footer__bottom-about-ourexp-contacts"
                                    to="/createx/#contacts"
                                >
                                    Contacts
                                </Link>
                            </div>
                            <div className="footer__bottom-about-ourexp">
                                <div className="footer__bottom-about-title footer__bottom-about-ourexp-title">
                                    OUR EXPERIENCE
                                </div>
                                <Link
                                    className="footer__bottom-about-item footer__bottom-about-ourexp-services"
                                    to="/createx/#services"
                                >
                                    Services
                                </Link>
                                <Link
                                    className="footer__bottom-about-item footer__bottom-about-ourexp-work"
                                    to="/createx/#portfolio"
                                >
                                    Work
                                </Link>
                                <Link
                                    className="footer__bottom-about-item footer__bottom-about-ourexp-news"
                                    to="/createx/#news"
                                >
                                    News
                                </Link>
                            </div>
                        </div>
                        <div className="footer__bottom-allrights">
                            <div className="footer__bottom-allrights-text">
                                © All rights reserved. Made with
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.99925 13.2715C4.93321 11.5252 3.22318 9.78955 2.39626 8.28361C1.54992 6.74228 1.62377 5.4441 2.0934 4.52273C3.05872 2.62892 5.80378 2.02333 7.4763 4.13865L7.99921 4.80001L8.52217 4.13868C10.195 2.02327 12.9402 2.62896 13.9055 4.52273C14.3751 5.44408 14.4489 6.74226 13.6025 8.28359C12.7756 9.78954 11.0654 11.5252 7.99925 13.2715ZM7.99928 2.73726C5.64647 0.501518 2.17555 1.42555 0.905488 3.91723C0.20846 5.2847 0.198939 7.05212 1.22753 8.92536C2.247 10.782 4.2796 12.7417 7.67675 14.6194L7.99924 14.7976L8.32173 14.6194C11.719 12.7417 13.7517 10.782 14.7712 8.92537C15.7999 7.05214 15.7904 5.28472 15.0934 3.91723C13.8233 1.4255 10.3523 0.501552 7.99928 2.73726Z"
                                        fill="#FF5A30"
                                    />
                                </svg>
                                by Createx Studio
                            </div>
                            <div className="footer__bottom-allrights-gotop">
                                <div className="footer__bottom-allrights-gotop-text">
                                    GO TO TOP
                                </div>
                                <Link
                                    className="footer__bottom-gotop"
                                    to="/createx/#header"
                                >
                                    <button className="main__btn footer__bottom-allrights-gotop-btn">
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
                                                d="M4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
