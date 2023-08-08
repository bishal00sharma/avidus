import { Box, Button, Heading, HStack, Input, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import {AppContext} from "../Components/Context/AppContext" ;


export const Login = () => {

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
    let result =await fetch("http://localhost:8080/user/login",{
      method: "POST" ,
      body: JSON.stringify( {email, password}),
      headers:{
        "Accept": 'application.json',
        'Content-Type': 'application/json'
         },
    });
    let data = await result.json()
    if(data.error){

      toast({
        title: 'Wrong password',
        description: "You need to enter correct password.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
    else{
      localStorage.setItem("user", JSON.stringify(data.user))
      localStorage.setItem("userId", data.user._id)
      localStorage.setItem("email", data.user.email)
      localStorage.setItem("token", data.token)
      navigate("/")
    }
  }
  return (
    <Box>
        <Box bgColor="blackAlpha.800" textAlign="center">
            <Text color="white" p="10px">
            🌃 The joy of home.The thrill of travel. 🛌
            </Text>
        </Box>
    
        <VStack spacing='24px' mt="100px">
            <Box>
               <Heading>Login</Heading>
            </Box>
            <Box>
            Please enter your e-mail and password:
            </Box>
            <Box  bg='blue.100'>
                <Input onChange={emailChange} value={email} w="500px" placeholder="Enter email here" />
            </Box>
            <Box  bg='blue.100'>
                <Input onChange={passChange} value={password} w="500px" placeholder="Enter password here" />
            </Box>
            <Button onClick={handleSign} w="500px" bgColor="blue.500" color="white">
              Login
            </Button>
            <Link to={`/signup`}>Don't have account, Go to SignUp</Link>
            </VStack>
    </Box>
  )
}