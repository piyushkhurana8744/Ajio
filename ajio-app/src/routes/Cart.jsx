import React from "react";
import axios from "axios";
import { Box, Text, Grid, Image, Button } from "@chakra-ui/react";
import { SidebarContext } from "../context/SidebarContextProvider";

const Cart = () => {
  const {
    cartData,
    setCartData,
    cartLength,
    setCartLength,
    minPrice,
    maxPrice,
    maxDiscount,
    minDiscount,
  } = React.useContext(SidebarContext);

  return (
    <Box>
      <Box>
        <Text as="b" fontSize={"2xl"}>
          My Bag ({cartLength} items){" "}
        </Text>
        <Box>
          {cartData.map((elem) => {
            return(<Box> 
                <Image src={elem.image} alt={elem.name}   />
                <Text> {elem.brand} </Text>
                <Text> {elem.name} </Text>
                <Box>
                  <Button>-</Button>
                  <Text>{elem.quantity}</Text>
                  <Button>+</Button>
                </Box>
                <Text>Savings : Rs.{elem.original_price - elem.price} </Text>
              </Box>)
          })}
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Cart;
