import { HStack, Image, Text } from "@chakra-ui/react";
import logoImage from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props{
  onSearch: (searchText:string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack  justifyContent="space-between" padding='9px'>
      <Image src={logoImage} boxSize="59px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
