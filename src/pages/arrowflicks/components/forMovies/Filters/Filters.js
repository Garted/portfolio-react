import { Flex, Loader } from "@mantine/core";
import Genres from "./forFilters/Genres";
import ReleaseYear from "./forFilters/ReleaseYear";
import Ratings from "./forFilters/Ratings";
import ResetFilters from "./forFilters/ResetFilters";
import SortBy from "./forFilters/SortBy";

const Filters = ({
    genre,
    year,
    sort,
    genreList,
    value,
    setValue,
    resetFilter,
    style,
}) => {
    return (
        <>
            <Flex className={style.filters_wrap}>
                {genre.data === null ? (
                    <Flex className={style.loader_wrap}>
                        <Loader size={72}></Loader>
                    </Flex>
                ) : (
                    <>
                        <Genres
                            style={style}
                            value={value}
                            genreList={genreList}
                            genre={genre}
                            setValue={setValue}
                            resetFilter={resetFilter}
                        />
                        <ReleaseYear
                            style={style}
                            year={year}
                            value={value}
                            setValue={setValue}
                        />
                        <Ratings
                            style={style}
                            value={value}
                            setValue={setValue}
                            resetFilter={resetFilter}
                        />
                        <ResetFilters
                            style={style}
                            value={value}
                            setvalue={setValue}
                            resetFilter={resetFilter}
                        />
                    </>
                )}
            </Flex>
            <SortBy
                value={value}
                setValue={setValue}
                sort={sort}
                style={style}
            />
        </>
    );
};

export default Filters;
