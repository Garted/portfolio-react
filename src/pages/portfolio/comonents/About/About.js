import "./about.scss";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="about-title">
                    Hi, I’m Eugeny. Nice to meet you.
                </h2>
                <h3 className="about-descr">
                    I have experience in Landing Page and Single Page
                    Application development. In my free time I solve problems
                    on&nbsp;
                    <a
                        target="_blank"
                        className="about-link"
                        href="https://www.codewars.com/users/Gartedy"
                        rel="noreferrer"
                    >
                        codewars
                    </a>
                    . I am committed to further development in this area and am
                    open to suggestions.
                </h3>
            </div>
        </section>
    );
};

export default About;
