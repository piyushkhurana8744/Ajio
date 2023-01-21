import React from "react";
import axios from "axios";
import { Box, Text, Grid, Image, Button } from "@chakra-ui/react";
import { SidebarContext } from "../context/SidebarContextProvider";
import { useMediaQuery } from "@chakra-ui/react";

const Cart = () => {
  const {
    getCartItems,
    cartData,
    setCartData,
    cartLength,
    setCartLength,
    minPrice,
    maxPrice,
    maxDiscount,
    minDiscount,
  } = React.useContext(SidebarContext);

  const [total, setTotal] = React.useState(0);
  const [totalActual, setTotalActual] = React.useState(0);

  const handleDelete = async (id) => {
    let res = await axios.patch(`http://localhost:8080/data/${id}`, {
      quantity: 0,
    });
    setCartLength((prev) => prev - 1);
  };

  const handleQuantity = async (id, quant, value) => {
    cartData.map((elem) => (elem.id === id ? (quant = quant + value) : quant));

    let res = await axios.patch(`http://localhost:8080/data/${id}`, {
      quantity: quant,
    });

    calculateTotal();
  };

  const calculateTotal = () => {
    console.log(cartData);
    setTotal(
      cartData.reduce(
        (accumulate, elem) => accumulate + elem.price * elem.quantity,
        0
      )
    );
    setTotalActual(
      cartData.reduce(
        (accumulate, elem) => accumulate + elem.original_price * elem.quantity,
        0
      )
    );
  };

  React.useEffect(() => {
    getCartItems();
    calculateTotal();
  }, [cartLength, cartData, total]);

  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  return (
    <Box
      display={isLargerThan900 ? "flex" : ""}
      width={{ base: "100%", md: "90%", "2xl": "70%" }}
      margin={"auto"}
      justifyContent="space-between"
      marginBottom={"5"}
    >
      <Box width={{ base: "100%", lg: "60%" }}>
        <Text as="b" fontSize={"2xl"}>
          My Bag ({cartLength} items){" "}
        </Text>
        <Box>
          {cartData.map((elem) => {
            return (
              <Box
                key={elem.id}
                fontSize={"xs"}
                display={"flex"}
                justifyContent="space-between"
                border={"1px solid gray"}
                marginTop="5"
              >
                <Image src={elem.image} height={"200px"} alt={elem.name} />
                <Box width={"300px"}>
                  <Box>
                    <Text> {elem.brand}</Text>

                    <Text> {elem.name}</Text>
                  </Box>
                  <Box display="flex" justifyContent={"center"} margin="1">
                    <Button
                      size="sm"
                      onClick={() => handleQuantity(elem.id, elem.quantity, -1)}
                      isDisabled={elem.quantity === 1}
                    >
                      -
                    </Button>
                    <Text
                      as="b"
                      marginLeft={"1rem"}
                      marginRight="1rem"
                      alignSelf={"center"}
                    >
                      {elem.quantity}
                    </Text>
                    <Button
                      size="sm"
                      onClick={() => handleQuantity(elem.id, elem.quantity, 1)}
                    >
                      +
                    </Button>
                  </Box>
                  <Box>
                    <Text>
                      Savings : Rs.{" "}
                      {(elem.original_price - elem.price) * elem.quantity}{" "}
                    </Text>
                    <Box>
                      <Box display="flex" justifyContent={"center"}>
                        <Text textDecoration={"line-through"} color="gray.500">
                          Rs. {elem.original_price}.00
                        </Text>
                        <Text color="gray.500">({elem.discount}%)</Text>
                      </Box>
                      <Box
                        bg="blue.400"
                        width={"fit-content"}
                        paddingRight="10px"
                        display="flex"
                        margin={"auto"}
                      >
                        <Box
                          height={"100%"}
                          width="10px"
                          bg={"blue.900"}
                          marginRight="20px"
                        >
                          {"."}{" "}
                        </Box>
                        <Text as="b">Rs. {elem.price}.00</Text>
                      </Box>
                    </Box>
                    <Button
                      size="sm"
                      marginTop={"1"}
                      onClick={() => handleDelete(elem.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box width={isLargerThan900 ? "25%" : "90%"} >
        <Box
          bg="#fafafa"
          height={"fit-content"}
          margin="auto"
        >
          <Box
            marginLeft={"3"}
            marginRight="3"
            marginBottom={"10px"}
            display="flex"
            alignItems={"left"}
          >
            <Text as="b">Order Details</Text>
          </Box>
          <Box>
            <Box>
              <Box
                marginLeft={"3"}
                marginRight="3"
                display={"flex"}
                justifyContent="space-between"
              >
                <Text>Bag Total</Text>
                <Text>₹{totalActual}</Text>
              </Box>
              <Box
                marginLeft={"3"}
                marginRight="3"
                display={"flex"}
                justifyContent="space-between"
              >
                <Text>Bag discount</Text>
                <Text color={"#B09975"}>-₹{totalActual - total}</Text>
              </Box>
              <Box
                marginLeft={"3"}
                marginRight="3"
                display={"flex"}
                justifyContent="space-between"
              >
                <Text>Delivery Fee</Text>
                <Text textDecoration={"line-through"}>₹99.00</Text>
              </Box>
              <Box
                marginLeft={"3"}
                marginRight="3"
                display={"flex"}
                justifyContent="space-between"
              >
                <Text as="b">Order Total</Text>
                <Text as="b">₹{total}.00</Text>
              </Box>
              <Button
                width={"100%"}
                borderRadius="0"
                marginTop={"5"}
                bg="#D5A249"
                color="white"
              >
                PROCEED TO SHIPPING
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
