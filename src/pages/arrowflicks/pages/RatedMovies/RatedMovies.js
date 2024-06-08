import LeftSide from "../../components/LeftSide/LeftSide";
import FilmCard from "../../components/forMovies/FilmCard/FilmCard";
import SearchPanell from "../../components/forRatedMovies/SearchPanell";
import { useEffect, useState } from "react";

import { Box, Text, Flex } from "@mantine/core";
import PaginationForRated from "../../components/forRatedMovies/PaginationForRated";
import EmptyRatedList from "../../components/forRatedMovies/EmptyRatedList";
import style from "..//Movies/Movies.module.scss";
import BurgerMenu from "../../components/burgerMenu/BurgerMenu";
import OverlayWrap from "../../components/overlay/OverlayWrap";

const RatedMovies = ({
    activeTab,
    setActiveTab,
    open,
    setRateFilm,
    showMenu,
    toggle,
}) => {
    const [renderTime, setRenderTime] = useState("");
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(null);
    console.log("render rated");

    let lcData =
        JSON.parse(localStorage.getItem("localData")).filter((item) =>
            item.title.toLowerCase().includes(renderTime.toLowerCase())
        ).length === 0
            ? JSON.parse(localStorage.getItem("localData"))
            : JSON.parse(localStorage.getItem("localData")).filter((item) =>
                  item.title.toLowerCase().includes(renderTime.toLowerCase())
              );

    const pageSize = 4;

    const mutData = {};
    for (let i = 0; i < lcData.length; i++) {
        const pageNumber = Math.floor(i / pageSize) + 1;
        if (!mutData[`page${pageNumber}`]) {
            mutData[`page${pageNumber}`] = [];
        }
        mutData[`page${pageNumber}`].push(lcData[i]);
    }
    const pagesCount = () => {
        setPages(Object.keys(mutData).length);
    };
    useEffect(() => {
        pagesCount();
    }, [mutData]);

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
                {lcData.length === 0 ? (
                    <EmptyRatedList setActiveTab={setActiveTab} />
                ) : (
                    <Box className={style.movies_wrap}>
                        {window.innerWidth <= 993 ? (
                            <BurgerMenu
                                setActiveTab={setActiveTab}
                                toggle={toggle}
                                showMenu={showMenu}
                            />
                        ) : null}
                        <Flex className={style.rated_search_wrap}>
                            <Text className={style.rated_title}>
                                Rated Movies
                            </Text>
                            <SearchPanell
                                style={style}
                                setRenderTime={setRenderTime}
                                setPages={setPages}
                            />
                        </Flex>
                        <Flex className={style.cards_wrap} mt={"40px"}>
                            <FilmCard
                                activeTab={activeTab}
                                style={style}
                                filmsList={mutData[`page${page}`]}
                                open={open}
                                setRateFilm={setRateFilm}
                            />
                        </Flex>
                        <PaginationForRated
                            style={style}
                            filmsList={mutData}
                            pages={pages}
                            page={page}
                            setPage={setPage}
                        />
                    </Box>
                )}
            </Box>
        </>
    );
};

export default RatedMovies;
