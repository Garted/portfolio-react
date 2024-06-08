import { purple500, grey300 } from "..//..//..//..//colors/Colors";
import { useState } from "react";
import {
    Combobox,
    useCombobox,
    InputBase,
    Input,
    ScrollArea,
    Flex,
} from "@mantine/core";

const SortBy = ({ sort, value, setValue, style }) => {
    const combobox = useCombobox();
    const [hover, setHover] = useState(null);
    const [hoverInput, setHoverInput] = useState(false);

    const options = sort.data.map((item) => (
        <Combobox.Option
            value={item.name}
            key={item.name}
            onMouseEnter={(e) => {
                setHover(item.name);
            }}
            onMouseLeave={() => setHover(null)}
            style={{
                backgroundColor: hover === item.name ? purple500 : "white",
                color: hover === item.name ? "white" : "black",
            }}
        >
            {item.name}
        </Combobox.Option>
    ));
    return (
        <Flex className={style.sort_by}>
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
                        sort: {
                            name: val,
                            path: sort.data.filter(
                                (item) => item.name === val
                            )[0].path,
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
                        label={sort.title}
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
                        {value.sort.name || (
                            <Input.Placeholder className={style.placeholder}>
                                Select sort
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
        </Flex>
    );
};

export default SortBy;
