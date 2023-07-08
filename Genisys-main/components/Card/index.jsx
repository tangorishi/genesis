import {
  Box,
  Center,
  Text,
  Stack,
  Link,
  Button,
  Badge,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Card(props) {
  const status = props.status;
  var status_color;
  if (status === "ongoing") status_color = "green";
  else if (status === "completed") status_color = "red";
  else status_color = "purple";
  const title = props.title;
  // const t1 = title.substring(0, 1);
  const image = props.image;
  const type = props.type;
  const linkGH = props.linkGH;
  const date = props.date;
  const redirect = props.redirect;
  console.log(linkGH);
  return (
    <Center py={6}>
      <Box
        maxW={"375px"}
        minW={"300px"}
        minH={"550px"}
        w={"full"}
        borderRadius={"10px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        p={6}
        overflow={"hidden"}
      >
        <Center>
          <Box
            pt={"5"}
            px={"6"}
            h={"210px"}
            mb={6}
            pos={"relative"}
            bgImage={image}
            bgSize={"cover"}
            boxSize="350px"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          ></Box>
        </Center>
        <Stack px={"6"} paddingBottom={"1rem"}>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            pb={"1rem"}
            letterSpacing={1.7}
          >
            <Badge variant="outline" colorScheme={status_color}>
              {status} | {type}
            </Badge>
          </Text>
          <hr />
          <Box>
          <Flex alignItems={"center"}>
            <Text fontSize={"2xl"} pr={"0.1rem"} letterSpacing={2.0}>
              {title}
            </Text>
          </Flex>
          </Box>
          {date?"":<Link href={`/events/${title}`}><Button width={"100%"}>Register</Button></Link>}
          {date?"":<Link href={`/events/${title}`}><Button width={"100%"}>Learn More</Button></Link>}
        </Stack>
        <Text color={"gray.500"} px={"6"}>
          {date}
        </Text>
        {/* <Stack mt={4} direction={"row"} spacing={4} px={"4"}>
          <Link href={linkGH}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Show More Details
            </Button>
          </Link>
        </Stack> */}
      </Box>
    </Center>
  );
}
