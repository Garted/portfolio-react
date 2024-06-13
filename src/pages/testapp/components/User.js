import "./user.scss";

const User = ({ activeUser, setActiveUser, setClose }) => {
    return (
        <div className="user_wrap">
            {activeUser !== "" ? (
                <div className="user">
                    {activeUser}
                    <div className="legend">
                        <button onClick={() => setActiveUser("")}>Выйти</button>
                    </div>
                </div>
            ) : (
                <button
                    className="register"
                    onClick={() => {
                        setClose(false);
                    }}
                >
                    Регистрация
                </button>
            )}
        </div>
    );
};

export default User;
