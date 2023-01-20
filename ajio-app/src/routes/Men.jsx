import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Men.css';
import {
  Box,
  Image,
  Grid,
  Text,
  Select,
  RadioGroup,
  Radio,
  Stack,
  Divider,
  Button,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

const MenPage = () => {
  const [data, setData] = React.useState([]);
  const [grid, setGrid] = React.useState(3);
  const [category, setCategory] = React.useState("mens-clothing");
  const [minPrice, setMinPrice] = React.useState("1");
  const [maxPrice, setMaxPrice] = React.useState("9999");
  const [minDiscount, setMinDiscount] = React.useState("0");
  const [maxDiscount, setMaxDiscount] = React.useState("80");
  const [cartItems, setCartItems] = React.useState(0);
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const [sortBy, setSortBy] = React.useState("");
  const [orderBy, setOrderBy] = React.useState("");

  const getData = async () => {
    let res = await axios.get(
      `http://localhost:8080/data?category=${category}&offer_prices_gte=${minPrice}&offer_prices_lte=${maxPrice}&discount_gte=${minDiscount}&discount_lte=${maxDiscount}`
    );
    setData(res.data);
  };

  const handleAddToCart = async (id) => {
    let res = await axios.patch(`http://localhost:8080/data/${id}`, {
      quantity: 1,
    });
    setCartItems((prev) => prev + 1);
  };

  const handleRemoveFromCart = async (id) => {
    let res = await axios.patch(`http://localhost:8080/data/${id}`, {
      quantity: 0,
    });
    setCartItems((prev) => prev - 1);
  };

  const handleClick = (id) => {
    data.forEach((el) => {
      if (el.id === id) {
        el.quantity === 0 ? handleAddToCart(id) : handleRemoveFromCart(id);
      }
    });
  };

  // const handleChange = () => {
    // @media only screen and (max-width: 600px) {
    //   .refine-by-section {
    //     display: none;
    //   }
    // }
  // }
  const handleChange = (e) => {
    setSelectedCategories(e);
    let filteredData = data.filter((item) => e.indexOf(item.category) !== -1);
    setData(filteredData);
  };
  //   const handleChange = (event) => {
  //     setCategory(event.target.value);
  // }
  React.useEffect(() => {
    getData();
  }, [
    category,
    minPrice,
    maxPrice,
    maxDiscount,
    minDiscount,
    grid,
    cartItems,
    sortBy,
    orderBy,
  ]);

  return (
    <Box
      width={{ xl: "90%", "2xl": "75%" }}
      margin="auto"
      display={"flex"}
      gap="3"
    >
      {/* //////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////// */}
      <div className="refine-by-section">
      <Box textAlign="left" width="25vw">
        <Text as="b" fontSize={"lg"}>
          Refine By
        </Text>
        <Divider />
        <Text marginTop={"1"}>Category</Text>
        <RadioGroup
          onChange={setCategory}
          value={category}
          marginLeft="3"
          marginTop={"1"}
        >
          <Stack display={"flex"} justifyContent={"left"} fontWeight="hairline">
            <Radio value="mens-clothing">All</Radio>
            <Radio value="shirt">Shirt</Radio>
            <Radio value="t-shirt">T-shirt</Radio>
            <Radio value="jeans">Jeans</Radio>
            {/* <Radio value="track pants">Track Pants</Radio> */}
          </Stack>
        </RadioGroup>
        {/* <CheckboxGroup 
    onChange={handleChange} 
    value={selectedCategories} 
    marginLeft="3"
    marginTop={"1"}
  >
    <Stack display={"flex"} justifyContent={"left"} fontWeight="hairline">
      <Checkbox value="mens-clothing">All</Checkbox>
      <Checkbox value="shirt">Shirt</Checkbox>
      <Checkbox value="t-shirt">T-shirt</Checkbox>
      <Checkbox value="jeans">Jeans</Checkbox>
      <Checkbox value="track pants">Track Pants</Checkbox>
    </Stack>
  </CheckboxGroup> */}

        {/* ///////////////////////////////////////////////////////////////////// */}
        <Divider marginTop={"3"} marginBottom="3" />
        <Text>Price Range</Text>
        <Box
          display={"flex"}
          justifyContent="space-between"
          paddingLeft={"3"}
          paddingRight="3"
        >
          <Box width="100px">
            <Text marginTop={"1"}>Min Price</Text>
            <RadioGroup onChange={setMinPrice} value={minPrice} marginTop={"1"}>
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
            <RadioGroup onChange={setMaxPrice} value={maxPrice} marginTop={"1"}>
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
              onChange={setMinDiscount}
              value={minDiscount}
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
              onChange={setMaxDiscount}
              value={maxDiscount}
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
      </div>
      {/* //////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////// */}
<div className="rendered-data">
      <Box >
        <Text as={"b"} fontSize="4xl">
          Clothing
        </Text>
        <Divider marginBottom={"1"} />
        <Box
          padding="3"
          display={"flex"}
          justifyContent={"space-between"}
          bg={"whitesmoke"}
        >
          <Box>
            <Box display={"flex"} justifyContent="space-between" gap="5">
              <Box>
                <Text color="black">{data.length} Items Found</Text>
              </Box>
              <Box>
                <Box display={"flex"} cusrsor="pointer">
                  <Text ml="40" color="black" textAlign="center">
                    GRID
                  </Text>
                  <Box
                    ml="5px"
                    border="1px solid gray"
                    bg="white"
                    padding={"4px"}
                    display="flex"
                    value={3}
                    onClick={() => setGrid(3)}
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
                  </Box>

                  <Box
                    border="1px solid gray"
                    borderLeft={"0"}
                    bg="white"
                    padding={"4px"}
                    display="flex"
                    value={5}
                    onClick={() => setGrid(5)}
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
                  <Box>{/* <Text>SORT BY</Text> */}</Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <Box display={"flex"} gap="5"  > */}
        </Box>

        <Divider marginBottom={"5"} marginTop="1" />
        <div classNam="data-container">
        <Grid className="grid-container" templateColumns={`repeat(${grid},1fr)`} gap="5">
          {data.map((el) => {
            return (
              <Box key={el.id}>
                <Link  to={`/men/${el.id}`}><Image className="singleImageMain" src={el.image} alt="image not found" /></Link> 
                <Text textColor={"#B19975"} as="b">
                  {el.brand}
                </Text>
               <Link  to={`/men/${el.id}`}><Text> {el.name}</Text></Link> 
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"baseline"}
                  gap={"1"}
                >
                  <Text as="b" textColor={"gray.600"}>
                    {" "}
                    {el.price}
                  </Text>
                  <Text
                    textDecoration={"line-through"}
                    fontSize="sm"
                    textColor={"gray.600"}
                  >
                    {" "}
                    {el.orginal_price}
                  </Text>
                  <Text
                    textColor={"#B19975"}
                    fontSize="sm"
                  >{` (${el.discount}% off)`}</Text>
                </Box>
                <Text textColor={"#3AB649"} fontSize="smaller" as="b">
                  {" "}
                  Offer price ₹{el.offer_prices}
                </Text>
                <Box>
                  <Button onClick={() => handleClick(el.id)}>
                    {el.quantity === 0 ? "Add to cart" : "Remove from cart"}{" "}
                  </Button>
                </Box>
              </Box>
            );
          })}
          
        </Grid>
        </div>
      </Box>
      </div>
    </Box>
  );
};

export default MenPage;
