import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";
import "./SingleUserPage.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }
`;
const SingleProductContainer = styled.div`
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
const SingleProductImage = styled(Image)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const SingleUserPage = () => {
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = React.useState(0);
  const [text, setText] = React.useState(
    "Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please click here․"
  );
  let { id } = useParams();
    const handleShow=()=>{
         setText("Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please click here")
    }
    const handleShow1=()=>{
      setText("We assure the authenticity and quality of our products")
    }
  const ApiFetch = (id) => {
    axios.get(`http://localhost:8080/data/${id}`).then((res) => {
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
  }, [id, cartItems]);
  return (
    <Box>
      <Container>
        <Box display="flex" gap="100px" marginTop="10px">
          <SingleProductContainer>
            <SingleProductImage
              width="70px"
              height="80px"
              src={product.image}
              alt="image not found"
              marginTop="10px"
            />
            <SingleProductImage
              width="70px"
              height="80px"
              src={product.image}
              alt="image not found"
              marginTop="10px"
            />
            <SingleProductImage
              width="70px"
              height="80px"
              src={product.image}
              alt="image not found"
              marginTop="10px"
            />
            <SingleProductImage
              width="70px"
              height="80px"
              src={product.image}
              alt="image not found"
              marginTop="10px"
            />
            <SingleProductImage
              width="70px"
              height="80px"
              src={product.image}
              alt="image not found"
              marginTop="10px"
            />
          </SingleProductContainer>
          <Box style={{   width:"400px"  }}>
            <SingleProductImage
              width="400px"
              height="500px"
              src={product.image}
              alt="image not found"

            />
            <Box style={{ display: "flex", marginTop:"30px"}}>
                <Button style={{borderRadius:"0px",size:"s"}} onClick={handleShow}>RETURNS</Button>
                <Button style={{borderRadius:"0px"}} onClick={handleShow1}>OUR PROMISE</Button>
              </Box>
            <Box>
              
              <Text  style={{
                  fontSize: "11px",
                  textAlign: "Left",
                  fontWeight: "normal",
                  marginTop:"5px"
                }}>{text}</Text>
            </Box>
          </Box>

          <Box>
            <Box gap="10px">
              <Text
                mt="5px"
                mb="10px"
                fontSize="lg"
                textColor={"#B19975"}
                as="b"
              >
                {product.brand}
              </Text>
              <Text mt="5px" mb="10px" fontSize="lg">
                {" "}
                {product.name}
              </Text>
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"baseline"}
                gap={"1"}
              >
                <Text
                  mt="5px"
                  mb="10px"
                  fontSize="lg"
                  textColor={"#B19975"}
                  as="b"
                >
                  ${product.price}
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
              <Box mt="5px" mb="10px">
                <Text mt="5px" mb="10px">
                  Select Size
                </Text>
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
              <Button
                onClick={() => handleClick(product.id)}
                bg="D5A249"
                size="lg"
                mt="10px"
                borderRadius="0px"
              >
                {product.quantity === 0 ? "Add to Cart" : "Remove from Cart"}
              </Button>
            </Box>
            <Text mt="5px" mb="10px" fontSize="10px">
              {" "}
              HANDPICKED STYLES | ASSURED QUALITY
            </Text>
            <Button variantColor="teal" size="lg" mt="10px"borderRadius="0px">
              <div style={{ display: "flex", gap: "10px" }}>
                <img src="https://assets.ajio.com/static/img/pdp-wishlist-icon-desktop.svg"></img>
                SAVE TO THE WISHLIST
              </div>
            </Button>
            <Box
              style={{
                width: "300px",
                textAlign: "Left",
                marginTop: "40px",
                marginLeft: "40px",
              }}
            >
              <Text>Product details:</Text>
              <ul
                style={{
                  fontSize: "11px",
                  textAlign: "Left",
                  fontWeight: "normal",
                }}
              >
                <li>
                  Disclaimer: Product Colour May Slightly Vary Due to
                  Photographic Lighting Sources or Your Monitor Settings.
                </li>
                <li>{product.name}</li>
                <li>100% Cotton</li>
                <li>Machine wash</li>
                <li>Mid Rise</li>
                <li>Product Code: 461394178001</li>
              </ul>
            </Box>
            {/* <img src="https://assets.ajio.com/static/img/pdp-wishlist-icon-desktop.svg"></img> */}
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default SingleUserPage;
