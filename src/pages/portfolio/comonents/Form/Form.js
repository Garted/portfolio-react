import "./form.scss";
import { useState, useRef } from "react";
const Form = ({ showForm, setShowForm, scrollValue, setScrollValue }) => {
    const [formSubmit, setFormSubmit] = useState(false);

    const formRef = useRef(null);
    const handleSubmit = (event) => {
        setFormSubmit(!formSubmit);
        setShowForm(!showForm);
        event.preventDefault();
        formRef.current.reset();
        setScrollValue({ ...scrollValue, status: false });
        setTimeout(() => {
            setFormSubmit(false);
        }, 2000);
    };

    return (
        <>
            <form
                ref={formRef}
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
                className={showForm ? "form show" : "form"}
            >
                <div
                    onClick={() => {
                        setShowForm(false);
                        setScrollValue({ ...scrollValue, status: false });
                    }}
                    className="form-close"
                >
                    <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        width="16px"
                        height="16px"
                        viewBox="0 0 612.043 612.043"
                    >
                        <g>
                            <g id="cross">
                                <g>
                                    <path
                                        d="M397.503,306.011l195.577-195.577c25.27-25.269,25.27-66.213,0-91.482c-25.269-25.269-66.213-25.269-91.481,0
                                L306.022,214.551L110.445,18.974c-25.269-25.269-66.213-25.269-91.482,0s-25.269,66.213,0,91.482L214.54,306.033L18.963,501.61
                                c-25.269,25.269-25.269,66.213,0,91.481c25.269,25.27,66.213,25.27,91.482,0l195.577-195.576l195.577,195.576
                                c25.269,25.27,66.213,25.27,91.481,0c25.27-25.269,25.27-66.213,0-91.481L397.503,306.011z"
                                        fill="#0d1739"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="textarea">Your message</label>
                <input type="text" id="textarea" name="textarea" />
                <button className="button-portfolio form-button" type="submit">
                    Send
                </button>
            </form>
            <div className={formSubmit ? "send-form show" : "send-form"}>
                Thank you wait for answer
            </div>
            <div
                onClick={() => {
                    setShowForm(false);
                    setScrollValue({ ...scrollValue, status: false });
                }}
                className={showForm ? "popup popup-show" : "popup"}
            ></div>
        </>
    );
};

export default Form;
