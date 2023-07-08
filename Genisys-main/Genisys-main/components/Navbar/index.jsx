import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Spacer,
  Text,
  Icon,
  Collapse,
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { MdMenu, MdClose } from "react-icons/md";
import NextLink from "next/link";
import NextImage from "next"

import NavLink from "./NavLink";
import navlogo from "./../../public/imgs/navlogo.jpeg";

const NavLinks = ({ closeMenu }) => (
  <>
    <NavLink to="/" onClick={closeMenu}>
      <Text
        fontSize={["md", "md", "md", "md", "md"]}
        fontWeight={"800"}
        p={"4"}
        pt={"8"}
        letterSpacing={8.0}
        backgroundColor={"#080c2c"}        
        px={"3rem"}
        color={"#c3c7c4"}        
        _hover={{
          color: "white",          
        }}
      >
        HOME
      </Text>
    </NavLink>
    <NavLink to="/events" onClick={closeMenu}>
      <Text
        fontSize={["md", "md", "md", "md", "md"]}
        fontWeight={"800"}
        p={"4"}
        pt={"8"}
        backgroundColor={"#080c2c"}        
        px={"3rem"}
        letterSpacing={8.0}
        color={"#c3c7c4"}        
        _hover={{
          color: "white",          
        }}
      >
        EVENTS
      </Text>
    </NavLink>
    {/* <NavLink to="/sponsors" onClick={closeMenu}>
      <Text
        fontSize={["md", "md", "md", "md", "md"]}
        fontWeight={"800"}
        p={"4"}
        pt={"8"}
        backgroundColor={"#080c2c"}        
        px={"3rem"}
        letterSpacing={8.0}
        color={"#c3c7c4"}        
        _hover={{
          color: "white",          
        }}
      >
        SPONSORS
      </Text>
    </NavLink> */}
    <NavLink to="/team" onClick={closeMenu}>
      <Text
        fontSize={["md", "md", "md", "md", "md"]}
        fontWeight={"800"}
        p={"4"}
        pt={"8"}
        backgroundColor={"#080c2c"}        
        px={"3rem"}
        letterSpacing={8.0}
        color={"#c3c7c4"}        
        _hover={{
          color: "white",          
        }}
      >
        TEAM
      </Text>
    </NavLink>
    <NavLink to="/register" onClick={closeMenu}>
      <Text
        p={"4"}
        pt={"8"}
        fontSize={["md", "md", "md", "md", "md"]}
        fontWeight={"800"}
        backgroundColor={"#080c2c"}        
        px={"3rem"}
        letterSpacing={8.0}
        color={"#c3c7c4"}        
        _hover={{
          color: "white",          
        }}
      >
        REGISTER
      </Text>
    </NavLink>
  </>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Box
        position={"fixed"}
        w={"100vw"}
        css={{ backgroundColor: "#080c2c"}}
        zIndex={"1"}
        pb={5}
      >
        <Flex
          h={16}
          align="space-between"
        >
          <NextLink href="/" passHref>
            <Text
              fontSize={["lg", "xl", "2xl", "3xl", "4xl"]}
              fontWeight={"800"}
              p={"4"}
              pb={"6vh"}
              letterSpacing={8.0}
              color={"white"}
              bgColor={"#080c2c"}
              // bgColor={"gray.900"}
              size={"md"}
              cursor={"pointer"}
            >
              GENESIS 2.0
            </Text>
          </NextLink>
          <Spacer />
          <HStack as="nav" spacing={4} display={{ base: "none", xl: "flex" }}>
            <NavLinks />
          </HStack>
          <Spacer />
          <Spacer />
          <IconButton
            bgColor={"#080c2c"}
            variant="ghost"
            color="white"
            borderRadius="0"
            p={"4"}
            pb={"6vh"}
            size="lg"
            icon={
              isOpen ? (
                <Icon as={MdClose} fontSize={"4xl"} color={"white"} />
              ) : (
                <Icon as={MdMenu} fontSize={"4xl"} color={"white"} />
              )
            }
            aria-label="Open Menu"
            display={{ xl: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
              textDecoration: "none",
              borderRadius: "50",
            }}
            _active={{
              bgColor: "transparent",
            }}
            _focus={{
              shadow: "none",
              border: "none",
            }}
          />
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p={4}
            bgColor="brand.700"
            width="100%"
            height="calc(100vh - 40px)"
            display={{ xl: "none" }}
          >
            <Stack
              as="nav"
              spacing={10}
              alignItems="center"
              justify="center"
              height="85%"
            >
              <NavLinks closeMenu={onClose} />
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </ChakraProvider>
  );
};

export default Navbar;
