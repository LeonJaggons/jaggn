import {
    Box,
    Card,
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
            <VStack
                px="10%"
                zIndex={998}
                maxH={"60vh"}
                h={["calc(60vh - 66px)", "calc(60vh - 66px)", "60vh"]}
                align={"center"}
                justify={"center"}
                w={"100vw"}
                bg={"rgba(0, 0, 0,.8)"}
                color={"white"}
                textAlign={"center"}
            >
                <Heading size={"3xl"} letterSpacing={4} mb={4}>
                    OUR PROFESSIONAL WORK
                </Heading>
                <Heading
                    size={"md"}
                    fontWeight={400}
                    mb={6}
                    color={"whiteAlpha.800"}
                    fontFamily={"subheading"}
                >
                    Responsive designs
                </Heading>
                {/* <Button
                    as={Link}
                    href={"/contact"}
                    bg={"white"}
                    color={BrandColors.Primary}
                    borderRadius={0}
                    padding={"26px"}
                    letterSpacing={"-1"}
                    fontWeight={600}
                    fontFamily={"heading"}
                    fontSize={"16px"}
                    _hover={{
                        bg: "whiteAlpha.200",
                        color: "black",
                    }}
                >
                    GET TO KNOW US
                </Button> */}
            </VStack>
            <Image
                mt={"82px"}
                zIndex={0}
                left={0}
                top={0}
                position={"absolute"}
                src={"/about.jpg"}
                w={"full"}
                h={"60vh"}
                minH={"60vh"}
                style={{ objectFit: "cover" }}
            />
            <Box w={"full"} px={"0%"} py={"2%"} bg={"white"}>
                <Stack
                    direction={["column", "column", "row"]}
                    overflow={"scroll"}
                    spacing={12}
                    pb={8}
                    px={"5%"}
                >
                    {work.map((m) => (
                        <WorkCard {...m} />
                    ))}
                </Stack>
            </Box>
        </>
    );
};

const WorkCard = ({ title, url }) => {
    return (
        <Box
            bg={"white"}
            borderRadius={10}
            overflow={"hidden"}
            as={Link}
            textDecor={"none !important"}
            href={url}
            target={"_blank"}
            w={["100%", "100%", "900px", "900px"]}
            minW={["100%", "100%", "900px", "900px"]}
            border={"2px solid rgba(0,0,0,.4)"}
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
