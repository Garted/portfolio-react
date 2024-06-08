export const SelectsData = () => {
    let year = [];
    for (let i = 1940; i <= 2024; i++) {
        year.push(`${i}`);
    }

    const selectData = {
        genre: {
            data: null,
            title: "Genres",
            placeholder: "Select genre",
        },
        year: {
            data: year,
            title: "Release year",
            placeholder: "Select release year",
        },
        sort: {
            data: [
                {
                    name: "Most popular",
                    path: "&sort_by=popularity.desc",
                },
                {
                    name: "Least popular",
                    path: "&sort_by=popularity.asc",
                },
                {
                    name: "Title A-Z",
                    path: "&sort_by=title.asc",
                },
                {
                    name: "Title Z-A",
                    path: "&sort_by=title.desc",
                },
                {
                    name: "Most Votes",
                    path: "&sort_by=vote_count.desc",
                },
                {
                    name: "Least Votes",
                    path: "&sort_by=vote_count.asc",
                },
                {
                    name: "Most vote average",
                    path: "&sort_by=vote_average.desc",
                },
                {
                    name: "Least vote average",
                    path: "&sort_by=vote_average.asc",
                },
            ],
            title: "Sort by",
        },
    };

    return selectData;
};
