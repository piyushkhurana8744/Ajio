import React from "react";
import axios from "axios";
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
} from "@chakra-ui/react";

const Women = () => {
  const [data, setData] = React.useState([]);
  const [grid, setGrid] = React.useState(3);
  const [category, setCategory] = React.useState("women-clothing");
  const [minPrice, setMinPrice] = React.useState("1");
  const [maxPrice, setMaxPrice] = React.useState("9999");
  const [minDiscount, setMinDiscount] = React.useState("0");
  const [maxDiscount, setMaxDiscount] = React.useState("80");
  const [cartItems, setCartItems] = React.useState(0);
  const [sortBy, setSortBy] = React.useState("");
  const [orderBy, setOrderBy] = React.useState("");

  const getData = async () => {
    let res = await axios.get(
      `http://localhost:8080/data?category=${category}&offer_prices_gte=${minPrice}&offer_prices_lte=${maxPrice}&discount_gte=${minDiscount}&discount_lte=${maxDiscount}`
    );
    setData(res.data);
  };

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
    data.forEach((elem) => {
      if(elem.id === id){
        elem.quantity === 0 ? handleAddToCart(id) : handleRemoveFromCart(id);
        }
      })
  }

  const handleChange = () => {

  }

  React.useEffect(() => {
    getData();
  }, [category, minPrice, maxPrice, maxDiscount, minDiscount, grid, cartItems,sortBy,orderBy]);

  return (
    <Box
      width={{ xl: "90%", "2xl": "75%" }}
      margin="auto"
      display={"flex"}
      gap="3"
      >
      {/* //////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////// */}
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
            <Radio value="women-clothing">All</Radio>
            <Radio value="saree">Sarees</Radio>
            <Radio value="shirts-tops-tunics">Shirts, Tops & Tunics</Radio>
            <Radio value="kurta-kurti">Kurtas & Kurtis</Radio>
            <Radio value="kurta-suit-sets">Kurta Suit Sets</Radio>
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

      {/* //////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////// */}

      <Box maxW={"70vw"}>
        <Text as={"b"} fontSize="4xl">
          Clothing
        </Text>
        <Divider marginBottom={"1"} />
        <Box
          padding="3"
          display={"flex"}
          justifyContent="space-between"
          bg={"whitesmoke"}
        >
          <Box>
            <Box display={"flex"} gap="5">
              <Text>GRID</Text>
              <Box display={"flex"} cursor="pointer">
                <Box
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
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} gap="5"  >
            <Box minWidth={'fit-content'}  >
            <Text>SORT BY</Text>
            </Box>
            <Select size='xs'   >
              <option  value={"price"}>Price(lowest first)</option>
              <option  value={"price"}>Price(highest first)</option>
              <option  value={"discount"}>Discount(lowest first)</option>
              <option  value={"discount"}>Discount(highest first)</option>
            </Select>
          </Box>
        </Box>

        <Divider marginBottom={"5"} marginTop="1" />
        <Grid templateColumns={`repeat(${grid},1fr)`} gap="5">
          {data.map((elem) => {
            return (
              <Box key={elem.id} >
                <Image src={elem.image} alt="image not found" />
                <Text textColor={"#B19975"} as="b">
                  {elem.brand}
                </Text>
                <Text> {elem.name}</Text>
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"baseline"}
                  gap={"1"}
                >
                  <Text as="b" textColor={"gray.600"}>
                    {" "}
                    {elem.price}
                  </Text>
                  <Text
                    textDecoration={"line-through"}
                    fontSize="sm"
                    textColor={"gray.600"}
                  >
                    {" "}
                    {elem.orginal_price}
                  </Text>
                  <Text
                    textColor={"#B19975"}
                    fontSize="sm"
                  >{` (${elem.discount}% off)`}</Text>
                </Box>
                <Text textColor={"#3AB649"} fontSize="smaller" as="b">
                  {" "}
                  Offer price ₹{elem.offer_prices}
                </Text>
                <Box  >
                  <Button onClick={()=>handleClick(elem.id)}  >
                    {elem.quantity === 0
                      ? "Add to cart"
                      : "Remove from cart"}{" "}
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Women;
