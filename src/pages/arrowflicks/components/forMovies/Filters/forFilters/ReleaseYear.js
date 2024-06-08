import { purple500, grey300 } from "..//..//..//..//colors/Colors";
import { useState } from "react";

import {
    Combobox,
    useCombobox,
    InputBase,
    Input,
    ScrollArea,
} from "@mantine/core";

const ReleaseYear = ({ value, setValue, style }) => {
    let year = [];
    for (let i = 1950; i <= 2024; i++) {
        year.push(`${i}`);
    }
    const combobox = useCombobox();
    const [hover, setHover] = useState(null);
    const [hoverInput, setHoverInput] = useState(false);
    const options = year.map((item) => (
        <Combobox.Option
            value={item}
            key={item}
            onMouseEnter={() => {
                setHover(item);
            }}
            onMouseLeave={() => setHover(null)}
            style={{
                backgroundColor: hover === item ? purple500 : "white",
                color: hover === item ? "white" : "black",
            }}
        >
            {item}
        </Combobox.Option>
    ));
    return (
        <Combobox
            store={combobox}
            classNames={{
                option: style.option,
                dropdown: style.dropdown,
                options: style.options,
            }}
            onOptionSubmit={(val) => {
                setValue({
                    ...value,
                    year: {
                        name: val,
                        path: `&primary_release_year=${val}`,
                    },
                    activePage: { name: 1, path: "&page=1" },
                });

                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    component="button"
                    type="button"
                    pointer
                    label={"Release year"}
                    onMouseEnter={() => setHoverInput(true)}
                    onMouseLeave={() => setHoverInput(false)}
                    classNames={{
                        root: style.root,
                        wrapper: style.wrapper,
                        label: style.label,
                        input: style.input,
                        section: style.right_section,
                    }}
                    styles={{
                        input: {
                            border:
                                hoverInput || combobox.dropdownOpened
                                    ? `1px solid ${purple500}`
                                    : `1px solid ${grey300}`,
                        },
                    }}
                    rightSection={
                        combobox.dropdownOpened ? (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 15L12.7809 9.66938C12.3316 9.2842 11.6684 9.2842 11.2191 9.66938L5 15"
                                    stroke="#9854F6"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.33325 9L11.5523 14.3306C12.0017 14.7158 12.6648 14.7158 13.1142 14.3306L19.3333 9"
                                    stroke="#ACADB9"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        )
                    }
                    rightSectionPointerEvents="none"
                    onClick={() => combobox.toggleDropdown()}
                >
                    {value.year.name || (
                        <Input.Placeholder className={style.placeholder}>
                            Select release year
                        </Input.Placeholder>
                    )}
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>
                    <ScrollArea.Autosize
                        type="scroll"
                        className={style.scroll_area}
                    >
                        {options}
                    </ScrollArea.Autosize>
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};

export default ReleaseYear;
