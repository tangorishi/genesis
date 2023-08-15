import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Card from "../Card";
import events from "./events";
import FadeInUp from "../Anim/FadeInUp";
const Events = () => {
  return (
    <Box px={10} mx={6}>
      <FadeInUp>
       {/* <SimpleGrid columns={[1, 1, 1, 2, 3]} spacingX={"1.2rem"} px={"10vw"}> 
          {events.map((res) => (
            <Card
              key={res.key}
              image={res["image"]}
              type={res["type"]}
              title={res["title"]}
              desc={res["desc"]}
              auth_name={res["auth_name"]}
              auth_img={res["auth_img"]}
              link={res["link"]}
              tags={res["tags"]}
              linkGH={res["linkGH"]}
              status={res["status"]}
              date={res["date"]}
            />
          ))}
        </SimpleGrid> */}
      </FadeInUp>
    </Box>
  );
};

export default Events;
