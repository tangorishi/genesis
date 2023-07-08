import React from "react";
import { Box, useColorModeValue, Image, Button, Text, Flex, Center } from "@chakra-ui/react";
import Card from "../Card/index"
import Events from "../Timeline/events";

const EventDetails = (props) => {
  return (
    <Box>
      <Center style={{"display": "flex", "flex-wrap": "wrap", "align-items": "center"}}>
      {/* <Card
              key={props.keys}
              image={props.image}
              redirect={props.redirect}
              type={props.type}
              title={props.title}
              desc={props.s_desc}
              auth_name={props.auth_name}
              auth_img={props.auth_img}
              link={props.link}
              tags={props.tags}
              linkGH={props.linkGH}
            /> */}
            <Image src={props.image} width={"30rem"} boxShadow={"10px 10px 25px darkblue"}></Image>
      <Box margin={"0 0 0 2.5rem"} padding={"0 0 0 2.5rem"} borderLeft={"2px dotted black"}>
      <Text
                fontSize={["md", "xl", "2xl"]}
                py={"4"}
                pt={"6"}
                maxW={"800"}
                textAlign={"center"}
                letterSpacing={3.0}
                style={{"text-align": "left"}}
              >
                <b>Description:</b> {props.desc}
              </Text>
        <Text fontSize={["md", "xl", "2xl"]}
                py={"4"}
                pt={"6"}
                maxW={"800"}
                textAlign={"center"}
                letterSpacing={3.0}
                style={{"text-align": "left"}}>
                  <b>Team Size:</b> {props.team_size}
        </Text>
        <Text fontSize={["md", "xl", "2xl"]}
                py={"4"}
                pt={"6"}
                maxW={"800"}
                textAlign={"center"}
                letterSpacing={3.0}
                style={{"text-align": "left"}}>
                  <b>Prize:</b> {props.prize}
        </Text>
        <Text fontSize={["md", "xl", "2xl"]}
                py={"4"}
                pt={"6"}
                maxW={"800"}
                textAlign={"center"}
                letterSpacing={3.0}
                style={{"text-align": "left"}}>
                  <b>Date & Time:</b> {`${props.dates} | ${props.time}`}
        </Text>
        <Text fontSize={["md", "xl", "2xl"]}
                py={"4"}
                pt={"6"}
                maxW={"800"}
                textAlign={"center"}
                letterSpacing={3.0}
                style={{"text-align": "left"}}>
                  <b>Venue:</b> {props.venue}
        </Text>
      </Box>
      </Center>
      <Center>
      <Text fontSize={["xl", "3xl", "5xl"]}
                py={"4"}
                pt={"6"}
                maxW={"800"}
                textAlign={"center"}
                letterSpacing={3.0}
                style={{"text-align": "left"}}>
                  Register Here for {props.title}
                </Text>
      </Center>
      <Center>
      <Box mb={"10"}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScgZVRZLUTzaBUdIe4yzNUE_JF2sJ-gink1HZqsupQDaugD0A/viewform?embedded=true" width="1000" height="1200" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      
      </Box>
      </Center>
    </Box>
  );
};

export default EventDetails;
