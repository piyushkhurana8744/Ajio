import React from "react";
import { SidebarContext } from "../context/SidebarContextProvider";
import { Box, Text, RadioGroup, Radio, Stack, Divider } from "@chakra-ui/react";

const SidebarLarge = ({firstpart,second,third,fourth,all,handleChange}) => {
  const {
    category,
    setCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    minDiscount,
    setMinDiscount,
    maxDiscount,
    setMaxDiscount,
  } = React.useContext(SidebarContext);

  return (
    <Box textAlign="left" width="250px" position={"fixed"} marginTop='24px' height="500px">
      <Text as="b" fontSize={"lg"}>
        Refine By
      </Text>
      <Divider />
      <Text >Category</Text>
      <RadioGroup
        onChange={setCategory}
        value={category}
        marginLeft="3"
        
      >
        <Stack display={"flex"} justifyContent={"left"} fontWeight="hairline">
          <Radio value={all}>All</Radio>
          <Radio value={firstpart}>{firstpart}</Radio>
          <Radio value={second}>{second}</Radio>
          <Radio value={third}>{third}</Radio>
          <Radio value={fourth}>{fourth}</Radio>
        </Stack>
      </RadioGroup>

      {/* ///////////////////////////////////////////////////////////////////// */}
      <Divider   />
      <Text>Price Range</Text>
      <Box
        display={"flex"}
        justifyContent="space-between"
        paddingLeft={"3"}
        paddingRight="3"
      >
        <Box>
          <Text >Min Price</Text>
          <RadioGroup onChange={setMinPrice} value={minPrice} >
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
          <Text >Max Price</Text>
          <RadioGroup onChange={setMaxPrice} value={maxPrice} >
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
      <Divider   />

      {/* ///////////////////////////////////////////////////////////////////// */}
      <Text>Discount Range</Text>
      <Box
        display={"flex"}
        justifyContent="space-between"
        paddingLeft={"3"}
        paddingRight="3"
      >
        <Box>
          <Text >Min Discount</Text>
          <RadioGroup
            onChange={setMinDiscount}
            value={minDiscount}
            
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
          <Text >Max Discount</Text>
          <RadioGroup
            onChange={setMaxDiscount}
            value={maxDiscount}
            
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
      <Divider   />
    </Box>
  );
};

export default SidebarLarge;
