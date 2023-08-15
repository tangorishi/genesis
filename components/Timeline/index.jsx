import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Card from "../Card";
import events from "./events";
import FadeInUp from "../Anim/FadeInUp";

const Timeline = () => {
  return (
    <Box px={10} mx={6} my={10}>
      <FadeInUp>
        <SimpleGrid columns={[1, 1, 1, 2, 3]} spacingX={"1.2rem"} px={"11vw"}>
          {events.map((res) => (
            <Box
              key={res.key}
              transition="box-shadow 0.3s"
              _hover={{
                boxShadow: "0px 8px 160px 0px rgba(0,0,0,1)",
              }}
            >
              <Card
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
                form={res["form"]}
              />
            </Box>
          ))}
        </SimpleGrid>
      </FadeInUp>
    </Box>
  );
};

export default Timeline;

