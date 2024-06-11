import { Flex, Image, Title, Text, Loader, Anchor } from "@mantine/core";
import { grey600, purple500 } from "../../../colors/Colors";
import EmrtyFilmsList from "../EmptyFilmsList/EmrtyFilmsList";
import { Link } from "react-router-dom";
import EmptyPoster from "./EmptyPoster/EmptyPoster";

const FilmCard = ({ filmsList, open, setRateFilm, style }) => {
    let lcData = JSON.parse(localStorage.getItem("localData"));

    return (
        <>
            {filmsList === null ? (
                <Flex className={style.loader_wrap}>
                    <Loader size={100} className={style.loader} />
                </Flex>
            ) : filmsList.length === 0 ? (
                <EmrtyFilmsList style={style} />
            ) : (
                filmsList.map((item) => {
                    return (
                        <Flex key={item.id} className={style.card_wrap}>
                            <Anchor
                                component={Link}
                                to={`/arrowflicks/${item.id}`}
                                c={"black"}
                                underline="never"
                            >
                                <Flex className={style.card}>
                                    {item.img === null ? (
                                        <EmptyPoster style={style} />
                                    ) : (
                                        <Image
                                            className={style.card_img}
                                            src={`http://localhost:3000/api/img${item.img}`}
                                        />
                                    )}
                                    <Flex className={style.card_descr}>
                                        <Title
                                            order={2}
                                            c={purple500}
                                            className={style.card_title}
                                        >
                                            {item.title}
                                        </Title>
                                        <Text
                                            className={style.card_year}
                                            c={grey600}
                                        >
                                            {item.year}
                                        </Text>
                                        <Flex
                                            className={style.card_rating_wrap}
                                        >
                                            <Flex className={style.card_rating}>
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
                                                <Text
                                                    className={
                                                        style.card_rating_text_grey
                                                    }
                                                >
                                                    {item.voteAverage}
                                                </Text>
                                            </Flex>

                                            <Text
                                                className={
                                                    style.card_rating_text
                                                }
                                                c={grey600}
                                            >
                                                ({item.voteCout})
                                            </Text>
                                        </Flex>
                                        <Flex
                                            className={style.card_genres_wrap}
                                        >
                                            <Text
                                                className={style.genres_left}
                                                c={grey600}
                                            >
                                                Genres
                                            </Text>
                                            <Text
                                                className={style.genres_right}
                                            >
                                                <span>
                                                    {Array.isArray(item.genres)
                                                        ? item.genres
                                                              .slice(0, 3)
                                                              .join(",")
                                                        : item.genres}
                                                </span>
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Anchor>
                            <Flex className={style.rate_film_wrap}>
                                <svg
                                    onClick={() => {
                                        open();
                                        setRateFilm(item);
                                    }}
                                    cursor={"pointer"}
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill={purple500}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        width="28"
                                        height="28"
                                        d="M12.9999 19.7084L5.79926 23.4942L7.17476 15.4757L1.34143 9.79753L9.39143 8.63086L12.9918 1.33569L16.5921 8.63086L24.6421 9.79753L18.8088 15.4757L20.1843 23.4942L12.9999 19.7084Z"
                                        fill={
                                            lcData !== null &&
                                            lcData.filter(
                                                (i) => i.id === item.id
                                            ).length > 0 &&
                                            lcData.filter(
                                                (i) => i.id === item.id
                                            )[0].rate !== null
                                                ? { purple500 }
                                                : "#D5D6DC"
                                        }
                                        stroke={
                                            lcData !== null &&
                                            lcData.filter(
                                                (i) => i.id === item.id
                                            ).length > 0 &&
                                            lcData.filter(
                                                (i) => i.id === item.id
                                            )[0].rate !== null
                                                ? { purple500 }
                                                : "#D5D6DC"
                                        }
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <Text className={style.rate_film_mark}>
                                    {lcData !== null &&
                                    lcData.filter((i) => i.id === item.id)
                                        .length > 0
                                        ? lcData.filter(
                                              (i) => i.id === item.id
                                          )[0].rate
                                        : null}
                                </Text>
                            </Flex>
                        </Flex>
                    );
                })
            )}
        </>
    );
};

export default FilmCard;
