import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarContext } from "../context/SidebarContextProvider";
import {
  Box,
  Text,
  RadioGroup,
  Radio,
  Stack,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  IconButton,
} from "@chakra-ui/react";

const Sidebar = () => {
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
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          variant="outline"
        >
          <Text as="b" fontSize={"lg"}>
            Refine By
          </Text>
        </MenuButton>

        <MenuList>
          <MenuGroup title="Category">
            <RadioGroup
              onChange={setCategory}
              value={category}
              marginLeft="3"
              marginTop={"1"}
            >
              <Stack display={"flex"} justifyContent={"left"}>
                <Radio value="women-clothing">All</Radio>
                <Radio value="saree">Sarees</Radio>
                <Radio value="shirts-tops-tunics">Shirts, Tops & Tunics</Radio>
                <Radio value="kurta-kurti">Kurtas & Kurtis</Radio>
                <Radio value="kurta-suit-sets">Kurta Suit Sets</Radio>
              </Stack>
            </RadioGroup>
          </MenuGroup>

          {/* ///////////////////////////////////////////////////////////////////// */}

          <Divider marginTop={"3"} marginBottom="3" />
          <MenuGroup title="Price Range">
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
                  marginTop={"1"}
                >
                  <Stack display={"flex"} justifyContent={"left"}>
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
                  marginTop={"1"}
                >
                  <Stack display={"flex"} justifyContent={"left"}>
                    <Radio value={"500"}>Rs.500</Radio>
                    <Radio value={"1000"}>Rs.1000</Radio>
                    <Radio value={"1500"}>Rs.1500</Radio>
                    <Radio value={"2000"}>Rs.2000</Radio>
                    <Radio value={"9999"}>Rs.9999</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </Box>
          </MenuGroup>

          <Divider marginTop={"3"} marginBottom="3" />

          {/* ///////////////////////////////////////////////////////////////////// */}

          <MenuGroup title="Discount Range">
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
                  <Stack display={"flex"} justifyContent={"left"}>
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
                  <Stack display={"flex"} justifyContent={"left"}>
                    <Radio value={"20"}>20%</Radio>
                    <Radio value={"30"}>30%</Radio>
                    <Radio value={"40"}>40%</Radio>
                    <Radio value={"50"}>50%</Radio>
                    <Radio value={"80"}>80%</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </Box>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Sidebar;
