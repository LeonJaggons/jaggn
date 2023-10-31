import {
    Box,
    Card,
    Center,
    HStack,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Stack,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import Iframe from "react-iframe";

const Gallery = () => {
    const work = [
        {
            title: "IQVIA",
            url: "https://www.iqvia.com/",
        },
        {
            title: "Cedaron Medical",
            url: "https://www.cedaron.com/",
        },
        {
            title: "Mike Smith Aviation",
            url: "https://mike-smith-aviation.web.app/",
        },
        // {
        //     title: "MarkIt",
        //     url: "https://mark-2kcwlu8wb-leonjaggons-projects.vercel.app/browse/",
        // },
    ];
    return (
        <>
            <HStack
                w={"full"}
                px={"0%"}
                bg={"black"}
                align={"center"}
                h={"100vh"}
                py={["160px", "160px", "0px"]}
                overflowY={"scroll"}
            >
                <Stack
                    direction={["column", "column", "row"]}
                    align={"center"}
                    overflow={"scroll"}
                    spacing={6}
                    px={"10%"}
                    pb={8}
                    w={"full"}
                >
                    {work.map((m) => (
                        <WorkCard {...m} />
                    ))}
                </Stack>
            </HStack>
        </>
    );
};

const WorkCard = ({ title, url }) => {
    const cardWidth = "75vw";
    return (
        <Box
            bg={"white"}
            borderRadius={0}
            overflow={"hidden"}
            as={Link}
            textDecor={"none !important"}
            href={url}
            target={"_blank"}
            aspectRatio={16 / 9}
            w={["100%", "100%", cardWidth, cardWidth]}
            minW={["100%", "100%", cardWidth, cardWidth]}
            border={"2px solid rgba(0,0,0,.9)"}
        >
            <Iframe
                url={url}
                display={"block"}
                scrolling={"no"}
                styles={{
                    aspectRatio: 16 / 9,
                    filter: "grayscale(.25)",
                    pointerEvents: "none",
                }}
                width="100%"
            />
        </Box>
    );
};

export default Gallery;
