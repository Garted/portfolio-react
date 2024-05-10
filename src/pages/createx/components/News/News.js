import "./news.scss";

import builderman from "..//../img/news/builderman.webp";
import helm from "..//../img/news/helm.webp";
import handmade from "..//../img/news/handmade.webp";

const News = () => {
    return (
        <section className="news" id="news">
            <div className="container-cr">
                <h2 className="main-title news__title">Recent news</h2>
                <div className="news__block">
                    <div className="news__block-big">
                        <img
                            className="news__block-big-img"
                            src={builderman}
                            alt="bm"
                        />
                        <h4 className="name-title news__block-title">
                            How to Build Climate Change-Resilient Infrastructure
                        </h4>
                        <div className="news__block-status">
                            <div className="catagory">Industry News</div>
                            <div className="line"></div>
                            <div className="date">June 24, 2020</div>
                            <div className="line"></div>
                            <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.6153 7.54557C14.5204 8.20339 14.2954 8.82861 13.9619 9.40355C13.9869 9.5459 13.9997 9.68979 13.9997 9.83429C13.9997 10.3362 13.8543 10.8165 13.5849 11.2529C13.4504 11.4707 13.4158 11.726 13.4025 11.8946C13.3873 12.0879 13.3924 12.2994 13.4062 12.5025C13.4217 12.7304 13.4497 12.9697 13.4818 13.1954C13.2216 13.1196 12.9395 13.0434 12.6704 12.9826C12.4465 12.9321 12.2174 12.8891 12.0099 12.8676C11.8289 12.849 11.5674 12.8345 11.3335 12.9101C10.8221 13.0754 10.2594 13.1676 9.66636 13.1676C8.96109 13.1676 8.31335 13.0424 7.74559 12.825C7.60903 12.8312 7.47147 12.8343 7.33301 12.8343C6.52993 12.8343 5.75701 12.7287 5.03385 12.5335C6.08516 13.7494 7.81828 14.501 9.66636 14.501C10.3883 14.501 11.0812 14.3901 11.7198 14.1864C11.7209 14.1865 11.723 14.1864 11.726 14.1864C11.7424 14.186 11.7879 14.1851 11.8729 14.1939C12.0067 14.2077 12.1786 14.2385 12.377 14.2833C12.7719 14.3724 13.2157 14.5038 13.5615 14.6136C14.2949 14.8464 15.0056 14.2064 14.8745 13.4621C14.8181 13.1418 14.7595 12.7508 14.7365 12.4122C14.7249 12.2419 14.7236 12.1021 14.7317 11.9995C14.7351 11.957 14.7394 11.9304 14.7421 11.9162C15.1172 11.2949 15.333 10.5874 15.333 9.83429C15.333 8.98526 15.0693 8.20995 14.6153 7.54557Z"
                                    fill="#787A80"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.73109 4.29943C2.83245 4.98662 2.33306 5.88871 2.33306 6.83398C2.33306 7.30534 2.45577 7.75932 2.68599 8.18147C2.77367 8.34226 2.79854 8.50812 2.80744 8.6204C2.81714 8.74283 2.8123 8.86867 2.80166 8.98633C2.78034 9.22191 2.72949 9.48884 2.66849 9.75174C2.59715 10.0593 2.50572 10.3872 2.41296 10.6952C2.76512 10.5672 3.15003 10.436 3.51493 10.3296C3.80985 10.2435 4.10767 10.1689 4.37274 10.1269C4.60108 10.0908 4.93243 10.0554 5.2177 10.1541C5.85792 10.3756 6.57411 10.5007 7.33306 10.5007C8.76451 10.5007 10.0358 10.0562 10.935 9.36854C11.8337 8.68135 12.3331 7.77926 12.3331 6.83398C12.3331 5.88871 11.8337 4.98662 10.935 4.29943C10.0358 3.61176 8.76451 3.16732 7.33306 3.16732C5.90162 3.16732 4.63034 3.61176 3.73109 4.29943ZM2.92116 3.24028C4.07283 2.35959 5.63489 1.83398 7.33306 1.83398C9.03123 1.83398 10.5933 2.35959 11.745 3.24028C12.8973 4.12145 13.6664 5.38602 13.6664 6.83398C13.6664 8.28194 12.8973 9.54652 11.745 10.4277C10.5933 11.3084 9.03123 11.834 7.33306 11.834C6.43769 11.834 5.58244 11.688 4.80591 11.4224C4.80513 11.4246 4.74215 11.4184 4.58098 11.4439C4.39521 11.4733 4.15809 11.5308 3.88836 11.6095C3.35138 11.7662 2.74835 11.9878 2.28902 12.1666C1.49327 12.4763 0.682633 11.712 0.95074 10.8979C1.09284 10.4665 1.26043 9.92121 1.36966 9.45041C1.42468 9.21324 1.46039 9.01384 1.47375 8.86618C1.47839 8.81492 1.47958 8.77756 1.47932 8.7523C1.17246 8.16592 0.99973 7.51748 0.99973 6.83398C0.99973 5.38602 1.76887 4.12145 2.92116 3.24028Z"
                                    fill="#787A80"
                                />
                            </svg>

                            <div className="comment">4 comments</div>
                        </div>
                        <div className="news__block-big-text">
                            Ipsum aliquet nisi, hendrerit rhoncus quam tortor,
                            maecenas faucibus. Tincidunt aliquet sit vel,
                            venenatis nulla. Integer bibendum turpis convallis
                            enim, nibh convallis...
                        </div>
                    </div>
                    <div className="news__block-small">
                        <div className="news__block-small-item">
                            <img
                                className="news__block-small-img"
                                src={helm}
                                alt="helm"
                            />
                            <h4 className="name-title news__block-small-title">
                                How Construction Can Help Itself
                            </h4>
                            <div className="news__block-status news__block-status-small">
                                <div className="catagory">Company news</div>
                                <div className="line"></div>
                                <div className="date">December 1, 2019</div>
                                <div className="line"></div>
                                <svg
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.6153 7.54557C14.5204 8.20339 14.2954 8.82861 13.9619 9.40355C13.9869 9.5459 13.9997 9.68979 13.9997 9.83429C13.9997 10.3362 13.8543 10.8165 13.5849 11.2529C13.4504 11.4707 13.4158 11.726 13.4025 11.8946C13.3873 12.0879 13.3924 12.2994 13.4062 12.5025C13.4217 12.7304 13.4497 12.9697 13.4818 13.1954C13.2216 13.1196 12.9395 13.0434 12.6704 12.9826C12.4465 12.9321 12.2174 12.8891 12.0099 12.8676C11.8289 12.849 11.5674 12.8345 11.3335 12.9101C10.8221 13.0754 10.2594 13.1676 9.66636 13.1676C8.96109 13.1676 8.31335 13.0424 7.74559 12.825C7.60903 12.8312 7.47147 12.8343 7.33301 12.8343C6.52993 12.8343 5.75701 12.7287 5.03385 12.5335C6.08516 13.7494 7.81828 14.501 9.66636 14.501C10.3883 14.501 11.0812 14.3901 11.7198 14.1864C11.7209 14.1865 11.723 14.1864 11.726 14.1864C11.7424 14.186 11.7879 14.1851 11.8729 14.1939C12.0067 14.2077 12.1786 14.2385 12.377 14.2833C12.7719 14.3724 13.2157 14.5038 13.5615 14.6136C14.2949 14.8464 15.0056 14.2064 14.8745 13.4621C14.8181 13.1418 14.7595 12.7508 14.7365 12.4122C14.7249 12.2419 14.7236 12.1021 14.7317 11.9995C14.7351 11.957 14.7394 11.9304 14.7421 11.9162C15.1172 11.2949 15.333 10.5874 15.333 9.83429C15.333 8.98526 15.0693 8.20995 14.6153 7.54557Z"
                                        fill="#787A80"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.73109 4.29943C2.83245 4.98662 2.33306 5.88871 2.33306 6.83398C2.33306 7.30534 2.45577 7.75932 2.68599 8.18147C2.77367 8.34226 2.79854 8.50812 2.80744 8.6204C2.81714 8.74283 2.8123 8.86867 2.80166 8.98633C2.78034 9.22191 2.72949 9.48884 2.66849 9.75174C2.59715 10.0593 2.50572 10.3872 2.41296 10.6952C2.76512 10.5672 3.15003 10.436 3.51493 10.3296C3.80985 10.2435 4.10767 10.1689 4.37274 10.1269C4.60108 10.0908 4.93243 10.0554 5.2177 10.1541C5.85792 10.3756 6.57411 10.5007 7.33306 10.5007C8.76451 10.5007 10.0358 10.0562 10.935 9.36854C11.8337 8.68135 12.3331 7.77926 12.3331 6.83398C12.3331 5.88871 11.8337 4.98662 10.935 4.29943C10.0358 3.61176 8.76451 3.16732 7.33306 3.16732C5.90162 3.16732 4.63034 3.61176 3.73109 4.29943ZM2.92116 3.24028C4.07283 2.35959 5.63489 1.83398 7.33306 1.83398C9.03123 1.83398 10.5933 2.35959 11.745 3.24028C12.8973 4.12145 13.6664 5.38602 13.6664 6.83398C13.6664 8.28194 12.8973 9.54652 11.745 10.4277C10.5933 11.3084 9.03123 11.834 7.33306 11.834C6.43769 11.834 5.58244 11.688 4.80591 11.4224C4.80513 11.4246 4.74215 11.4184 4.58098 11.4439C4.39521 11.4733 4.15809 11.5308 3.88836 11.6095C3.35138 11.7662 2.74835 11.9878 2.28902 12.1666C1.49327 12.4763 0.682633 11.712 0.95074 10.8979C1.09284 10.4665 1.26043 9.92121 1.36966 9.45041C1.42468 9.21324 1.46039 9.01384 1.47375 8.86618C1.47839 8.81492 1.47958 8.77756 1.47932 8.7523C1.17246 8.16592 0.99973 7.51748 0.99973 6.83398C0.99973 5.38602 1.76887 4.12145 2.92116 3.24028Z"
                                        fill="#787A80"
                                    />
                                </svg>

                                <div className="comment">No comments</div>
                            </div>
                        </div>
                        <div className="news__block-small-item">
                            <img
                                className="news__block-small-img"
                                src={handmade}
                                alt="helm"
                            />
                            <h4 className="name-title news__block-small-title">
                                Types of Flooring Materials
                            </h4>
                            <div className="news__block-status news__block-status-small">
                                <div className="catagory">Innovation</div>
                                <div className="line"></div>
                                <div className="date">June 12, 2020</div>
                                <div className="line"></div>
                                <svg
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.6153 7.54557C14.5204 8.20339 14.2954 8.82861 13.9619 9.40355C13.9869 9.5459 13.9997 9.68979 13.9997 9.83429C13.9997 10.3362 13.8543 10.8165 13.5849 11.2529C13.4504 11.4707 13.4158 11.726 13.4025 11.8946C13.3873 12.0879 13.3924 12.2994 13.4062 12.5025C13.4217 12.7304 13.4497 12.9697 13.4818 13.1954C13.2216 13.1196 12.9395 13.0434 12.6704 12.9826C12.4465 12.9321 12.2174 12.8891 12.0099 12.8676C11.8289 12.849 11.5674 12.8345 11.3335 12.9101C10.8221 13.0754 10.2594 13.1676 9.66636 13.1676C8.96109 13.1676 8.31335 13.0424 7.74559 12.825C7.60903 12.8312 7.47147 12.8343 7.33301 12.8343C6.52993 12.8343 5.75701 12.7287 5.03385 12.5335C6.08516 13.7494 7.81828 14.501 9.66636 14.501C10.3883 14.501 11.0812 14.3901 11.7198 14.1864C11.7209 14.1865 11.723 14.1864 11.726 14.1864C11.7424 14.186 11.7879 14.1851 11.8729 14.1939C12.0067 14.2077 12.1786 14.2385 12.377 14.2833C12.7719 14.3724 13.2157 14.5038 13.5615 14.6136C14.2949 14.8464 15.0056 14.2064 14.8745 13.4621C14.8181 13.1418 14.7595 12.7508 14.7365 12.4122C14.7249 12.2419 14.7236 12.1021 14.7317 11.9995C14.7351 11.957 14.7394 11.9304 14.7421 11.9162C15.1172 11.2949 15.333 10.5874 15.333 9.83429C15.333 8.98526 15.0693 8.20995 14.6153 7.54557Z"
                                        fill="#787A80"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.73109 4.29943C2.83245 4.98662 2.33306 5.88871 2.33306 6.83398C2.33306 7.30534 2.45577 7.75932 2.68599 8.18147C2.77367 8.34226 2.79854 8.50812 2.80744 8.6204C2.81714 8.74283 2.8123 8.86867 2.80166 8.98633C2.78034 9.22191 2.72949 9.48884 2.66849 9.75174C2.59715 10.0593 2.50572 10.3872 2.41296 10.6952C2.76512 10.5672 3.15003 10.436 3.51493 10.3296C3.80985 10.2435 4.10767 10.1689 4.37274 10.1269C4.60108 10.0908 4.93243 10.0554 5.2177 10.1541C5.85792 10.3756 6.57411 10.5007 7.33306 10.5007C8.76451 10.5007 10.0358 10.0562 10.935 9.36854C11.8337 8.68135 12.3331 7.77926 12.3331 6.83398C12.3331 5.88871 11.8337 4.98662 10.935 4.29943C10.0358 3.61176 8.76451 3.16732 7.33306 3.16732C5.90162 3.16732 4.63034 3.61176 3.73109 4.29943ZM2.92116 3.24028C4.07283 2.35959 5.63489 1.83398 7.33306 1.83398C9.03123 1.83398 10.5933 2.35959 11.745 3.24028C12.8973 4.12145 13.6664 5.38602 13.6664 6.83398C13.6664 8.28194 12.8973 9.54652 11.745 10.4277C10.5933 11.3084 9.03123 11.834 7.33306 11.834C6.43769 11.834 5.58244 11.688 4.80591 11.4224C4.80513 11.4246 4.74215 11.4184 4.58098 11.4439C4.39521 11.4733 4.15809 11.5308 3.88836 11.6095C3.35138 11.7662 2.74835 11.9878 2.28902 12.1666C1.49327 12.4763 0.682633 11.712 0.95074 10.8979C1.09284 10.4665 1.26043 9.92121 1.36966 9.45041C1.42468 9.21324 1.46039 9.01384 1.47375 8.86618C1.47839 8.81492 1.47958 8.77756 1.47932 8.7523C1.17246 8.16592 0.99973 7.51748 0.99973 6.83398C0.99973 5.38602 1.76887 4.12145 2.92116 3.24028Z"
                                        fill="#787A80"
                                    />
                                </svg>

                                <div className="comment">No comments</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news__explore">
                    <h3 className="title-left news__explore-text">
                        Explore all our news posts
                    </h3>
                    <div className="main__btn news__explore-btn">
                        View all news
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
