import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Image, Button, Text,Radio,RadioGroup,Stack,Divider } from "@chakra-ui/react";
import axios from "axios";

const MenPage = () => {
  const [menData, setMenData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [grid, setGrid] = React.useState(true);
  const [cartItems, setCartItems] = React.useState(0);
  const [selectedValue, setSelectedValue] = useState(null);
  const [minPrice, setMinPrice] = React.useState("1");
  const [maxPrice, setMaxPrice] = React.useState("9999");


  const ApiFetch = async() => {
   await axios.get("http://localhost:8080/data").then((res) => {
      console.log(res.data);
      setMenData(res.data);
      setFilteredData(res.data.slice(229, 338));
    });
  };
  //  const handleClick=(data)=>{
  //      return data.quantity+1
  //  }
  const handleAddToCart = async (id) => {
    let res = await axios.patch(`http://localhost:8080/data/${id}`,{
      quantity : 1,
    });
    setCartItems(prev => prev + 1);
  }

  const handleRemoveFromCart = async (id) => {
    let res = await axios.patch(`http://localhost:8080/data/${id}`,{
      quantity : 0,
    });
    setCartItems(prev => prev - 1);
  }
   const handleClick = (id) => {
    menData.forEach((elem) => {
      if(elem.id === id){
        elem.quantity === 0 ? handleAddToCart(id) : handleRemoveFromCart(id);
        }
      })
  }
 

  const filterByCategory = (category) => {
    const filteredData = menData.filter((item) => {
      return item.category === category;
    });
    setFilteredData(filteredData);
    console.log(filteredData);
  };
  useEffect(() => {
    ApiFetch();
    // console.log("cat",cat)
  }, [cartItems,minPrice,maxPrice]);
  // useEffect(() => {
  //   ApiFetch();
  //   // console.log("cat",cat)
  // }, []);

  return (
    <Flex width="95%" justifyContent="space-between" mx="10px">
      <Box textAlign="left" width="25vw" mt="27px">
        <Text as="b" fontSize={"lg"}>
          Refine By 
        </Text>
        <Divider />
        <Text marginTop={"1"}>Category</Text>
        <RadioGroup
          // onChange={setCategory}
          // value={category}
          onChange={(e) => setSelectedValue(e.target.value)} value={selectedValue}
          marginLeft="3"
          marginTop={"1"}
        >
          <Stack display={"flex"} justifyContent={"left"} fontWeight="hairline">
            <Radio defaultChecked={false} onClick={() => {
            // ApiFetch();
          }}>All</Radio>
            <Radio  defaultChecked={false} onClick={() => {
            filterByCategory("shirt");
          }} value="saree">Shirts</Radio>
            <Radio defaultChecked={false} onClick={() => {
            filterByCategory("t-shirt");
          }}>T-shirts</Radio>
            <Radio defaultChecked={false} onClick={() => {
            filterByCategory("jeans");
          }}>Jeans</Radio>
            <Radio value="Track Pants">Track Pants</Radio>
          </Stack>
        </RadioGroup>

        {/* ///////////////////////////////////////////////////////////////////// */}
        <Divider marginTop={"3"} marginBottom="3" />
        <Text>Price Range</Text>
        <Box
          display={"flex"}
          justifyContent="space-between"
          paddingLeft={"3"}
          paddingRight="3"
        >
          <Box>
            <Text marginTop={"1"}>Min Price</Text>
            <RadioGroup 
            onChange={setMinPrice} 
            value={minPrice} 
            marginTop={"1"}>
              <Stack
                display={"flex"}
                justifyContent={"left"}
                fontWeight="hairline"
              >
                <Radio value={"1"}>Rs.1</Radio>
                <Radio value={"500"}>Rs.500</Radio>
                <Radio value={"1001"}>Rs.1001</Radio>
                <Radio value={"1501"}>Rs.1501</Radio>
                <Radio value={"2001"}>Rs.2001</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box>
            <Text marginTop={"1"}>Max Price</Text>
            <RadioGroup
             onChange={setMaxPrice} 
             value={maxPrice}
              marginTop={"1"}>
              <Stack
                display={"flex"}
                justifyContent={"left"}
                fontWeight="hairline"
              >
                <Radio value={"500"}>Rs.500</Radio>
                <Radio value={"1000"}>Rs.1000</Radio>
                <Radio value={"1500"}>Rs.1500</Radio>
                <Radio value={"2000"}>Rs.2000</Radio>
                <Radio value={"9999"}>Rs.9999</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Divider marginTop={"3"} marginBottom="3" />

        {/* ///////////////////////////////////////////////////////////////////// */}
        <Text>Discount Range</Text>
        <Box
          display={"flex"}
          justifyContent="space-between"
          paddingLeft={"3"}
          paddingRight="3"
        >
          <Box>
            <Text marginTop={"1"}>Min Discount</Text>
            <RadioGroup
              // onChange={setMinDiscount}
              // value={minDiscount}
              marginTop={"1"}
            >
              <Stack
                display={"flex"}
                justifyContent={"left"}
                fontWeight="hairline"
              >
                <Radio value={"0"}>0%</Radio>
                <Radio value={"21"}>21%</Radio>
                <Radio value={"31"}>31%</Radio>
                <Radio value={"41"}>41%</Radio>
                <Radio value={"51"}>51%</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box>
            <Text marginTop={"1"}>Max Discount</Text>
            <RadioGroup
              // onChange={setMaxDiscount}
              // value={maxDiscount}
              marginTop={"1"}
            >
              <Stack
                display={"flex"}
                justifyContent={"left"}
                fontWeight="hairline"
              >
                <Radio value={"20"}>20%</Radio>
                <Radio value={"30"}>30%</Radio>
                <Radio value={"40"}>40%</Radio>
                <Radio value={"50"}>50%</Radio>
                <Radio value={"80"}>80%</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Divider marginTop={"3"} marginBottom="3" />
      </Box>
      {/* <Box float="center">
        <Button
          onClick={() => {
            ApiFetch();
          }}
        >
          All
        </Button>
        <Button
          onClick={() => {
            filterByCategory("shirt");
          }}
        >
          SHIRTS
        </Button>
        <Button
          onClick={() => {
            filterByCategory("t-shirt");
          }}
        >
          T-SHIRTS
        </Button>
        <Button
          onClick={() => {
            filterByCategory("jeans");
          }}
        >
          jeans
        </Button>

        <Heading position="fixed">Hello</Heading>
      </Box> */}
      <Box maxW={"70vw"}>
        <Text as={"b"} fontSize="4xl">
          Clothing
        </Text>
        <Box
          padding="3"
          display={"flex"}
          justifyContent="space-between"
          bg={"whitesmoke"}
        >
          <Box color="black"> {filteredData.length} Items Found</Box>
          <Box>
            <Box display={"flex"} gap="5">
              <Text color="black">GRID</Text>
              <Box display={"flex"} cursor="pointer">
                <Box
                  border="1px solid gray"
                  bg="white"
                  padding={"4px"}
                  display="flex"
                  value={3}
                  onClick={() => setGrid(true)}
                >
                  <Box bg="gray.300" height={"4"} width="2"></Box>
                  <Box
                    bg="gray.300"
                    height="4"
                    width="2"
                    marginLeft="4px"
                  ></Box>
                  <Box
                    bg="gray.300"
                    height={"4"}
                    width="2"
                    marginLeft={"4px"}
                  ></Box>
                </Box>

                <Box
                  border="1px solid gray"
                  borderLeft={"0"}
                  bg="white"
                  padding={"4px"}
                  display="flex"
                  value={5}
                  onClick={() => setGrid(false)}
                >
                  <Box bg="gray.300" height={"4"} width="2"></Box>
                  <Box
                    bg="gray.300"
                    height={"4"}
                    width="2"
                    marginLeft={"4px"}
                  ></Box>
                  <Box
                    bg="gray.300"
                    height={"4"}
                    width="2"
                    marginLeft={"4px"}
                  ></Box>
                  <Box
                    bg="gray.300"
                    height={"4"}
                    width="2"
                    marginLeft={"4px"}
                  ></Box>
                  <Box
                    bg="gray.300"
                    height={"4"}
                    width="2"
                    marginLeft={"4px"}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box color="black">SORT BY</Box>
        </Box>
        <Box
          // width="75%"
          display="grid"
          gridTemplateColumns={`repeat(${grid===true?3:5},1fr)`}
          gap="20px"
          mt="20px"
        >
          {filteredData.map((el) => (
            <Box
              justifyContent="center"
              textAlign="center"
              _hover={{
                transform: "scale(1.01)",
              }}
            >
              {/* css={{ 
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)" 
          }} */}
              <Image
                src={el.image}
                alt="not found"
                _hover={{
                  transform: "scale(1.01)",
                }}
              />
              {/* <Flex justifyContent="center" textAlign="center"> */}
              <Text mt="0" mb="0">
                Brand : {el.brand}
              </Text>
              <Text mt="0" mb="0">
                Discount : {el.discount}
              </Text>
              <Text mt="0" mb="0">
                Offer Price : {el.offer_prices}
              </Text>

              {/* </Flex> */}
              <Box mt="10px">
              <Button onClick={()=>handleClick(el.id)}  >
                    {el.quantity === 0
                      ? "Add to cart"
                      : "Remove from cart"}{" "}
                  </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default MenPage;
