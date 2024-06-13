import Form from "./components/Form";
import "./testapp.scss";
import User from "./components/User";
import img from "./img/test_img.jpg";
import { useState } from "react";

const Testapp = () => {
    const [close, setClose] = useState(false);
    const [activeUser, setActiveUser] = useState("");
    const [base, setBase] = useState([{ name: "255", password: "123" }]);
    const [userData, setUserData] = useState({ name: "", password: "" });
    const [userError, setUserError] = useState(null);
    return (
        <>
            <div className="testapp">
                <div className="test_container">
                    <User
                        activeUser={activeUser}
                        setActiveUser={setActiveUser}
                        setClose={setClose}
                    />
                    <div className="content_wrap">
                        <div className="left_content">
                            <h1 className="left_content_title">Демо-версия</h1>
                            <p className="left_content_text">
                                За 18 лет деятельности было реализовано более
                                500 крупных, а так же, не менее 2500 средних и
                                малых проектов. Используя знания и накопленный
                                опыт мы можем предложить
                            </p>
                            <button className=" left_content_button">
                                <div className="button_text">
                                    Попробовать бесплатно
                                </div>
                                <div className="button_arrow">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 7H17V17"
                                            stroke="#1F4284"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7 17L17 7"
                                            stroke="#1F4284"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className="right_content">
                            <img src={img} alt="test" />
                        </div>
                    </div>
                    <Form
                        userError={userError}
                        setUserError={setUserError}
                        setClose={setClose}
                        close={close}
                        activeUser={activeUser}
                        setActiveUser={setActiveUser}
                        base={base}
                        setBase={setBase}
                        userData={userData}
                        setUserData={setUserData}
                    />
                </div>
            </div>
            <div
                onClick={() => {
                    setClose(!close);
                    setUserData({ name: "", password: "" });
                    setUserError(null);
                }}
                className="popo"
                style={close ? { display: "none" } : null}
            ></div>
        </>
    );
};

export default Testapp;
