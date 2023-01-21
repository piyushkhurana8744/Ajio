import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    useDisclosure,
    Button,
    Text
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'
const Menuitem = ({navitem,item1}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div style={{zIndex:"15px"}}>
      <Menu isOpen={isOpen} >
  <MenuButton as={Text} onMouseEnter={onOpen}
            onMouseLeave={onClose} rightIcon={<ChevronDownIcon />}>
    {navitem}
  </MenuButton>
  <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
    <MenuItem>{item1}</MenuItem>
  </MenuList>
</Menu>
    </div>
  )
}

export default Menuitem
