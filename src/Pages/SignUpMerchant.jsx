import { Box, Button, Heading, HStack, Input, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import {AppContext} from "../Components/Context/AppContext" ;




export const SignUpMerchant = () => {

  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const {loginUser} =useContext(AppContext);
  const navigate= useNavigate();
  const toast = useToast()

  function emailChange(e){
  setEmail(e.target.value) ;
  }

  function passChange(e){
    setPassword(e.target.value) ;
  }
  
  async function handleSign(){
    let role="merchant";

    if(!email && !password){
      toast({
        title: 'Need email & password',
        description: "You need to provide your credentials.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
    else if(!password){
      toast({
        title: 'Enter Password',
        description: "You need to enter Password also.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
    else if(!email){
      toast({
        title: 'Enter Email',
        description: "You need to enter your email also.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
   
    else{
      await fetch("https://gray-amused-lemur.cyclic.app/user/signup",{
      method: "POST" ,
      body: JSON.stringify( {email, password, role}),
      headers:{
             "Content-Type":`application/json`
         },
    });
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    navigate("/login")
    }
     
  }
  return (
    <Box>
        <Box bgColor="blackAlpha.800" textAlign="center">
            <Text color="white" p="10px">
            🏩 Sign up and we'll send the best deals to you 🏨
            </Text>
        </Box>
        
        <VStack spacing='24px' mt="100px">
            <Box>
               <Heading>SignUp</Heading>
            </Box>
            <Box>
            Please enter your e-mail and password:
            </Box>
            <Box  bg='pink.100'>
                <Input onChange={emailChange} value={email} w="500px" placeholder="Enter email here" />
            </Box>
            <Box  bg='pink.100'>
                <Input onChange={passChange} value={password} w="500px" placeholder="Enter password here" />
            </Box>
            <Button onClick={handleSign} w="500px" bgColor="red.500" color="white">
              SignUp
            </Button>

            <Text color='blue' _hover={{color:"red"}}> <Link to={`/signup`}>Want to SignUp as a user ? , Click here</Link></Text>
            </VStack>
    </Box>
  )
}