import {
    Box,
    Card,
    HStack,
    Heading,
    Image,
    Link,
    SimpleGrid,
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
                h={"60vh"}
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
            <Box py={12} w={"full"} px={"10%"}>
                <SimpleGrid columns={1} spacing={12}>
                    {work.map((m) => (
                        <WorkCard {...m} />
                    ))}
                </SimpleGrid>
            </Box>
        </>
    );
};

const WorkCard = ({ title, url }) => {
    return (
        <Card
            shadow={"md"}
            bg={"white"}
            borderRadius={0}
            as={Link}
            href={url}
            target={"_blank"}
        >
            <Iframe
                url={url}
                display={"block"}
                styles={{
                    aspectRatio: 16 / 9,
                    filter: "grayscale(.25)",
                }}
            />
            <Box p={4} borderTop={"1px solid rgba(0,0,0,.1)"}>
                <Heading>{title}</Heading>
            </Box>
        </Card>
    );
};

export default Gallery;
