import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logoImage from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack  justifyContent="space-between" padding='9px'>
      <Image src={logoImage} boxSize="59px" />
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
