import React from "react";
import axios from "axios";
import { SidebarContext } from "../context/SidebarContextProvider";
import Sidebar from "../components/Sidebar";
import SidebarLarge from '../components/SidebarLarge';
import {
  Box,
  Image,
  Grid,
  Text,
  Select,
  Divider,
  Button,
  HStack
} from "@chakra-ui/react";

const Women = () => {
  const { category,setCategory, minPrice, maxPrice, maxDiscount, minDiscount } = React.useContext(SidebarContext);

  const [data, setData] = React.useState([]);
  const [grid, setGrid] = React.useState(3);
  const [cartItems, setCartItems] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const setPage = () => {
    if(window.location.href === "http://localhost:3000/women"){
      setCategory(prev => prev = "women-clothing");
    }
    if(window.location.href === "http://localhost:3000/men"){
      setCategory(prev => prev = "men-clothing");
    }
    if(window.location.href === "http://localhost:3000/kids"){
      setCategory(prev => prev = "kids-clothing");
    }
  }

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
  };

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
    data.forEach((elem) => {
      if (elem.id === id) {
        elem.quantity === 0 ? handleAddToCart(id) : handleRemoveFromCart(id);
      }
    });
  };

 
  

  React.useEffect(() => {
    setPage();
    window.addEventListener("resize", detectWidth);
    getData();

    return () => window.removeEventListener("resize", detectWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    windowWidth,
    category,
    minPrice,
    maxPrice,
    maxDiscount,
    minDiscount,
    grid,
    cartItems,
  ]);

  return (
    <Box
      width={{ xl: "90%", "2xl": "85%" }}
      margin="auto"
      // display={"flex"}
      gap="3"
    >
      {windowWidth > 1000 ? <SidebarLarge all={"women-clothing"} firstpart={"saree"} second={"shirts-tops-tunics"} third={"kurta-kurti"} fourth={"kurta-suit-sets"}/> : null}
        <Box margin="auto" marginLeft={windowWidth > 1000 ? '260px' : "0px"} >
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
          {windowWidth < 1000 ? <Sidebar /> : null}
          <Box>
            {windowWidth <= 1000 ? null : (
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
            )}
          </Box>
          <Box >
            <Text> Total Products : {data.length} </Text>
          </Box>
        </Box>

        <Divider marginBottom={"5"} marginTop="1" />
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: `repeat(${grid},1fr)`,
          }}
          gap="5"
        >
          {data.map((elem) => {
            return (
              <Box key={elem.id}>
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
                <Box>
                  <Button onClick={() => handleClick(elem.id)}>
                    {elem.quantity === 0 ? "Add to cart" : "Remove from cart"}{" "}
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
