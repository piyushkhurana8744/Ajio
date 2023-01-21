import React from 'react'
import {Link} from "react-router-dom"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from "@chakra-ui/icons"
const MobileItem = ({nameitem,item1,item2,item3,item4,item5,item6,item7,item8,item9,item10}) => {
  return (
    <div style={{zIndex:"5"}}>
      <Menu>
  <MenuButton as={Button}>
    {nameitem}
  </MenuButton>
  <MenuList>
    <MenuItem>{item1}</MenuItem>
    <Link to="/women"><MenuItem>{item2}</MenuItem></Link>
    <Link to="/men"><MenuItem>{item3}</MenuItem></Link>
    <Link to="/kids"><MenuItem>{item4}</MenuItem></Link>
    <MenuItem>{item5}</MenuItem>
    <MenuItem>{item6}</MenuItem>
    <MenuItem>{item7}</MenuItem>
    <MenuItem>{item8}</MenuItem>
    <MenuItem>{item9}</MenuItem>
    <MenuItem>{item10}</MenuItem>
  </MenuList>
</Menu>
    </div>
  )
}

export default MobileItem
