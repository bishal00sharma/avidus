import { Box, Button, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
    const [data, setData] = useState([]);
    const toast = useToast();
    const navigate = useNavigate();
  
    async function getData() {
     let id = localStorage.getItem("userId");
      let dataa = await fetch(`https://gray-amused-lemur.cyclic.app//user/${id}`);
      let res = await dataa.json();
      setData(res);
    }
    function logout(){
      localStorage.clear();
      navigate("/")
    }

    
    
    useEffect(() => {
        getData();
      }, []);


  return (
    <Box>
        <Text color="blue">Email : {data.email}</Text>
        <Text color="blue">Role : {data.role=="merchant"?"Merchant":"User"}</Text>
        <Button colorScheme='red' onClick={logout}>LogOut</Button>
    </Box>
  )
}

export default MyAccount