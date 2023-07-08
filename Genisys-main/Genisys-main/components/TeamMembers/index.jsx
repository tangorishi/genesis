import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import FadeInUp from "../../components/Anim/FadeInUp";
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Link,
  Text,
  VStack,
  Avatar,
  Heading,
  HStack,
  IconButton,

} from "@chakra-ui/react";
import members from "./data.js";

import {
  FaLinkedin,
  FaBehanceSquare,
  FaInstagram,
  FaGithub,
  FaBehance
} from "react-icons/fa";

const Card = (props) => {
  const {name, image, position, team, github, linkedIn, behance, instagram, twitter} = props;
  return (
    <FadeInUp>
    <VStack
      marginY="2em"
      justifyItems="start"
      alignItems="center"
    >
      <Avatar
        size={"2xl"}
        src={image}
      />
      <Heading
        pt="2"
        as="h4"
        textAlign="center"
        size="md"
      >
        {name}
      </Heading>
      <Text
        fontSize="md"
        color="#8a9494"
        fontWeight="medium"
        textAlign="center"
      >
        {position}
      </Text>
      <HStack
        width="100%"
        justify="center"
      >
        {linkedIn && (
        <IconButton
          target="_blank"
          as={Link}
          href={linkedIn}
          variant="ghost"
          aria-label={`Linkedin link of ${name}`}
          icon={<FaLinkedin />}
          colorScheme="linkedin"
        />
        )}
        {instagram && (
        <IconButton
          target="_blank"
          as={Link}
          href={instagram}
          variant="ghost"
          aria-label={`Instagram link of ${name}`}
          icon={<FaInstagram />}
          colorScheme="pink"
        />
        )}
        {github && (
        <IconButton
          target="_blank"
          as={Link}
          href={github}
          variant="ghost"
          aria-label={`GitHub link of ${name}`}
          icon={<FaGithub />}
          colorScheme="facebook"
        />
        )}
        {twitter && (
        <IconButton
          target="_blank"
          as={Link}
          href={twitter}
          variant="ghost"
          aria-label={`Twitter link of ${name}`}
          icon={<FaBehance />}
          colorScheme="facebook"
        />
        )}
        {behance && (
        <IconButton
          target="_blank"
          as={Link}
          href={behance}
          variant="ghost"
          aria-label={`Behance link of ${name}`}
          icon={<FaBehance />}
          colorScheme="facebook"
        />
        )}
      </HStack>
    </VStack>
  </FadeInUp>
  )
};

const TeamMembers = () => {
  return (
    <Box>
      {/* <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Convener Panel
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "cp" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid> */}
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Executive Committee
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "ec" || res.team.toLowerCase() === "eccc" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Events
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "ccevents" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Sponsorship
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "ccsponsorship" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Curations
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "cccurations" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Marketing
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "ccmarketing" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Logistics
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "cclogistics" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Content
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "cccontent" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Finance
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "ccfinance" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Hospitality
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "cchospitality" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Graphic Design
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "ccgraphicdesign" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Web Development
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "ccwebdev" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Flying Squad
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "ccflyingsquad" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Crafts
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "cccrafts" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Core Committee - Media
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "ccmedia" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
    </Box>
  );
};

export default TeamMembers;
