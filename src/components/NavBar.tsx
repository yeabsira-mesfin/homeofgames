import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logoImage from "../assets/logo.webp";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logoImage} boxSize="59px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
