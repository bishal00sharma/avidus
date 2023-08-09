import React from 'react'
import styles from "./SearchInput.module.css";
import Input from './Input';
import { Box, Image, Text } from '@chakra-ui/react';


export default function SearchInput(){
  return (
    <div className={styles.SearchBox}>
        
        <Box>
           <Image src="hotelgo.png" alt="boat_logo" />
        </Box>
        <Box>
             <Text cursor="pointer">Hotels</Text>
            <Text cursor="pointer">Daily Deals</Text>
            <Text cursor="pointer">Offer Zone</Text>
            <Text cursor="pointer"> More </Text>
        </Box>
        <Input />
     </div>
        
  )
}