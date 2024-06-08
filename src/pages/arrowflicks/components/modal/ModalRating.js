import { Modal, Text, Rating, Flex, Button } from "@mantine/core";
import { grey200, purple500 } from "../../colors/Colors";
import { useEffect, useState } from "react";

const ModalRating = ({ opened, close, rateFilm }) => {
    const [mark, setMark] = useState(null);
    const [renderModal, setRenderModal] = useState(false);

    useEffect(() => {
        setMark(null);
    }, [renderModal]);

    return (
        <Modal.Root
            opened={opened}
            onClose={() => {
                close();
            }}
        >
            <Modal.Overlay />
            <Modal.Content maw={"380px"} h={"auto"} radius={"8px"}>
                <Modal.Header
                    p={"16px"}
                    style={{
                        borderBottom: `1px solid ${grey200}`,
                    }}
                >
                    <Modal.Title fw={400} fz={"16px"} lh={"140%"}>
                        Your Rating
                    </Modal.Title>
                    <Modal.CloseButton />
                </Modal.Header>
                <Modal.Body
                    h={"auto"}
                    p={"16px"}
                    display={"flex"}
                    style={{
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <Text fw={700} fz={"16px"} lh={"140%"}>
                        {rateFilm !== null ? rateFilm.title : "film"}
                    </Text>
                    <Rating
                        value={
                            JSON.parse(localStorage.getItem("localData")) ===
                                null || rateFilm === null
                                ? mark
                                : JSON.parse(localStorage.getItem("localData"))
                                      .length > 0 &&
                                  JSON.parse(
                                      localStorage.getItem("localData")
                                  ).filter((item) => item.id === rateFilm.id)
                                      .length > 0
                                ? JSON.parse(
                                      localStorage.getItem("localData")
                                  ).filter((item) => item.id === rateFilm.id)[0]
                                      .rate
                                : mark
                        }
                        onChange={(target) => {
                            setMark(target);
                        }}
                        size="lg"
                        count={10}
                    />
                    <Flex>
                        <Button
                            w={"73px"}
                            h={"40px"}
                            radius={"8px"}
                            ff={"monospace"}
                            fw={600}
                            fz={"14px"}
                            lh={"140%"}
                            onClick={() => {
                                let data = JSON.parse(
                                    localStorage.getItem("localData")
                                );

                                if (data !== null) {
                                    const existingFilm = data.find(
                                        (film) => film.id === rateFilm.id
                                    );
                                    if (existingFilm && mark !== null) {
                                        localStorage.setItem(
                                            "localData",
                                            JSON.stringify(
                                                data.map((film) =>
                                                    film.id === rateFilm.id
                                                        ? {
                                                              ...rateFilm,
                                                              rate: mark,
                                                          }
                                                        : film
                                                )
                                            )
                                        );
                                    } else if (mark === null) {
                                        localStorage.setItem(
                                            "localData",
                                            JSON.stringify(
                                                data.filter(
                                                    (film) =>
                                                        film.id !== rateFilm.id
                                                )
                                            )
                                        );
                                    } else {
                                        localStorage.setItem(
                                            "localData",
                                            JSON.stringify([
                                                ...data,
                                                {
                                                    ...rateFilm,
                                                    rate: mark,
                                                },
                                            ])
                                        );
                                    }
                                } else {
                                    localStorage.setItem(
                                        "localData",
                                        JSON.stringify([
                                            {
                                                ...rateFilm,
                                                rate: mark,
                                            },
                                        ])
                                    );
                                }

                                close();

                                setMark(null);
                            }}
                        >
                            Save
                        </Button>
                        <Button
                            w={"auto"}
                            h={"40px"}
                            bg={"none"}
                            c={purple500}
                            ff={"monospace"}
                            fw={600}
                            fz={"14px"}
                            lh={"140%"}
                            onClick={() => {
                                let data = JSON.parse(
                                    localStorage.getItem("localData")
                                );

                                localStorage.setItem(
                                    "localData",
                                    JSON.stringify(
                                        data.filter(
                                            (item) => item.id !== rateFilm.id
                                        )
                                    )
                                );
                                setRenderModal(!renderModal);
                            }}
                        >
                            Remove rating
                        </Button>
                    </Flex>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
};

export default ModalRating;
