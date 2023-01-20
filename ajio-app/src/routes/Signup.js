import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import React,{ useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignupCard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [data, setdata] = useState([]);


  const handleSignup = () => {
    
      let user = {username:username , password:password};
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/";
      console.log(user);
  }
  

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Welcome to Ajio
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          Join/Sign up using✌️
          </Text>

          <Stack direction={['column', 'row']} spacing={6}>
          <Stack direction='row'  marginLeft={2}  gap={10}>
          <Image boxSize='60px'  w={"40"}  objectFit='cover'src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-2.png' alt='Dan Abramov'/>
          <Image boxSize='60px'  w={"40"} objectFit='cover' src='data:image/jpeg;base64,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' alt='Dan Abramov'/>
          </Stack>
        </Stack>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={username} onChange={e => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}value={password} onChange={e => setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'yellow.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} type="button" onClick={handleSignup}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to="./Login" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}