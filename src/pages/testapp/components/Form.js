import "./form.scss";
import { useState } from "react";
const Form = ({
    setClose,
    close,
    base,
    setBase,
    setActiveUser,
    setUserData,
    userData,
    userError,
    setUserError,
}) => {
    const [emptyPlaceholder, setEmptyPlaceholder] = useState(null);

    return (
        <form className={close ? "test_form close" : "test_form"}>
            <div
                onClick={() => {
                    setClose(!close);
                    setUserData({ name: "", password: "" });
                    setUserError(null);
                }}
                className="form-cross"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 6L6 18"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 6L18 18"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className="form-title">Войти в систему</div>
            <div className="input_wrap">
                <input
                    onFocus={() => setEmptyPlaceholder("mail")}
                    onBlur={() => setEmptyPlaceholder(null)}
                    onChange={(event) =>
                        setUserData({ ...userData, name: event.target.value })
                    }
                    value={userData.name}
                    type="text"
                    placeholder={
                        emptyPlaceholder === "mail" ? "" : "Email/Телефон"
                    }
                />
                <input
                    onFocus={() => setEmptyPlaceholder("pass")}
                    onBlur={() => setEmptyPlaceholder(null)}
                    value={userData.password}
                    onChange={(event) =>
                        setUserData({
                            ...userData,
                            password: event.target.value,
                        })
                    }
                    type="password"
                    placeholder={emptyPlaceholder === "pass" ? "" : "Пароль"}
                />
            </div>

            {userError !== "ok" ? (
                <div
                    className="error"
                    style={{ position: "absolute", color: "red" }}
                >
                    {userError}
                </div>
            ) : userError === "ok" ? (
                <div
                    className="error"
                    style={{ position: "absolute", color: "green" }}
                >
                    Регистрация прошла успешно
                </div>
            ) : null}

            <div className="checkbox_wrap">
                <input type="checkbox" />
                <div className="saveapss">Запомнить пароль</div>
            </div>
            <div className="restore">Восстановить</div>
            <div className="button_wrap">
                <input
                    className="form_button enter"
                    type="button"
                    value="Войти"
                    onClick={() => {
                        if (
                            base.filter((item) => item.name === userData.name)
                                .length > 0
                        ) {
                            if (
                                base.filter(
                                    (item) =>
                                        item.name === userData.name &&
                                        item.password === userData.password
                                ).length > 0
                            ) {
                                setActiveUser(userData.name);
                                setClose(true);
                                setUserError(null);
                                setUserData({ name: "", password: "" });
                            } else {
                                setUserError("Неправильный пароль");
                            }
                        } else {
                            setUserError("Такого пользователя нет");
                        }
                    }}
                />
                <input
                    disabled={userData.name === "" || userData.password === ""}
                    onClick={() => {
                        if (
                            base.filter((item) => item.name === userData.name)
                                .length > 0
                        ) {
                            setUserError("Такой пользователь уже существует");
                        } else {
                            setBase([...base, userData]);
                            setUserError("ok");
                        }
                    }}
                    type="button"
                    className="form_button register"
                    value="Зарегистрироваться"
                />
            </div>
        </form>
    );
};

export default Form;
