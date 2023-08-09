import { Box, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Input.module.css"

export default function Input(){
  const [data, setData] = useState(((localStorage.getItem("email")))||"")
  const naviagte= useNavigate();

  function signupPage(){
    naviagte("/login")
  }
 
  return (
    <div>

{/* <input type="text" placeholder='Search here...'/> */}
<Box mt="5" ml="10">
  <Text color="white">{ data}</Text>
</Box>
  
  <Tooltip hasArrow label='My account' bg='red.600'>
  <svg cursor="pointer" id={styles.first}  onClick={signupPage}  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
 </svg>
  </Tooltip>


 <svg id={styles.two} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-credit-card-fill" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
</svg>

 <svg id={styles.three}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bag-check-fill " viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
 </svg>

</div>
  )
}