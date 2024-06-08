export const Request = () => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTE2YzdkNTk3NTU2ZmJiZjhjZjk4MDIzOTE2YzIwNyIsInN1YiI6IjY2NDIyYTg3MmI1MWE4MjQ4NDIxMDdjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WEtex5blNrgiv-n7vr3meb1-g9xJOvskdsCaWFQAIKQ",
        },
    };
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/genre/movie/list?language=en",
                options
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const fetchFilm = async (param) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US${param}`,
                options
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const fetchSingleMovie = async (id) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
                options
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const fetchTrailerForSingleMovie = async (id) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
                options
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        fetchData,
        fetchFilm,
        fetchSingleMovie,
        fetchTrailerForSingleMovie,
    };
};
