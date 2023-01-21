import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {useState} from "react";
  
  export default function SimpleCard() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
  
      const handleLogin = () => {
       
          let user = JSON.parse(localStorage.getItem("user"));
  
          if (username === user.username && password === user.password) {
              alert("Login succesfull")
              window.location.href = "/Men";
  
          } else {
              setError("Invalid username or password");
          }
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
            <Stack spacing={6}>
            <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Welcome to AJIO</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={username} onChange={e => setUsername(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'yellow.400'}
                  color={'white'}
                  _hover={{
                    bg: 'yellow.500',
                  }} onClick={handleLogin}>
                  Log In
                </Button>
                {error && <p>{error}</p>}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }