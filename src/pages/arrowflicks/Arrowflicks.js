import React from "react";

import "./index.scss";

import App from "./App";
import { MantineProvider, DEFAULT_THEME } from "@mantine/core";

const Arrowflicks = () => {
    return (
        <MantineProvider
            theme={{
                fontFamily: "Inter, sans-serif",
                fontFamilyMonospace: "Poppins, sans-serif",
                headings: {
                    fontFamily: `Inter, ${DEFAULT_THEME.fontFamily}`,
                },
            }}
        >
            <App />
        </MantineProvider>
    );
};

export default Arrowflicks;
