import React from "react";
import { Box, SimpleGrid, Image, Text, Link } from "@chakra-ui/react";
import sponsors from "./sponsors";
import FadeInUp from "../Anim/FadeInUp";
const Sponsors = () => {
  return (
    <Box px={10} mx={6}>
      <FadeInUp>
        <SimpleGrid
          columns={[1, 1, 1, 2, 3]}
          spacingX={"1.2rem"}
          px={"13vw"}
          marginBottom={"3rem"}
        >
          {sponsors.map((res) => (
            <Box mb={"4"} key={res.key}>
              <Link href={res.link}>
                <Image src={res.image} mb={"2"} borderRadius={"10px"} />
              </Link>
              <Text>{res.desc}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </FadeInUp>
    </Box>
  );
};

export default Sponsors;
