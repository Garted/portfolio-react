import { grey500, grey300, purple500 } from "..//..//..//..//colors/Colors";
import { useState } from "react";

import {
    Combobox,
    useCombobox,
    InputBase,
    Input,
    ScrollArea,
    Flex,
} from "@mantine/core";

const Ratings = ({ value, setValue, style }) => {
    const comboboxFrom = useCombobox();
    const comboboxTo = useCombobox();
    const [hover, setHover] = useState(null);
    const [hoverInputFrom, setHoverInputFrom] = useState(false);
    const [hoverInputTo, setHoverInputTo] = useState(false);
    const arrFrom = (value) => {
        let arr = [];
        if (value.to.name !== null) {
            for (let i = 1; i <= value.to.name; i++) {
                arr.push(`${i}`);
            }
        } else {
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        }
        return arr;
    };
    const fromData = arrFrom(value);

    const arrTo = (value) => {
        let arr = [];
        if (value.from.name !== null) {
            for (let i = value.from.name; i <= 10; i++) {
                arr.push(`${i}`);
            }
        } else {
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        }
        return arr;
    };
    const toData = arrTo(value);

    const optionsFrom = fromData.map((item) => (
        <Combobox.Option
            value={item}
            key={item}
            // maw={"120px"}
            onMouseEnter={(e) => {
                setHover(item);
            }}
            onMouseLeave={() => setHover(null)}
            style={{
                borderRadius: "8px",
                backgroundColor: hover === item ? purple500 : "white",
                color: hover === item ? "white" : "black",
            }}
        >
            {item}
        </Combobox.Option>
    ));
    const optionsTo = toData.map((item) => (
        <Combobox.Option
            value={item}
            key={item}
            onMouseEnter={() => {
                setHover(item);
            }}
            onMouseLeave={() => setHover(null)}
            style={{
                borderRadius: "8px",
                backgroundColor: hover === item ? purple500 : "white",
                color: hover === item ? "white" : "black",
            }}
        >
            {item}
        </Combobox.Option>
    ));

    return (
        <Flex className={style.ratings_wrap}>
            <Combobox
                classNames={{
                    option: style.option,
                    dropdown: style.dropdown,
                    options: style.options,
                }}
                store={comboboxFrom}
                onOptionSubmit={(val) => {
                    setValue((prevState) => ({
                        ...prevState,
                        from: {
                            name: val,
                            path: `&vote_average.gte=${val}`,
                        },
                        activePage: { name: 1, path: "&page=1" },
                    }));

                    comboboxFrom.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <InputBase
                        component="button"
                        type="button"
                        pointer
                        label={"From"}
                        onMouseEnter={() => setHoverInputFrom(true)}
                        onMouseLeave={() => setHoverInputFrom(false)}
                        classNames={{
                            root: style.rating_root,
                            wrapper: style.rating_wrapper,
                            input: style.rating_input,
                            label: style.rating_label,
                            section: style.rating_right_section,
                        }}
                        styles={{
                            input: {
                                border:
                                    hoverInputFrom ||
                                    comboboxFrom.dropdownOpened
                                        ? `1px solid ${purple500}`
                                        : `1px solid ${grey300}`,
                            },
                        }}
                        rightSection={
                            <Flex className={style.rating_wrap}>
                                <Flex className={style.wrap}>
                                    <svg
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.66681 4.5L5.55728 1.83469C5.33259 1.6421 5.00103 1.6421 4.77633 1.83469L1.66681 4.5"
                                            stroke="#ACADB9"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </Flex>
                                <Flex className={style.wrap}>
                                    <svg
                                        style={{ rotate: "180deg" }}
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.66681 4.5L5.55728 1.83469C5.33259 1.6421 5.00103 1.6421 4.77633 1.83469L1.66681 4.5"
                                            stroke="#ACADB9"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </Flex>
                            </Flex>
                        }
                        rightSectionPointerEvents="none"
                        onClick={() => comboboxFrom.toggleDropdown()}
                    >
                        {value.from.name || (
                            <Input.Placeholder className={style.placeholder}>
                                From
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
                            {optionsFrom}
                        </ScrollArea.Autosize>
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>

            <Combobox
                store={comboboxTo}
                classNames={{
                    option: style.option,
                    dropdown: style.dropdown,
                    options: style.options,
                }}
                onOptionSubmit={(val) => {
                    setValue((prevState) => ({
                        ...prevState,
                        to: {
                            name: val,
                            path: `&vote_average.lte=${val}`,
                        },
                        activePage: { name: 1, path: "&page=1" },
                    }));

                    comboboxTo.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <InputBase
                        component="button"
                        type="button"
                        pointer
                        label={"To"}
                        onMouseEnter={() => setHoverInputTo(true)}
                        onMouseLeave={() => setHoverInputTo(false)}
                        classNames={{
                            root: style.rating_root,
                            wrapper: style.rating_wrapper,
                            input: style.rating_input,
                            label: style.rating_label,
                            section: style.rating_right_section,
                        }}
                        styles={{
                            input: {
                                border:
                                    hoverInputTo || comboboxFrom.dropdownOpened
                                        ? `1px solid ${purple500}`
                                        : `1px solid ${grey300}`,
                            },
                        }}
                        rightSection={
                            <Flex className={style.rating_wrap}>
                                <Flex className={style.wrap}>
                                    <svg
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.66681 4.5L5.55728 1.83469C5.33259 1.6421 5.00103 1.6421 4.77633 1.83469L1.66681 4.5"
                                            stroke="#ACADB9"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </Flex>
                                <Flex className={style.wrap}>
                                    <svg
                                        style={{ rotate: "180deg" }}
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.66681 4.5L5.55728 1.83469C5.33259 1.6421 5.00103 1.6421 4.77633 1.83469L1.66681 4.5"
                                            stroke="#ACADB9"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </Flex>
                            </Flex>
                        }
                        rightSectionPointerEvents="none"
                        onClick={() => comboboxTo.toggleDropdown()}
                    >
                        {value.to.name || (
                            <Input.Placeholder className={style.placeholder}>
                                To
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
                            {optionsTo}
                        </ScrollArea.Autosize>
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </Flex>
    );
};

export default Ratings;
