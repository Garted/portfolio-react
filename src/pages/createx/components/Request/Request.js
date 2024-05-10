import "./request.scss";

const Request = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="request">
            <div className="container-cr">
                <div className="request__wrap">
                    <h3 className="title-left request__title">
                        Want to know more? Ask us a question:
                    </h3>
                    <form
                        className="request__form"
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        <div className="request__form-block">
                            <label
                                className="form-label request__form-label"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="form-input request__form-input-name"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="request__form-block">
                            <label
                                className="form-label request__form-label"
                                htmlFor="tel"
                            >
                                Phone
                            </label>
                            <input
                                className="form-input request__form-input-phone"
                                type="tel"
                                name="tel"
                                placeholder="Your phone"
                            />
                        </div>
                        <div className="request__form-block request__form-block-message">
                            <label
                                className="form-label request__form-label"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <input
                                className="form-input request__form-input-message"
                                type="message"
                                name="message"
                                placeholder="Your message"
                            />
                        </div>
                        <button className="main__btn request__form-btn">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Request;
