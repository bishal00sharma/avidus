import React from 'react'
import { useContext, useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import {Box,Button,Flex,Image, Select, Text, Tooltip, useToast} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { ImLocation } from 'react-icons/im';


const Rooms = () => {

    const [data,setData]=useState([]);
    const toast = useToast()

    async function getData(){
        let dataa=await fetch(`http://localhost:8080/property`) 
        let res= await dataa.json()
        setData(res)
    }
    console.log(data);

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
          <div className={styles.mainTopBoxProperties}>
        <div className={styles.mainBoxPropertyRoom}>
                
                {data.map((item)=>(
              <div key={item.id} className={styles.mainBoxPropertyRoomBox}>
                <div>
                    <img  src={item.img} alt="product_page" />
                    <div className={styles.mainBoxPropertyRoomInsideBox}>
                        <p className={styles.mainBoxPropertyRoomTitle}>{item.title}</p>
                        <Flex> 
                        <Text mt="5px" mr="2px"> <ImLocation /></Text>
                        <Text>{item.location}</Text> 
                        </Flex>
                        
                        <div className={styles.mainBoxPropertyRoomPriceBox}>
                        <p >₹ {item.price}</p>
                        </div>
                        <p> {item.description}</p>
                     
                    </div>
                   
                    <button className={styles.mainBoxPropertyButton}>Book Now</button>
                    <Tooltip hasArrow label='Know more' bg='red.600'>
                        <Text className={styles.showMore}> <Link to={`#`}>Show more Details</Link> </Text> 
                    </Tooltip>
                </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Rooms