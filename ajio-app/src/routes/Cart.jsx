import React from 'react';
import axios from 'axios';
import {Box,Text,Grid} from '@chakra-ui/react';
import {SidebarContext} from '../context/SidebarContextProvider';

const Cart = () => {

  

  const getCartItems = async () => {
    let res = await axios.get(`http://localhost:8080/data`);
    let data = res.data.filter((elem)=> elem.quantity !== 0);
    console.log(data)
  }

  React.useEffect(()=>{
    getCartItems();
  },[]);
  return (
    <Box>
        <Box>
            <Text as="b" fontSize={'2xl'} >My Bag ({} items) </Text>
        </Box>
        <Box></Box>
    </Box>
  )
}

export default Cart