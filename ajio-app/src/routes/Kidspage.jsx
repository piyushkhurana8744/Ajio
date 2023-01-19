import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Refindedby from "../components/Refindedby";
import { Text, Box, Flex, Center,Grid ,Input,Select,Image,GridItem,Button, grid} from "@chakra-ui/react";
import axios from "axios"
const Kidspage = () => {
    const [product,setProduct]=useState([])
    const [grid,setGrid]=useState(3)
    const getData=async()=>{
        let res=await axios.get(`http://localhost:8080/data?category=kids-clothing`)
        setProduct(res.data)
    }

    useEffect(()=>{
       getData()
    },[])
    console.log(product)
  return (
    <div>
      <Navbar />
      <Flex width={"90%"} margin="auto" marginTop="40px" gap="50px">
        <Box width="20%">
         <Refindedby />
        </Box>
        <Box width="80%" >
            <Center><Text fontSize={"40px"} fontWeight="400">Fresh Arrivals Clothing For Kids</Text></Center>
            <Flex alignItems={"center"} justifyContent="space-around" borderTop={"1px solid grey"} borderBottom="1px solid grey" padding="10px" backgroundColor={"#f9f9f9"}>
                <Text fontWeight={"600"}>{product.length} Items Found</Text>
                <Flex marginLeft={"20px"} alignItems="center" >
                    <Text>Grid</Text>
                   <Grid  border="1px solid grey" height="25px" width="44px" alignItems={"center"} gap="4px" templateColumns='repeat(3, 1fr)' marginLeft={"20px"} backgroundColor="#fff" onClick={()=>setGrid(3)}>
                    <Box width="10px" backgroundColor={"grey"} height="20px"></Box>
                    <Box width="10px" backgroundColor={"grey"} height="20px"></Box>
                    <Box width="10px" backgroundColor={"grey"} height="20px"></Box>
                   </Grid>
                   <Grid  border="1px solid grey" height="25px" width="70px" alignItems={"center"} gap="4px" templateColumns='repeat(5, 1fr)' marginLeft={"5px"} backgroundColor="#fff" onClick={()=>setGrid(5)}>
                    <Box width="10px" backgroundColor={"grey"} height="20px"></Box>
                    <Box width="10px" backgroundColor={"grey"} height="20px"></Box>
                    <Box width="10px" backgroundColor={"grey"} height="20px"></Box>
                    <Box width="10px" backgroundColor={"grey"} height="20px"></Box>
                    <Box width="10px" backgroundColor={"grey"} height="20px"></Box>
                   </Grid>
                </Flex>
                <Flex alignItems={"center"} gap="20px">
                    <Box>
                    <Text color="gray.500" >SORT BY</Text>
                    </Box>
                   <Box>
                   <Select size="md">
                        <option value="">Relevance</option>
                        <option value="">Price(lowest first)</option>
                        <option value="">Price(highest first)</option>
                        <option value="">Discount</option>
                    </Select>
                   </Box>
                  </Flex>
            </Flex>
            <Box marginTop="30px">
        <Grid templateColumns={`repeat(${grid},1fr)`} gap="5">
          {product.map((elem) => {
            return (
              <GridItem key={elem.id} lineHeight="30px">
                <Image src={elem.image} alt="image not found" />
                <Text color="#c7b59b" fontSize="18px" fontWeight={"500"}>{elem.brand}</Text>
                <Text>{elem.name}</Text>
                <Flex textAlign={"center"} gap="10px" marginLeft={"80px"}>
                    <Box>
                    <Text fontSize={"18px"} fontWeight="600">{elem.price}</Text>
                    </Box>
                    <Box>
                        <Text textDecoration={"line-through"}>{elem.original_price}</Text>
                    </Box>
                  <Box>
                  <Text color="#c7b59b">{`(${elem.discount} %off)`}</Text>
                  </Box>  
                </Flex>
                <Text color="green">Offer Price : {elem.offer_prices}</Text>
                <Button>Add to Cart</Button>
              </GridItem>
            );
          })}
        </Grid>
        </Box>
        </Box>
        
      </Flex>
    </div>
  );
};

export default Kidspage;
