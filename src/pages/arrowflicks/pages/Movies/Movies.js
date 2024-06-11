import { Box, Title, Flex } from "@mantine/core";
import { useState, useEffect } from "react";
import { SelectsData } from "../../SelectsData/SelectsData";
import FilmCard from "../../components/forMovies/FilmCard/FilmCard";
import { useStateData } from "../../state/stateData";
import Filters from "../../components/forMovies/Filters/Filters";
import PaginationComponent from "../../components/forMovies/Pagination/PaginationComponent";
import LeftSide from "../../components/LeftSide/LeftSide";
import style from "./Movies.module.scss";
import BurgerMenu from "../../components/burgerMenu/BurgerMenu";
import OverlayWrap from "../../components/overlay/OverlayWrap";

const Movies = ({
    activeTab,
    setActiveTab,
    open,
    setRateFilm,
    showMenu,
    toggle,
}) => {
    const { genreList, filmsList, totalPages, loadData } = useStateData();

    const [value, setValue] = useState({
        genre: { name: [], path: "" },
        year: { name: null, path: "" },
        from: { name: null, path: "" },
        to: { name: null, path: "" },
        activePage: { name: 1, path: "&page=1" },
        sort: { name: "Most popular", path: "&sort_by=popularity.desc" },
    });

    const generateRequestString = (value) => {
        const str =
            value.activePage.path +
            value.sort.path +
            value.genre.path +
            value.year.path +
            value.from.path +
            value.to.path;
        return str;
    };
    const requestString = generateRequestString(value);
    console.log(requestString);
    useEffect(() => {
        loadData(requestString);
    }, [requestString]);

    const selectData = SelectsData();
    const { genre, year, sort } = selectData;
    genre.data = genreList;

    const resetFilter = () => {
        setValue((prevState) => {
            const newValue = {
                genre: { name: [], path: "" },
                year: { name: null, path: "" },
                from: { name: null, path: "" },
                to: { name: null, path: "" },
                activePage: { name: 1, path: "&page=1" },
                sort: {
                    name: "Most popular",
                    path: "&sort_by=popularity.desc",
                },
            };
            if (JSON.stringify(prevState) !== JSON.stringify(newValue)) {
                return newValue;
            }
            return prevState;
        });
    };
    console.log("render movies");
    const sharedProps = {
        value,
        setValue,
        resetFilter,
    };

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

                <Box className={style.movies_wrap}>
                    {window.innerWidth < 993 ? (
                        <BurgerMenu
                            setActiveTab={setActiveTab}
                            toggle={toggle}
                            showMenu={showMenu}
                        />
                    ) : null}

                    <Title order={1} className={style.movies_title}>
                        Movies
                    </Title>
                    <Filters
                        style={style}
                        genre={genre}
                        year={year}
                        sort={sort}
                        genreList={genreList}
                        {...sharedProps}
                    />
                    <Flex className={style.cards_wrap}>
                        <FilmCard
                            style={style}
                            filmsList={filmsList}
                            open={open}
                            setRateFilm={setRateFilm}
                        />
                    </Flex>
                    <PaginationComponent
                        filmsList={filmsList}
                        totalPages={totalPages}
                        {...sharedProps}
                        style={style}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Movies;
