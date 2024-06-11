import "./App.scss";
import { Box } from "@mantine/core";
import Movies from "./pages/Movies/Movies";
import RatedMovies from "./pages/RatedMovies/RatedMovies";
import SingleMovie from "./pages/SingleMovie/SingleMovie";
import { Route, Routes } from "react-router";
import Page404 from "./pages/Page404/Page404";
// import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import ModalRating from "./components/modal/ModalRating";
import sty from "./modules/App.module.scss";

function App() {
    const [activeTab, setActiveTab] = useState("/arrowflicks");
    const [opened, { open, close }] = useDisclosure(false);
    const [rateFilm, setRateFilm] = useState(null);
    const [showMenu, { toggle }] = useDisclosure(false);
    console.log(activeTab);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    console.log("render App");

    return (
        <Box
            className={sty.app}
            style={
                showMenu
                    ? {
                          width: "100%",
                          position: "fixed",
                      }
                    : null
            }
        >
            <Routes>
                <Route
                    index
                    element={
                        <Movies
                            showMenu={showMenu}
                            toggle={toggle}
                            rateFilm={rateFilm}
                            setRateFilm={setRateFilm}
                            open={open}
                            opened={opened}
                            close={close}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    }
                />
                <Route
                    path="/:id"
                    element={
                        <SingleMovie
                            showMenu={showMenu}
                            toggle={toggle}
                            rateFilm={rateFilm}
                            setRateFilm={setRateFilm}
                            open={open}
                            opened={opened}
                            close={close}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    }
                />

                <Route
                    path="ratedmovies"
                    element={
                        <RatedMovies
                            showMenu={showMenu}
                            toggle={toggle}
                            rateFilm={rateFilm}
                            setRateFilm={setRateFilm}
                            open={open}
                            opened={opened}
                            close={close}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    }
                />

                <Route
                    path="*"
                    element={
                        <Page404
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    }
                />
            </Routes>
            <ModalRating opened={opened} close={close} rateFilm={rateFilm} />
        </Box>
    );
}

export default App;
