import { useParams } from "react-router";
import { Box, Text, Flex, Anchor, Loader } from "@mantine/core";
import { Link } from "react-router-dom";
import LeftSide from "../../components/LeftSide/LeftSide";

import SingleMovieCardInfo from "../../components/forSingleMovie/SingleMovieCardInfo/SingleMovieCardInfo";
import TrailerBlock from "../../components/forSingleMovie/TrailerBlock/TrailerBlock";
import { useStateData } from "../../state/stateData";
import { useEffect } from "react";
import style from "..//Movies/Movies.module.scss";
import BurgerMenu from "../../components/burgerMenu/BurgerMenu";
import OverlayWrap from "../../components/overlay/OverlayWrap";

const SingleMovie = ({
    activeTab,
    setActiveTab,
    open,
    setRateFilm,
    rend,
    showMenu,
    toggle,
}) => {
    console.log("render singleMovie");
    let { id } = useParams();
    console.log(id);
    const { loadInfoForSingleMovie, trailer, singleMovieInfo } = useStateData();

    useEffect(() => {
        loadInfoForSingleMovie(id);
    }, []);
    console.log(singleMovieInfo);
    return (
        <>
            {showMenu ? <OverlayWrap toggle={toggle} /> : null}
            <Box className={style.movies}>
                <LeftSide
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    style={style}
                    showMenu={showMenu}
                    toggle={toggle}
                />
                <Flex className={style.single_film_wrap}>
                    {window.innerWidth <= 993 ? (
                        <BurgerMenu
                            setActiveTab={setActiveTab}
                            toggle={toggle}
                            showMenu={showMenu}
                        />
                    ) : null}
                    {singleMovieInfo === null ? (
                        <Flex justify={"center"}>
                            <Loader size={300} />
                        </Flex>
                    ) : (
                        <>
                            <Flex className={style.head_links_wrap}>
                                <Anchor
                                    component={Link}
                                    to={"/arrowflicks"}
                                    className={style.link}
                                    onClick={() => setActiveTab("/arrowflicks")}
                                >
                                    Movies
                                </Anchor>

                                <Text className={style.text}>/</Text>
                                <Anchor
                                    component={Link}
                                    to={`/arrowflicks/${id}`}
                                    className={style.link}
                                >
                                    {singleMovieInfo.title}
                                </Anchor>
                            </Flex>

                            <SingleMovieCardInfo
                                style={style}
                                rend={rend}
                                setRateFilm={setRateFilm}
                                open={open}
                                singleMovieInfo={singleMovieInfo}
                                id={id}
                            />
                            <TrailerBlock
                                style={style}
                                trailer={trailer}
                                singleMovieInfo={singleMovieInfo}
                            />
                        </>
                    )}
                </Flex>
            </Box>
        </>
    );
};

export default SingleMovie;
