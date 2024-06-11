import { Flex, Image, Title, Text } from "@mantine/core";
import { grey600, purple500 } from "../../../colors/Colors";
import EmptyPosterBig from "../EmptyPosterBig/EmptyPosterBig";

const SingleMovieCardInfo = ({
    singleMovieInfo,
    id,
    open,
    setRateFilm,
    style,
}) => {
    let lcData = JSON.parse(localStorage.getItem("localData"));

    return (
        <Flex className={style.single_card_info}>
            <Flex className={style.single_card}>
                {singleMovieInfo.img === null ? (
                    <EmptyPosterBig style={style} />
                ) : (
                    <Image
                        className={style.card_img}
                        src={`http://localhost:3000/api/bigimg${singleMovieInfo.img}`}
                    />
                )}

                <Flex className={style.single_card_descr}>
                    <Title className={style.single_card_title}>
                        {singleMovieInfo.title}
                    </Title>
                    <Text className={style.single_card_year}>
                        {singleMovieInfo.year}
                    </Text>
                    <Flex className={style.single_stats}>
                        <Flex className={style.single_star}>
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.9999 19.7084L5.79926 23.4942L7.17476 15.4757L1.34143 9.79753L9.39143 8.63086L12.9918 1.33569L16.5921 8.63086L24.6421 9.79753L18.8088 15.4757L20.1843 23.4942L12.9999 19.7084Z"
                                    fill="#FAB005"
                                    stroke="#FAB005"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <Text className={style.single_star_text}>
                                {singleMovieInfo.voteAverage}
                            </Text>
                        </Flex>
                        <Text className={style.single_vote}>
                            {singleMovieInfo.voteCout}
                        </Text>
                    </Flex>
                    <Flex className={style.single_prop}>
                        <Flex className={style.single_prop_wrap}>
                            <Text className={style.prop_name}>Duration</Text>
                            <Text className={style.prop_value}>
                                {singleMovieInfo.duration}
                            </Text>
                        </Flex>

                        <Flex className={style.single_prop_wrap}>
                            <Text className={style.prop_name}>Premiere</Text>
                            <Text className={style.prop_value}>
                                {singleMovieInfo.premiere}
                            </Text>
                        </Flex>

                        <Flex className={style.single_prop_wrap}>
                            <Text className={style.prop_name}>Budget</Text>
                            <Text className={style.prop_value}>
                                {singleMovieInfo.budget === "$0"
                                    ? "Not information"
                                    : singleMovieInfo.budget}
                            </Text>
                        </Flex>

                        <Flex className={style.single_prop_wrap}>
                            <Text className={style.prop_name}>
                                Gross worldwide
                            </Text>
                            <Text className={style.prop_value}>
                                {singleMovieInfo.gross === "$0"
                                    ? "Not information"
                                    : singleMovieInfo.gross}
                            </Text>
                        </Flex>

                        <Flex className={style.single_prop_wrap}>
                            <Text className={style.prop_name}>Genres</Text>
                            <Text className={style.prop_value}>
                                {singleMovieInfo.genres}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Flex className={style.single_mark_wrap}>
                <svg
                    onClick={() => {
                        open();
                        setRateFilm(singleMovieInfo);
                    }}
                    cursor={"pointer"}
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill={purple500}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.9999 20.7084L6.79926 24.4942L8.17476 16.4757L2.34143 10.7975L10.3914 9.63086L13.9918 2.33569L17.5921 9.63086L25.6421 10.7975L19.8088 16.4757L21.1843 24.4942L13.9999 20.7084Z"
                        fill={
                            lcData.filter((i) => i.id === singleMovieInfo.id)
                                .length > 0 &&
                            lcData.filter((i) => i.id === singleMovieInfo.id)[0]
                                .rate !== null
                                ? { purple500 }
                                : "#D5D6DC"
                        }
                        stroke={
                            lcData.filter((i) => i.id === singleMovieInfo.id)
                                .length > 0 &&
                            lcData.filter((i) => i.id === singleMovieInfo.id)[0]
                                .rate !== null
                                ? { purple500 }
                                : "#D5D6DC"
                        }
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <Text className={style.mark_text}>
                    {lcData.filter((i) => i.id === singleMovieInfo.id).length >
                    0
                        ? lcData.filter((i) => i.id === singleMovieInfo.id)[0]
                              .rate
                        : null}
                </Text>
            </Flex>
        </Flex>
    );
};

export default SingleMovieCardInfo;
