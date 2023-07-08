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
  theme,
} from "@chakra-ui/react";
import Sponsors from "../../components/Sponsors";

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
            <Stack spacing={6} w={"full"} align={"center"}>
              <Text
                mt={"25vh"}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                letterSpacing={15.0}
              >
                SPONSORS @ GENESIS
              </Text>
              <Text
                pt={"5rem"}
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                letterSpacing={5.0}
              >
                WE ARE SO GRATEFUL FOR YOUR LOVE AND SUPPORT
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <Sponsors />
      </FadeInUp>
      <Footer />
    </ChakraProvider>
  );
};

export default Events;
