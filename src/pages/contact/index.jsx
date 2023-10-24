import { BrandColors } from "@/styles/colors";
import {
    Box,
    Button,
    Card,
    CardBody,
    Center,
    Checkbox,
    Divider,
    HStack,
    Heading,
    Icon,
    Input,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdChat, MdEmail, MdPhone, MdTimelapse } from "react-icons/md";

const Contact = () => {
    const emptyLead = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
    };
    const [lead, setLead] = useState(emptyLead);
    return (
        <>
            <Stack
                direction={["column", "column", "column", "row"]}
                py={"2%"}
                px={"10%"}
                spacing={12}
                position={"relative"}
                bg={"black"}
                w={"full"}
            >
                <VStack
                    justify={"center"}
                    align={"flex-start"}
                    w={"50%"}
                    py={"22px"}
                >
                    <Heading
                        size={"2xl"}
                        mb={4}
                        letterSpacing={1}
                        color={"white"}
                    >
                        NEW PROJECT IN MIND?
                    </Heading>
                    <Heading
                        size={"lg"}
                        fontFamily={"subheading"}
                        fontWeight={400}
                        color={"whiteAlpha.800"}
                        mb={4}
                    >
                        LET'S TALK!
                    </Heading>
                    <HStack>
                        <Icon
                            as={MdTimelapse}
                            boxSize={"32px"}
                            color={"whiteAlpha.800"}
                        />
                        <Heading
                            size={"md"}
                            fontFamily={"subheading"}
                            fontWeight={400}
                            color={"whiteAlpha.900"}
                        >
                            RESPONSE IN LESS THAN AN HOUR
                        </Heading>
                    </HStack>
                    <Heading size={"lg"}></Heading>
                </VStack>
                {/* <Card
                    position={"fixed"}
                    borderRadius={0}
                    top={"108px"}
                    right={"42px"}
                    w={"40vw"}
                    maxH={"calc(100vh - 124px)"}
                >
                    <CardBody overflowY={"scroll"}>
                        <VStack w={"full"} mt={6} spacing={6}>
                            <Box>
                                <Heading
                                    textAlign={"center"}
                                    size={"sm"}
                                    color={"blackAlpha.700"}
                                    fontWeight={400}
                                    letterSpacing={1}
                                    fontFamily={"subheading"}
                                >
                                    DESCRIBE YOUR VISION AND
                                </Heading>
                                <Heading
                                    textAlign={"center"}
                                    size={"md"}
                                    color={"black"}
                                    letterSpacing={1}
                                >
                                    BOOK A MEETING TODAY
                                </Heading>
                            </Box>
                            <HStack w={"full"}>
                                <ContactInput
                                    label={"First Name"}
                                    onChange={(e) =>
                                        setLead({
                                            ...lead,
                                            firstName: e.target.value,
                                        })
                                    }
                                />
                                <ContactInput label={"Last Name"} />
                            </HStack>
                            <HStack w={"full"}>
                                <ContactInput label={"Email Address"} />
                            </HStack>
                            <HStack w={"full"}>
                                <ContactInput label={"Phone Number"} />
                            </HStack>
                            <HStack w={"full"}>
                                <ContactInput
                                    area
                                    label={
                                        "Anything else you'd like to discuss"
                                    }
                                />
                            </HStack>
                            <ServicesSelect />
                        </VStack>
                    </CardBody>
                    <Box p={4} borderTop={"1px solid rgba(0,0,0,.1)"}>
                        <Button
                            borderRadius={0}
                            bg={"black"}
                            w={"full"}
                            fontFamily={"subheading"}
                            p={6}
                            fontSize={"14px"}
                            color={"white"}
                        >
                            SEND MESSAGE
                        </Button>
                    </Box>
                </Card> */}
            </Stack>
            <Box w={"50%"} alignSelf={"flex-start"} pt={"32px"} px={"10%"}>
                <Heading
                    fontSize={"26px"}
                    color={"black"}
                    fontFamily={"subheading"}
                >
                    ALTERNATE CONTACTS
                </Heading>
                <Divider my={4} borderBottomColor={"purple.200"} />
                <VStack w={"100%"} alignItems={"flex-start"} spacing={4}>
                    <HStack spacing={4}>
                        <Icon as={MdEmail} boxSize={"24px"} color={"black"} />
                        <Link href={"mailto:info@jaggondesign.com"}>
                            info@jaggndesign.com
                        </Link>
                    </HStack>
                    <HStack spacing={4}>
                        <Icon as={MdPhone} boxSize={"24px"} color={"black"} />
                        <Text>+17079050264</Text>
                    </HStack>
                    <HStack spacing={4}>
                        <Icon as={MdChat} boxSize={"24px"} color={"black"} />
                        <Text>Chat with us</Text>
                    </HStack>
                </VStack>
            </Box>
        </>
    );
};

const ServicesSelect = () => {
    return (
        <VStack alignItems={"flex-start"} w={"full"}>
            <Heading size={"xs"}>Services</Heading>
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={2} w={"full"}>
                <Checkbox>Web Design</Checkbox>
                <Checkbox>App Development</Checkbox>
                <Checkbox>Photography</Checkbox>
                <Checkbox>Content Creation</Checkbox>
                <Checkbox>SEO Optimization</Checkbox>
            </SimpleGrid>
        </VStack>
    );
};
const ContactInput = ({ label, area }) => {
    return (
        <VStack alignItems={"flex-start"} flex={1}>
            <Heading size={"xs"}>{label}</Heading>
            {area ? (
                <Textarea
                    colorScheme={"blackAlpha"}
                    borderRadius={0}
                    w={"full"}
                    variant={"filled"}
                    _hover={{
                        borderColor: "black",
                    }}
                />
            ) : (
                <Input
                    colorScheme={"purple"}
                    borderRadius={0}
                    w={"full"}
                    variant={"filled"}
                    _focus={{
                        borderColor: "black",
                    }}
                ></Input>
            )}
        </VStack>
    );
};
export default Contact;
