import { Pagination } from "@mantine/core";
const PaginationComponent = ({
    value,
    totalPages,
    setValue,
    style,
    filmsList,
}) => {
    return (
        <Pagination
            total={
                value.activePage.name >= 3 && totalPages > value.activePage.name
                    ? value.activePage.name + 1
                    : value.activePage.name >= totalPages
                    ? value.activePage.name
                    : totalPages < 3
                    ? totalPages
                    : 3
            }
            value={value.activePage.name}
            className={style.pagination}
            style={
                filmsList === null || filmsList.length === 0
                    ? { display: "none" }
                    : { display: "flex" }
            }
            onChange={(value) =>
                setValue((prevState) => ({
                    ...prevState,
                    activePage: { name: value, path: `&page=${value}` },
                }))
            }
        />
    );
};

export default PaginationComponent;
