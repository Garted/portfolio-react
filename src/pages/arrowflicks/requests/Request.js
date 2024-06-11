export const Request = () => {
    const fetchData = async () => {
        try {
            const res = await fetch(
                "https://server-weld-nine.vercel.app/api/genres"
            );

            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const fetchFilm = async (additionalString) => {
        try {
            const res = await fetch(
                "https://server-weld-nine.vercel.app/api/films",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ additionalString }),
                }
            );

            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const fetchSingleMovie = async (id) => {
        try {
            const res = await fetch(
                "https://server-weld-nine.vercel.app/api/singlemovie",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id }),
                }
            );
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const fetchTrailerForSingleMovie = async (id) => {
        try {
            const res = await fetch(
                "https://server-weld-nine.vercel.app/api/trailler",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id }),
                }
            );
            const data = await res.json();
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
