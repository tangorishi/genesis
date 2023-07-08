import React from 'react'
import { Box,Stack,Text, SimpleGrid, ChakraProvider, theme } from "@chakra-ui/react";
// import Card from "../Card";
import SpeakerCard from "./SpeakerCard.jsx";
import FadeInUp from "../Anim/FadeInUp";  
const Speaker = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bgColor={"white"} pt={"3rem"}>
      <Text
      fontSize={{ base: "xl", md: "2xl", lg: "50px" }}
      letterSpacing={15.0}
      px={"6rem"}
      pb={"3rem"}
      >
        Our Speakers
      </Text>
      <Stack>
        <SpeakerCard />
      </Stack>
      </Box>
    </ChakraProvider>
  )
}

export default Speaker