import React from 'react'
import {Flex,Box,Text,Image,Center,Input,Button} from "@chakra-ui/react" 
import MobileItem from './MobileItem'
import {GiHamburgerMenu} from "react-icons/gi"
import {BsFillBagCheckFill} from "react-icons/bs"
import {Link} from "react-router-dom"
const MobileNav = () => {
  return (
    <div style={{paddingBottom:"10px"}}>
     <Flex padding="10px" alignItems={"center"} justifyContent="space-around" position={"fixed"} top="0" width="100%" zIndex={"999"} backgroundColor="#fff">
        <MobileItem nameitem={<GiHamburgerMenu />} item1={"New Collection"} item2={"WOMEN"} item3={"MEN"} item4={"KIDS"} item5={"WINTER WEAR"} item6={"BEAUTY"} item7={"WATCHES"} item8={"JEWELLERY"} item9={"INDIE"} item10={"STORES"}/>
        <Box>
        <Link to="/"><Image src="https://assets.ajio.com/static/img/Ajio-Logo.svg" width="100px" margin="auto"></Image></Link>
        </Box>
        <Button>SignIn</Button>
        <BsFillBagCheckFill style={{fontSize:"30px"}}
        />
        </Flex>
        <Input width="300px" marginTop="10px" placeholder={`Search by product,prices,and brand`}></Input>
    </div>
  )
}

export default MobileNav
