import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer/index";
import FadeInUp from "../../components/Anim/FadeInUp";
import EventDetails from "../../components/EventDetails";
import Events from "../../components/Timeline/events";
import Head from "next/head";

import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Stack,
  Text,
  theme,
  ChakraProvider,
  Button,
} from "@chakra-ui/react";

const Details = () => {
  const slug =  useRouter().query.slug;
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>GENESIS - {slug}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <FadeInUp>
        <Stack
          minH={"45vh"}
          bgColor={""}
          direction={{ base: "column", md: "row" }}
        >
          <Flex px={8} flex={1}>
            <Stack spacing={6} w={"full"} align={"center"}>
              <Text
                mt={"25vh"}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                letterSpacing={15.0}
              >
                {slug}
              </Text>
            </Stack>
          </Flex>
        </Stack>
        {Events.map((event) => {
          if (event.title === slug) {
            return (
              <EventDetails
                key={event.keys}
                image={event.image}
                desc={event.desc}
                type={event.type}
                title={event.title}
                team_size={event.team_size}
                dates={event.dates}
                time={event.time}
                venue={event.venue}
                form={event.form}
              />
            );
          }
        })}
      </FadeInUp>
      <Footer />
    </ChakraProvider>
  );
};

export default Details;
