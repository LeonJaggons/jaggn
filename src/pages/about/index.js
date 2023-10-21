import { BrandColors } from "@/styles/colors";
import { Button, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const About = () => {
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
                    SEAMLESS SOFTWARE AND UX/UI DESIGN
                </Heading>
                <Heading
                    size={"md"}
                    fontWeight={400}
                    mb={6}
                    color={"whiteAlpha.800"}
                    fontFamily={"subheading"}
                >
                    From humble beginnings
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
        </>
    );
};

export default About;
