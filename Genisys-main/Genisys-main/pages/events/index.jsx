import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer/index";
import FadeInUp from "../../components/Anim/FadeInUp";
import Timeline from "../../components/Timeline";
import Head from "next/head";
import {
  Box,
  Flex,
  Stack,
  Text,
  ChakraProvider,
  Button,
  Spacer,
  theme,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Events = () => {
  return (
    <ChakraProvider theme={theme}>
       <Head>
        <title>GENESIS - Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <FadeInUp>
        <Stack
          minH={"65vh"}
          bgColor={""}
          direction={{ base: "column", md: "row" }}
        >
          <Flex p={8} flex={1}>
            <Stack spacing={6} w={"full"} align={"center"}>
              <Text
                mt={"25vh"}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                letterSpacing={15.0}
              >
                EVENTS @ GENESIS
              </Text>
              <Text
                pt={"5rem"}
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                letterSpacing={5.0}
              >
                FASTEN YOUR SEATBELTS AND HOLD TIGHT. MAKE SURE YOU DO NOT MISS
                ANY OF THE UPCOMING EVENTS
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <Timeline />
      </FadeInUp>
      {/* <Box bgColor={"gray.100"}>
        <Stack spacingX={"5rem"} paddingBottom={"2.5rem"}>
          <Flex>
            <Wrap>
              <WrapItem>
            <Box>
              <Text
                fontSize={["xl", "2xl", "4xl"]}
                fontWeight={"bold"}
                pt={"5rem"}
                textAlign={"center"}
                letterSpacing={8}
              >
                NOT REGISTERED YET ! REGISTER NOW !
              </Text>
              <Text
                fontSize={["md", "xl", "2xl"]}
                py={"4"}
                pt={"6"}
                textAlign={"center"}
                letterSpacing={3.0}
              >
                Register now at a minimum registration fee of Rs. 300 only and
                get <br />
                to witness the largest techfest of Manipal University Jaipur.
              </Text>
            </Box>
            </WrapItem>
            <WrapItem>
            <Button
              bgColor={"blue.600"}
              color={"white"}
              py={"10"}
              fontSize={["xl", "2xl", "3xl"]}
              letterSpacing={4.0}
              _hover={{
                bgColor: "blue.400",
              }}
              style={{margin: "auto", width: "30rem"}}
            >
              REGISTER
            </Button>
            </WrapItem>
            </Wrap>
          </Flex>
        </Stack>
      </Box> */}
      <Footer />
    </ChakraProvider>
  );
};

export default Events;
