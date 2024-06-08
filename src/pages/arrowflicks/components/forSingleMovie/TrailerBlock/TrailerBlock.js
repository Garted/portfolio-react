import { Flex, Title, Divider, Text, Image, Box } from "@mantine/core";

const TrailerBlock = ({ trailer, singleMovieInfo, style }) => {
    return (
        <Flex className={style.trailer_block}>
            <Title order={2} className={style.trailer_title}>
                Trailer
            </Title>
            {trailer === null ? (
                <Box className={style.empty_trailer}>
                    <Text className={style.empty_trailer_text}>
                        We dont't have trailler about this movie
                    </Text>
                </Box>
            ) : (
                <iframe
                    className={style.video_block}
                    src={`https://www.youtube.com//embed/${trailer.key}?si=${trailer.id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboardWrite; encryptedMedia; gyroscope; picture-in-picture; webShare"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}

            <Divider></Divider>
            <Title order={2} className={style.trailer_title}>
                Description
            </Title>
            <Text className={style.trailer_descr}>{singleMovieInfo.descr}</Text>
            <Divider />
            <Title order={2} className={style.trailer_title}>
                Production
            </Title>
            <Flex className={style.production_wrap}>
                {singleMovieInfo.prodCompanies.map((item) => (
                    <Flex className={style.production_item} key={item.id}>
                        <Image
                            className={style.production_item_img}
                            src={`http://image.tmdb.org/t/p/w45${item.logo_path}`}
                        ></Image>
                        <Text className={style.production_item_text}>
                            {item.name}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default TrailerBlock;
