import {
  ChakraProvider,
  theme,
  Box,
  chakra,
  Container,
  Stack,
  Link,
  Flex,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaGoogle, FaGithub } from "react-icons/fa";
// import { Link } from "next/link";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={"3vh"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        bottom={0}
        left={0}
        right={0}
        position={"absoulte"}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Flex>
            <Text>© 2022</Text>
            <Link href="https://ieeemuj.com/" px={"1rem"}>IEEE MUJ</Link>
            <Text> All rights reserved</Text>
          </Flex>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Gmail"} href={"mailto:"}>
              <FaGoogle />
            </SocialButton>
            <SocialButton label={"GitHub"} href={"https://github.com/ieeemuj/"}>
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/ieeemuj/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}
