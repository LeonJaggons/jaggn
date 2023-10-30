import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
    Box,
    Button,
    Card,
    CardBody,
    Center,
    HStack,
    Heading,
    Icon,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { BrandColors } from "@/styles/colors";
import {
    MdAppShortcut,
    MdCameraEnhance,
    MdDesignServices,
    MdPhone,
} from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <></>
            <Head>
                <title>Jaggn Design</title>
                <meta
                    name="description"
                    content="Jaggn Design - Your Partner in Web Development and Design. We create stunning websites, web applications, and digital solutions that elevate your online presence. With a team of experienced designers and developers, we bring your vision to life. Contact us today to transform your digital presence."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    property="og:image"
                    content="https://www.jaggndesign.com/about.jpg"
                />
                <meta
                    property="og:image:url"
                    content="https://www.jaggndesign.com/about.jpg"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://www.jaggndesign.com/about.jpg"
                />
                <meta property="og:url" content="https://www.jaggndesign.com" />
                <meta
                    property="og:title"
                    content="Jaggn Design - Beautiful Web Solutions"
                />
                <meta
                    property="og:description"
                    content="We create stunning websites, web applications, and digital solutions that elevate your online presence. With a team of experienced designers and developers, we bring your vision to life. Contact us today to transform your digital presence."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <video
                autoPlay
                loop
                muted
                style={{
                    height: "100vh",
                    width: "100vw",
                    objectFit: "cover",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    zIndex: 0,
                }}
            >
                <source src={"/main.mp4"} type={"video/mp4"} />
            </video>
            <HStack
                px="10%"
                zIndex={998}
                h={[
                    "calc(100vh - 148px)",
                    "calc(100vh - 148px)",
                    "calc(100vh - 82px)",
                ]}
                overflow={"hidden"}
                justify={"flex-start"}
                w={"100vw"}
                bg={"rgba(0, 0, 0,.75)"}
                spacing={"100px"}
                color={"white"}
                textAlign={["center", "center", "start"]}
            >
                <Box flex={2}>
                    <Heading size={"3xl"} letterSpacing={1} mb={4}>
                        SOFTWARE, WEB DEVELOPMENT, DESIGN
                    </Heading>
                    <Heading fontWeight={400} size="lg" mb={4}>
                        An all in one solution
                    </Heading>
                    <Text fontSize={14} lineHeight={2} mb={8}>
                        Visual Design, Professional Photography, Full Stack Web
                        Development all located in the United States and looking
                        for work around the globe.
                    </Text>
                    <Stack direction={["column", "column", "row"]}>
                        <Button
                            as={Link}
                            href={"tel:7079050264"}
                            bg={"whiteAlpha.700"}
                            color={"black"}
                            borderRadius={0}
                            padding={"26px"}
                            leftIcon={<Icon as={MdPhone} />}
                            letterSpacing={"-1"}
                            fontWeight={800}
                            fontFamily={"heading"}
                            fontSize={"22px"}
                            _hover={{
                                bg: "whiteAlpha.200",
                                color: "white",
                            }}
                            mr={2}
                        >
                            CALL NOW
                        </Button>
                        {/* <Button
                            as={Link}
                            href={"/contact"}
                            bg={"black"}
                            color={"white"}
                            borderRadius={0}
                            padding={"26px"}
                            letterSpacing={"-1"}
                            fontWeight={600}
                            fontFamily={"heading"}
                            fontSize={"18px"}
                            _hover={{
                                bg: "whiteAlpha.200",
                                color: "white",
                            }}
                        >
                            GET IN TOUCH
                        </Button> */}
                    </Stack>
                </Box>
            </HStack>
            {/* <VStack px={"10%"} spacing={"220px"} pt={"220px"}>
                <HStack alignItems={"center"} spacing={"18px"}>
                    <Center flex={1}>
                        <Box
                            w={"90%"}
                            aspectRatio={1}
                            bg={"black"}
                            borderRadius={"50%"}
                        />
                    </Center>
                    <Box flex={1}>
                        <Heading
                            color={BrandColors.Primary}
                            size={"xl"}
                            letterSpacing={1}
                            mb={4}
                        >
                            ABOUT ME
                        </Heading>
                        <Text fontSize={"15px"} mb={4} lineHeight={1.8}>
                            Voluptatem eaque quia neque voluptatem voluptatem
                            commodi velit perspiciatis. Nemo perferendis
                            corrupti velit cum iure accusamus consequatur.
                            Dolore est deserunt sit quos voluptatibus ullam
                            explicabo.
                        </Text>
                        <Text fontSize={"15px"} lineHeight={1.8}>
                            Necessitatibus qui magni veniam consectetur
                            perferendis possimus similique cum. Eaque explicabo
                            quaerat qui repellat et.
                        </Text>
                    </Box>
                </HStack>
                {/* <JDDivider /> 
                <VStack alignItems={"center"} textAlign={"center"}>
                    <Heading
                        size={"xl"}
                        color={BrandColors.Primary}
                        mb={2}
                        letterSpacing={1}
                    >
                        AREAS OF EXPERTISE
                    </Heading>
                    <Text mb={8}>
                        Repellendus nam aut nam quis. Ipsam assumenda porro ut
                        nulla magni. Et pariatur nostrum voluptatem.
                    </Text>
                    <HStack h={"full"} spacing={6}>
                        <ExpertiseCard
                        s    icon={MdDesignServices}
                            title={"WEB DESIGN"}
                            description={
                                "Ut non repellat minima mollitia quis aut illo sunt."
                            }
                        />
                        <ExpertiseCard
                            icon={MdAppShortcut}
                            title={"APP DEVELOPMENT"}
                            description={
                                "Ut non repellat minima mollitia quis aut illo sunt."
                            }
                        />
                        <ExpertiseCard
                            icon={MdCameraEnhance}
                            title={"PHOTOGRAPHY"}
                            description={
                                "Ut non repellat minima mollitia quis aut illo sunt."
                            }
                        />
                    </HStack>
                        </VStack> 
                <VStack>
                    <Heading></Heading>
                </VStack> 
            </VStack>
                        */}
        </>
    );
}

const ExpertiseCard = ({ title, description, icon }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hovering = () => setIsHovered(true);
    const notHovering = () => setIsHovered(false);
    return (
        <Card
            flex={1}
            bg={"blackAlpha.50"}
            border={"2px solid rgba(0,0,0,.2)"}
            borderRadius={0}
            minH={"280px"}
            cursor={"pointer"}
            _hover={{
                shadow: "lg",
            }}
            onMouseOver={hovering}
            onMouseOut={notHovering}
            display={"flex"}
            flexFlow={"column nowrap"}
        >
            <Center flex={1} h={"full"} textAlign={"center"} p={4}>
                <VStack spacing={4}>
                    <Icon as={icon} boxSize={"60px"} mb={2} />
                    <Heading fontWeight={400} fontSize={"xl"}>
                        {title}
                    </Heading>
                    <Text fontSize={"12px"}>{description}</Text>
                </VStack>
            </Center>
        </Card>
    );
};

const JDDivider = () => {
    return (
        <Box
            w={"full"}
            h={"1px"}
            borderRadius={8}
            bg={BrandColors.Primary}
            opacity={0.8}
        ></Box>
    );
};
