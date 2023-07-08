import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer/index";
import FadeInUp from "../../components/Anim/FadeInUp";
import Gevent from "../../components/Events/gindex";
import Timeline from "../../components/Timeline";
import Head from "next/head";
import {
  Box,
  Flex,
  Stack,
  Text,
  ChakraProvider,
  Button,
  theme,
} from "@chakra-ui/react";

const Events = () => {
  return (
    <ChakraProvider theme={theme}>
       <Head>
        <title>GENESIS - Sponsors</title>
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
            <Stack spacing={6} w={"full"} h={"60vh"} align={"center"}>
              <Text
                mt={"25vh"}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                letterSpacing={15.0}
              >
                REGISTER @ GENESIS
              </Text>
              <Text
                pt={"5rem"}
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                letterSpacing={5.0}
              >
                WE ARE SO GRATEFUL FOR YOUR LOVE AND SUPPORT
              </Text>
              {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSduivLMI9so-cqgAEvhJSFr7SxyAd58dJNHUmS76gILlns2Mw/viewform?embedded=true" width="640" height="947" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe> */}
            </Stack>
          </Flex>
        </Stack>
        <Stack>
          <Gevent />
        </Stack>
      </FadeInUp>
      <Footer />
    </ChakraProvider>
  );
};

export default Events;
