import React from "react";
import axios from "axios";
import { Box, Image, Grid, Text } from "@chakra-ui/react";

const Women = () => {
  const [data, setData] = React.useState([]);
  const [grid, setGrid] = React.useState(3);

  const getData = async () => {
    let res = await axios.get(
      `http://localhost:8080/data?brand=AVAASA MIX N' MATCH&brand=HEEPOSH`);
      console.log(res.data)
    setData(res.data);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Box width={"90%"} margin="auto" display={"flex"}>
      <Box width={"30%"}></Box>
      <Grid templateColumns={`repeat(${grid},1fr)`} gap="5">
        {data.map((elem) => {
          return (
            <Box key={elem.id}>
              <Image  src={elem.image} alt="image not found" />
              <Text>Brand : {elem.brand}</Text>
              <Text>Discount : {elem.discount}</Text>
              <Text>Offer Price : {elem.offer_prices}</Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Women;
