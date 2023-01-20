import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Pagination } from 'antd';
import "./SingleUserPage.css";

const SingleUserPage = () => {
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = React.useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  // const onChange = (page) => {
  //   setCurrentPage(page);
  // };
  let { id } = useParams();
  console.log(id);
  const ApiFetch = (id) => {
    axios.get(`http://localhost:8080/data/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
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
    if (product.id === id) {
      product.quantity === 0 ? handleAddToCart(id) : handleRemoveFromCart(id);
    }
  };
  useEffect(() => {
    ApiFetch(id);
    console.log(product);
  }, [id, cartItems]);
  return (
    <Box display="flex" justifyContent="center" >
      <Box display="flex" gap="60px" marginTop="10px">
        <Box marginTop="50px">
          <Image
          className="singleImage"
            mt="5px"
            mb="10px"
            width="70px"
            height="80px"
            src={product.image}
            alt="image not found"
          />
          <Image
          className="singleImage"
            mt="5px"
            mb="10px"
            width="70px"
            height="80px"
            src={product.image}
            alt="image not found"
          />
          <Image
          className="singleImage"
            mt="5px"
            mb="10px"
            width="70px"
            height="80px"
            src={product.image}
            alt="image not found"
          />
          <Image
          className="singleImage"
            mt="5px"
            mb="10px"
            width="70px"
            height="80px"
            src={product.image}
            alt="image not found"
          />
          <Image
          className="singleImage"
            mt="5px"
            mb="10px"
            width="70px"
            height="80px"
            src={product.image}
            alt="image not found"
          />
        </Box>
        <Box >
          <Image
            width="400px"
            height="500px"
            src={product.image}
            alt="image not found"
          />
        </Box>
        <Box gap="10px" mt="60px">
          <Text  mt="5px"
            mb="10px" fontSize="lg" textColor={"#B19975"} as="b">
            {product.brand}
          </Text>
          <Text  mt="5px"
            mb="10px" fontSize="lg"> {product.name}</Text>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"basproductine"}
            gap={"1"}
            mt="5px"
            mb="10px"
          >
            <Text  as="b" textColor={"gray.600"}>
              {" "}
              {product.price}
            </Text>
            <Text
              textDecoration={"line-through"}
              fontSize="lg"
              textColor={"gray.600"}
            >
              {" "}
              {product.orginal_price}
            </Text>
            <Text
              textColor={"#B19975"}
              fontSize="sm"
            >{` (${product.discount}% off)`}</Text>
          </Box>
          <Text textColor={"#3AB649"} fontSize="smaller" as="b">
            {" "}
            Offer price ₹{product.offer_prices}
          </Text>
          <Text color="cyan.300">Price inclusive of all taxes</Text>
          <Box  mt="5px"
            mb="10px">
            <Text  mt="5px"
            mb="10px">Select Size</Text>
            <div className="pagination-container">
              <div className="pagination">
                <div className="pagination-item">28</div>
                <div className="pagination-item">30</div>
                <div className="pagination-item">32</div>
                <div className="pagination-item">34</div>
                <div className="pagination-item">36</div>
              </div>
            </div>
          </Box>
          <Box>
            <Button size="lg" fontSize="xl" onClick={() => handleClick(product.id)}>
              {product.quantity === 0 ? "Add to cart" : "Remove from cart"}{" "}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default SingleUserPage;
