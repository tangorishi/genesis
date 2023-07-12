import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import NextImage from "next/image";
import FadeInUp from "../../Anim/FadeInUp";
import ResponsiveContainer from "../ResponsiveContainer";
import FooterSection from "./FooterSection";
import FooterSectionContact from "./FooterSectionContact";
import FooterSectionHeading from "./FooterSectionHeading";
import FooterSectionLink from "./FooterSectionLink";
import FooterSectionSocialIcon from "./FooterSectionSocialIcon";
import FooterSectionSocialLink from "./FooterSectionSocialLink";
import NextLink from "../../NextLink";
import genesisLogo from "../../../pages/public/imgs/footerlogo.png";
import ieeeLogo from "../../../pages/public/imgs/logo.png";
import ieeecsLogo from "../../../pages/public/imgs/ieeecs.svg";
import ieeewieLogo from "../../../pages/public/imgs/ieeewie.svg";
import ieeerasLogo3 from "../../../pages/public/imgs/ieeerasLogo3.png";
const Footer = () => (
  <>
    <Box
      bgColor="transparent"
      width="100%"
      
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      paddingTop="40px"
      paddingBottom="20px"
    >
      <FadeInUp>
        <ResponsiveContainer>
          <Stack
            direction={["column", "column", "column", "column", "row"]}
            columns={[1, 1, 1, 1, 3]}
            width="100%"
            alignItems="flex-start"
            justifyItems="center"
            spacing="48px"
          >
            <VStack width={["100%", "100%", "100%", "100%", "100%"]}>
              <HStack>
                <NextImage src={genesisLogo} alt="Genesis Logo" />
                <NextImage src={ieeeLogo} alt="IEEE SB MUJ Logo" />
                <NextImage src={ieeecsLogo} alt="IEEE CS Logo" />
                <NextImage src={ieeewieLogo} alt="IEEE WIE Logo" />
                <NextImage src={ieeerasLogo3} alt="IEEE RAS LOGO"/>
              </HStack>

              <HStack width="100%" height="100px">
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/genesismuj"
                  underline
                >
                  Genesis 
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/genesismuj"
                  underline
                >
                    IEEE RAS
                 </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/genesismuj"
                  underline
                > 
                  IEEE WIE
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/genesismuj"
                  underline
                >
                  IEEE SB
                </FooterSectionSocialLink>
              </HStack>
            </VStack>
            <VStack width="100%" spacing={10}>
              <FooterSection>
                <FooterSectionHeading>Contact Us</FooterSectionHeading>
                <FooterSectionContact
                  number="+919999214243"
                  name="Aarohi Manchanda"
                >
                  +91 99992 14243
                </FooterSectionContact>
                <FooterSectionContact number="+917073189955" name="Mahi Jain">
                  +91 70731 89955
                </FooterSectionContact>
                <FooterSectionLink href="mailto:ieee@muj.manipal.edu">
                  ieee@muj.manipal.edu
                </FooterSectionLink>
              </FooterSection>
            </VStack>
            <VStack width="100%" spacing={10}>
              <FooterSection>
                <FooterSectionHeading>Links</FooterSectionHeading>
                <NextLink color="white" to="http://jaipur.manipal.edu/">
                  MUJ Official Website
                </NextLink>
                <NextLink color="white" to="http://www.ieeemuj.com">
                  IEEE MUJ Website
                </NextLink>
              </FooterSection>
            </VStack>
          </Stack>
        </ResponsiveContainer>
      </FadeInUp>
    </Box>
    <Flex
      bgColor="transparent"
      width="100%"
      height="32px"
      textAlign="center"
      justifyItems="center"
      alignItems="center"
      color="white"
      fontWeight="bold"
      fontFamily="monospace"
    >
      <Text width="100%" fontSize="sm">
        MADE WITH ❤️ USING OPEN SOURCE
      </Text>
    </Flex>
  </>
);

export default Footer;
