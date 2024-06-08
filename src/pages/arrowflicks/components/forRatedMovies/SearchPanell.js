import { Button, Input } from "@mantine/core";
import { grey300, purple500 } from "../../colors/Colors";
import { useState } from "react";

const SearchPanell = ({ setRenderTime, setPages, style }) => {
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [inputValue, setInputValue] = useState("");

    return (
        <Input.Wrapper
            className={style.rated_searchpanel}
            styles={{
                root: {
                    border:
                        focused || hovered
                            ? `1px solid ${purple500}`
                            : `1px solid ${grey300}`,
                },
            }}
            onMouseEnter={() => setHovered(true)}
            onFocus={() => setFocused(true)}
            onMouseLeave={() => setHovered(false)}
            onBlur={() => setFocused(false)}
            onKeyDown={(event) => {
                if (event.key === "Enter") {
                    setRenderTime(inputValue);
                }
                setPages(1);
            }}
        >
            <Input
                placeholder="Search movie title"
                value={inputValue}
                classNames={{
                    input: style.searchpanel_input,
                }}
                leftSection={
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.468 11.468L14.5714 14.5714M13.0924 7.54622C13.0924 10.6093 10.6093 13.0924 7.54622 13.0924C4.48313 13.0924 2 10.6093 2 7.54622C2 4.48313 4.48313 2 7.54622 2C10.6093 2 13.0924 4.48313 13.0924 7.54622Z"
                            stroke="#ACADB9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                }
                onChange={(e) => {
                    setInputValue(e.currentTarget.value);
                }}
            />
            <Button
                className={style.search_button}
                onClick={() => {
                    setRenderTime(inputValue);
                    setPages(1);
                }}
            >
                Search
            </Button>
        </Input.Wrapper>
    );
};

export default SearchPanell;
