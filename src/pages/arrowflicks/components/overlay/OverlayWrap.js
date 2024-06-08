import { Overlay } from "@mantine/core";

const OverlayWrap = ({ toggle }) => {
    return (
        <Overlay
            onClick={toggle}
            zIndex={5}
            pos={"fixed"}
            style={{
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
            }}
        />
    );
};

export default OverlayWrap;
