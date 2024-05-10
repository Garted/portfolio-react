import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

const RickAndMorty = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default RickAndMorty;
