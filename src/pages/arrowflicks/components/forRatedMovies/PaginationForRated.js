import { Pagination } from "@mantine/core";

const PaginationForRated = ({ page, setPage, pages, filmsList, style }) => {
    return (
        <Pagination
            total={pages}
            className={style.pagination}
            value={filmsList[`page${page}`] ? page : setPage(page - 1)}
            onChange={(value) => setPage(value)}
        />
    );
};

export default PaginationForRated;
