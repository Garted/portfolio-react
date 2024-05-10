import "./videoBlock.scss";
import video from "./video.mp4";

const VideoBlock = () => {
    return (
        <section className="video-block" id="/about">
            <div className="container-cr">
                <h2 className="main-title video__title">
                    We are Createx Construction Bureau
                </h2>
                <p className="main-subtitle video__subtitle">
                    We are rightfully considered to be the best construction
                    company in the USA.
                </p>
                <div className="video-container">
                    <video
                        className="video"
                        width="1920"
                        height="1080"
                        controls
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
};
export default VideoBlock;
