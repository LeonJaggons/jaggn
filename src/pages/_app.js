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
    VStack,
    extendTheme,
} from "@chakra-ui/react";
import { BrandColors } from "@/styles/colors";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import {
    MdSpeaker,
    MdWbIridescent,
    MdWbTwighlight,
    MdWeb,
    MdWebAsset,
} from "react-icons/md";
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
                <JaggDesignHeader />
                <VStack flex={1}>
                    <Component {...pageProps} />
                </VStack>
            </Box>
        </ChakraProvider>
    );
}

const JaggDesignHeader = () => {
    return (
        <HStack
            px={"10vw"}
            justify={"space-between"}
            py={4}
            maxW={"100%"}
            w={"100vw"}
            // bg={"#191d28"}
            bg={"white"}
            top={0}
            position={"sticky"}
            zIndex={999}
        >
            <JaggDesignLogo />
            <JaggDesignNav />
        </HStack>
    );
};

const JaggDesignNav = () => {
    return (
        <HStack spacing={6} flex={1} justify={"flex-end"}>
            <MenuItem>Home</MenuItem>
            <MenuItem href={"/about"}>About</MenuItem>
            <MenuItem href={"/gallery"}>Gallery</MenuItem>
            <MenuItem href={"/contact"} button>
                Contact
            </MenuItem>
        </HStack>
    );
};

const MenuItem = ({ children, href, button }) => {
    return button ? (
        <Button
            as={NextLink}
            bg={"black"}
            borderRadius={0}
            href={href ?? "/"}
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"body"}
            letterSpacing={1}
            textDecoration={"none !important"}
            color={"white"}
            _hover={{
                bg: "blackAlpha.200",
                color: "black",
            }}
        >
            {children.toUpperCase()}
        </Button>
    ) : (
        <Link
            as={NextLink}
            href={href ?? "/"}
            letterSpacing={1}
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"body"}
            textDecoration={"none !important"}
            _hover={{
                color: "black",
                fontWeight: 600,
            }}
        >
            {children.toUpperCase()}
        </Link>
    );
};
const JaggDesignLogo = () => {
    return (
        <Link as={NextLink} href={"/"} textDecoration={"none !important"}>
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
