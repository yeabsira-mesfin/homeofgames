import { Menu, MenuButton,MenuList,MenuItem,Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
const SortSelector = () => {
  return (
    <Menu>
    <MenuButton as={Button} leftIcon={<BsChevronDown />}>
     Order by relevance
    </MenuButton>
    <MenuList>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
      <MenuItem>Item 4</MenuItem>
      <MenuItem>Item 5</MenuItem>
      <MenuItem>Item 6</MenuItem>
    </MenuList>
  </Menu>
  )
}

export default SortSelector