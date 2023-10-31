import {
    Megrim,
    DM_Serif_Display,
    DM_Sans,
    Delicious_Handrawn,
    Darker_Grotesque,
} from "next/font/google";
import "@fontsource/megrim";
import "@/styles/globals.css";
import {
    Box,
    Button,
    Center,
    ChakraProvider,
    HStack,
    Heading,
    Icon,
    IconButton,
    Stack,
    VStack,
    extendTheme,
} from "@chakra-ui/react";
import { BrandColors } from "@/styles/colors";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import { MdEmail, MdFace, MdFacebook, MdPhone } from "react-icons/md";
const delicious = Delicious_Handrawn({ subsets: ["latin"], weight: ["400"] });
const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});
const darker = Darker_Grotesque({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const theme = extendTheme({
    fonts: {
        megrim: delicious.style.fontFamily,
        heading: darker.style.fontFamily,
        subheading: dmSans.style.fontFamily,
        body: dmSans.style.fontFamily,
    },
    colors: {
        main: BrandColors.LightBrown,
    },
    Button: {
        baseStyle: {
            borderRadius: "0px",
        },
    },
});
export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Box
                minH={"100vh"}
                display={"flex"}
                flexFlow={"column nowrap"}
                w={"100vw"}
                style={{ maxWidth: "100% !important" }}
            >
                <Component {...pageProps} />
                <JaggDesignHeader />
            </Box>
        </ChakraProvider>
    );
}

const JaggDesignHeader = () => {
    return (
        <Stack
            pos={"absolute"}
            zIndex={999}
            direction={["column", "column", "row"]}
            bottom={0}
            left={0}
            px={"10vw"}
            align={"center"}
            justify={"space-between"}
            py={4}
            maxW={"100%"}
            w={"100vw"}
            textAlign={["center", "center", "start"]}
            bg={"black"}
        >
            <JaggDesignNav />
            <HStack
                justify={["space-around", "space-around", "end"]}
                w={"full"}
            >
                <SocialButton
                    type={"facebook"}
                    href={
                        "https://www.facebook.com/profile.php?id=61552392699824"
                    }
                    p={0}
                />
                <SocialButton
                    type={"email"}
                    href={
                        "mailto:info@jaggndesign.com?subject=I Need a Web Developer!"
                    }
                />
                <SocialButton
                    type={"phone"}
                    icon={<Icon as={MdPhone} boxSize={"22px"} />}
                    href={"tel:7079050264"}
                />
            </HStack>
        </Stack>
    );
};
const SocialButton = ({ type, href }) => {
    const getIcon = (iconType) => {
        switch (iconType) {
            case "facebook":
                return <Icon as={MdFacebook} boxSize={"22px"} />;
            case "email":
                return <Icon as={MdEmail} boxSize={"22px"} />;
            case "phone":
                return <Icon as={MdPhone} boxSize={"22px"} />;
        }
    };
    return (
        <IconButton
            as={Link}
            variant={"link"}
            href={href ?? "/"}
            icon={getIcon(type)}
            color={"whiteAlpha.800"}
            _hover={{
                color: "whiteAlpha.600",
            }}
        />
    );
};

const JaggDesignNav = () => {
    return (
        <HStack
            spacing={6}
            minW={["full", "full", "60vw"]}
            justify={"space-between"}
            flex={2}
            mr={[0, 0, "120px"]}
        >
            <MenuItem>Home</MenuItem>
            {/* <MenuItem href={"/about"}>About</MenuItem> */}
            <MenuItem href={"/gallery"}>Gallery</MenuItem>
            <MenuItem href={"tel:7079050264"} button>
                Contact
            </MenuItem>
        </HStack>
    );
};

const MenuItem = ({ children, href, button }) => {
    return button ? (
        <Button
            as={NextLink}
            borderRadius={0}
            href={href ?? "/"}
            fontSize={"xl"}
            color={"whiteAlpha.800"}
            fontWeight={600}
            fontFamily={"body"}
            letterSpacing={1}
            textDecoration={"none !important"}
            variant={"ghost"}
            _hover={{
                bg: "whiteAlpha.200",
                color: "whiteAlpha.600",
            }}
        >
            {children.toUpperCase()}
        </Button>
    ) : (
        <Link
            as={NextLink}
            href={href ?? "/"}
            letterSpacing={1}
            fontSize={"xl"}
            fontFamily={"body"}
            textDecoration={"none !important"}
            color={"whiteAlpha.800"}
            fontWeight={600}
            _hover={{
                //occurrence/6D51D44C-07F0-422D-9A48-6480F3E96113?method=show&options=more
                color: "white",
                // fontWeight: 600,
            }}
        >
            {children.toUpperCase()}
        </Link>
    );
};
const JaggDesignLogo = () => {
    return (
        <Link
            as={NextLink}
            href={"/"}
            textDecoration={"none !important"}
            flex={0}
            w={"fit-content"}
        >
            <HStack
                alignItems={"center"}
                borderBottomColor={BrandColors.Primary}
                // borderBottomWidth={1s}
                spacing={0}
                p={1}
                border={"2px solid black"}
            >
                {/* <Icon
                    as={MdWbIridescent}
                    boxSize={"26px"}
                    margin={0}
                    color={BrandColors.Primary}
                /> */}

                <Center bg={"black"} p={1} px={2}>
                    <Heading
                        fontFamily={"heading"}
                        size={"lg"}
                        margin={0}
                        style={{ fontWeight: 500, color: BrandColors.White }}
                    >
                        JAGGN
                    </Heading>
                </Center>
                <Center bg={"white"} p={1}>
                    <Heading
                        fontFamily={"heading"}
                        size={"lg"}
                        margin={0}
                        style={{ fontWeight: 800, color: "black" }}
                    >
                        DESIGN
                    </Heading>
                </Center>
                {/* <span
                        style={{
                            color: "rgba(0, 0, 0,.5)",
                            fontWeight: 400,
                        }}
                    >
                        DESIGN
                    </span>
                </Heading> */}
            </HStack>
        </Link>
    );
};
