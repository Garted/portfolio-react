import { useState } from "react";
import { Request } from "../requests/Request";
import { format } from "date-fns";

export const useStateData = () => {
    const {
        fetchData,
        fetchFilm,
        fetchSingleMovie,
        fetchTrailerForSingleMovie,
    } = Request();
    const [genreList, setGenreList] = useState(null);
    const [filmsList, setFilmsList] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const [singleMovieInfo, setSingleMovieInfo] = useState(null);
    const [trailer, setTrailer] = useState(null);

    const loadData = (requestString) => {
        setFilmsList(null);
        Promise.all([fetchData(), fetchFilm(requestString)])
            .then(([genre, films]) => {
                setGenreList(genre.genres);
                setFilmsList(
                    films.results.map((item) => ({
                        id: item.id,
                        title: item.original_title,
                        year: item.release_date.slice(0, 4),
                        voteAverage: item.vote_average.toString().slice(0, 3),
                        voteCout: item.vote_count,
                        img: item.poster_path,
                        genres: item.genre_ids.map((id) => {
                            return genre.genres.filter(
                                (item) => item.id === id
                            )[0].name;
                        }),
                    }))
                );
                setTotalPages(films.total_pages);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const loadInfoForSingleMovie = (str) => {
        Promise.all([fetchSingleMovie(str), fetchTrailerForSingleMovie(str)])
            .then(([info, trailer]) => {
                setTrailer(
                    trailer.results.length === 0
                        ? null
                        : {
                              key: trailer.results[0].key,
                              id: trailer.results[0].id,
                          }
                );
                setSingleMovieInfo({
                    id: info.id,
                    title: info.original_title,
                    year: info.release_date.slice(0, 4),
                    voteAverage: info.vote_average.toString().slice(0, 3),
                    voteCout: info.vote_count,
                    img: info.poster_path,
                    duration: `${Math.floor(info.runtime / 60)}h ${
                        info.runtime % 60
                    }m`,
                    budget: info.budget
                        .toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })
                        .slice(0, -3),
                    descr: info.overview,
                    premiere: format(
                        new Date(info.release_date),
                        "MMMM d, yyyy"
                    ),
                    prodCompanies: info.production_companies,
                    gross: info.revenue
                        .toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })
                        .slice(0, -3),
                    genres: info.genres.map((item) => item.name).join(", "),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return {
        genreList,
        filmsList,
        totalPages,
        trailer,
        singleMovieInfo,
        loadInfoForSingleMovie,
        loadData,
    };
};
