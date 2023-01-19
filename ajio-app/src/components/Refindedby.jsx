import React from 'react'
import {Text,Box,Flex,Checkbox} from "@chakra-ui/react"
const Refindedby = () => {
  return (
    <div width="35%" textAlign={"start"} >
     <Box textAlign={"start"}>
      <Text fontSize="24px" fontWeight="600">Refined By</Text>
        <Text fontSize={"18px"} fontWeight="600">Gender</Text>
        <hr />
        
        <Box marginTop="10px" paddingBottom={"10px"}>
        <Text fontSize={"18px"} fontWeight="600">Category</Text>
        <Checkbox size='lg'spacing='10px'  colorScheme='green'  >
      Sweaters & SweatShirts
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  Tshirts
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  Dresses & Frocks
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  Jeans
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  Western Sets
  </Checkbox>
        </Box>
        <hr />
        <Box marginTop="10px" paddingBottom={"10px"}>
        <Text fontSize={"18px"} fontWeight="600">Price</Text>
        <Checkbox size='lg'spacing='10px'  colorScheme='green' >
        Below Rs.500
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  Rs.500-1000 
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  Rs.1001-1500
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  Rs.1501-2000
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  Rs.2001-2500
  </Checkbox>
        </Box>
        <hr />
        <Box marginTop="10px" paddingBottom={"10px"}>
        <Text fontSize={"18px"} fontWeight="600">Brands</Text>
        <Checkbox size='lg'spacing='10px'  colorScheme='green' >
        3pin
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  612 League
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  AARIKA GIRLS ETHNIC
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  ADDYVERO
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  Adidas Kids
  </Checkbox>
        </Box>
        <hr />
        <Box marginTop="10px" paddingBottom={"10px"}>
        <Text fontSize={"18px"} fontWeight="600">Discount</Text>
        <Checkbox size='lg'spacing='10px'  colorScheme='green' >
        0-20%
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  21-30%
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  31-40%
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  41-50%
  </Checkbox>
  <br />
  <Checkbox size='lg'spacing='10px'  colorScheme='green' >
  51-80%
  </Checkbox>
        </Box>
        <Box marginTop="10px" paddingBottom={"10px"}>
            <Text fontSize={"18px"} fontWeight="600">Occasions</Text>
        </Box>

        <hr />
        <Box marginTop="10px" paddingBottom={"10px"}>
            <Text fontSize={"18px"} fontWeight="600"> Colors</Text>
        </Box>
        <hr />
        <Box marginTop="10px" paddingBottom={"10px"}> 
            <Text fontSize={"18px"} fontWeight="600">Size & Fit</Text>
        </Box>
        <hr />
      </Box>
    </div>
  )
}

export default Refindedby
