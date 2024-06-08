import { Button } from "@mantine/core";
import { grey500, purple500 } from "../../../../colors/Colors";
import { useHover } from "@mantine/hooks";
const ResetFilters = ({ resetFilter, style }) => {
    const { hovered, ref } = useHover();
    return (
        <Button
            ref={ref}
            onClick={resetFilter}
            className={style.reset_filter}
            c={hovered ? purple500 : grey500}
        >
            Reset filters
        </Button>
    );
};
export default ResetFilters;
