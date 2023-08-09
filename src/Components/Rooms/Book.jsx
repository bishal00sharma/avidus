import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Image,
    Flex,
    Text,
    Card,
    Stack,
    CardBody,
    Heading,
    CardFooter,
    Box,
  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdDateRange } from 'react-icons/md';
import "./Book.css"
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import axios from "axios";




const Book = ({ img,title,location,price }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
const [openDate, setOpenDate] = useState(false);

async function reserve(dates){
  let response= await fetch(`http://localhost:8080/property/64d38438b4d88626ad65659d`, {
    body: JSON.stringify(dates[0] ),
    method: "PATCH",
    headers: {
      // token: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });
  
  
}

    return (
      <>
        <Button w="100%" onClick={onOpen} my="2"  colorScheme='whatsapp'>Reserve Now!</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Book Hotel</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                  >
                    <Image objectFit='fill'
                     
                      maxW={{ base: '100%', sm: '200px' }}
                      src={img}
                      alt='Caffe Latte'
                    />

                    <Stack>
                      <CardBody>
                        <Heading size='md' color="red.400">{title}</Heading>

                        <Text py='2' color="teal">
                          {location}
                        </Text>
                       <Flex>
                        <Text fontSize="17">Price: </Text>
                        <Text fontSize="18" ml="3" fontWeight="600" color="orange">{price}</Text>
                       </Flex>
                       <Flex>
                        <Text fontSize="17">Location: </Text>
                        <Text fontSize="17" ml="1" fontWeight="600" color="orange">{location}</Text>
                       </Flex>
                       {/* <Text mt="3" fontSize="18" fontWeight="600" color="gray">{challenge}</Text> */}
                       </CardBody>
                      
                      </Stack>
                    </Card>
                       
                       <Box className='headerSearch'>
                <MdDateRange />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </Box>

                    
            
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' mr={3} onClick={()=>reserve(dates)}>
                Reserve
              </Button>

              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Book;