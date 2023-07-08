import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Card from "../Card";
import events from "../Timeline/events.js";
import FadeInUp from "../Anim/FadeInUp";
const Gevents = () => {
  return (
    <Box px={10} mx={6}>
      <FadeInUp>
        <SimpleGrid columns={[1, 1, 1, 2, 3]} spacingX={"1.2rem"} px={"13vw"}>
          {events.map((res) => (
            <Card
              key={res.keys}
              image={res["image"]}
              redirect={res["redirect"]}
              type={res["type"]}
              title={res["title"]}
              desc={res["s_desc"]}
              auth_name={res["auth_name"]}
              auth_img={res["auth_img"]}
              link={res["link"]}
              tags={res["tags"]}
              linkGH={res["linkGH"]}
              status={`${res["dates"]} | ${res["time"]}`}
            />
          ))}
        </SimpleGrid>
      </FadeInUp>
    </Box>
  );
};

export default Gevents;
