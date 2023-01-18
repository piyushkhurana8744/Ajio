import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Image, Button,Text } from "@chakra-ui/react";
import axios from "axios";

const MenPage = () => {
  const [menData, setMenData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const ApiFetch = () => {
    axios
      .get("http://localhost:8080/data")
      .then((res) => {
        console.log(res.data);
        setMenData(res.data);
        setFilteredData(res.data.slice(230,338));
      });
  };

  useEffect(() => {
    ApiFetch();
    // console.log("cat",cat)
  }, []);

  const filterByCategory = (category) => {
    const filteredData = menData.filter((item) => {
      return item.category === category;
    });
    setFilteredData(filteredData);
    console.log(filteredData)
  };

  return (
    <Flex width="90%" justifyContent="space-between" mx="10px">
      <Box float="center">
      <Button onClick={(()=>{ApiFetch()})}>All</Button>
      <Button onClick={(()=>{filterByCategory("shirt")})}>SHIRTS</Button> 
      <Button onClick={(()=>{filterByCategory("t-shirt")})}>T-SHIRTS</Button>
      <Button onClick={(()=>{filterByCategory("jeans")})}>jeans</Button>
      
      
        <Heading position="fixed">Hello</Heading>
        
      </Box>
      <Box
        width="70%"
        display="grid"
        gridTemplateColumns="repeat(3,1fr)"
        gap="40px"
             mt="20px"
      >
        {filteredData.map((el) => (
          <Box justifyContent="center"  textAlign="center"  _hover={{
            transform: "scale(1.01)"
          }}    > 

          {/* css={{ 
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)" 
          }} */}
            <Image src={el.image} alt="not found" w="270px" h="350px" _hover={{
            transform: "scale(1.01)"
          }}/>
            {/* <Flex justifyContent="center" textAlign="center"> */}
              <Text mt="0" mb="0"   >{el.brand}</Text>
              <Text mt="0" mb="0">{el.name}</Text>
              <Text mt="0" mb="0">{el.offerPrices}</Text>
             
              
            {/* </Flex> */}
            <Box><Button>Add to cart</Button></Box>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default MenPage;

