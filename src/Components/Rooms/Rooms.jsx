import React from "react";
import { useContext, useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { IoIosCreate } from "react-icons/io";
import Date from "./RoomHeader";
import RoomHeader from "./RoomHeader";
import Book from "./Book";

const Rooms = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  async function getData() {
    let dataa = await fetch(`https://gray-amused-lemur.cyclic.app/property`);
    let res = await dataa.json();
    setData(res);
  }

  async function getLocationData(value) {
    let dataa = await fetch(`https://gray-amused-lemur.cyclic.app/location/${value}`);
    let res = await dataa.json();
    setData(res);
  }

  // console.log(data);

  function createRoom() {
    let role = localStorage.getItem("role");
    if (role == "merchant") {
      navigate("/createProperty");
    } else {
      toast({
        title: "SignUp as a Merchant",
        description: "You need to become merchant to craete a room.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  const handleClick = (value) => {
    //  take the parameter passed from the Child component
    setLocation(value);
    if (value == "") {
      getData();
    } else {
      getLocationData(value);
    }

   
  };

  function homePage() {
    navigate("/");
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box backgroundColor="rgb(20,20,20)">
        <Flex>
          <Image
            src="hotelgo.png"
            width="5%"
            height="5%"
            marginLeft="15px"
            onClick={homePage}
            cursor="pointer"
          />
          <Button
            marginTop="10px"
            marginLeft="80%"
            marginBottom="20px"
            onClick={createRoom}
            leftIcon={<IoIosCreate />}
            colorScheme="teal"
            variant="solid"
          >
            Create a Room
          </Button>
        </Flex>
        <Box paddingBottom="30px">
          <RoomHeader handleClick={handleClick} />
        </Box>
      </Box>

      <div className={styles.mainTopBoxProperties}>
        <div className={styles.mainBoxPropertyRoom}>
          {data.map((item) => (
            <div key={item.id} className={styles.mainBoxPropertyRoomBox}>
              <div>
                <img src={item.img} alt="product_page" />
                <div className={styles.mainBoxPropertyRoomInsideBox}>
                  <p className={styles.mainBoxPropertyRoomTitle}>
                    {item.title}
                  </p>
                  <Flex>
                    <Text mt="5px" mr="2px">
                      {" "}
                      <ImLocation />
                    </Text>
                    <Text>{item.location}</Text>
                  </Flex>

                  <div className={styles.mainBoxPropertyRoomPriceBox}>
                    <p>₹ {item.price}</p>
                  </div>
                  <p> {item.description}</p>
                </div>

                <Book
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  location={item.location}
                  id={item._id}
                />
                <Tooltip hasArrow label="Know more" bg="red.600">
                  <Text className={styles.showMore}>
                    {" "}
                    <Link to={`#`}>Show more Details</Link>{" "}
                  </Text>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
