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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";
import "./Book.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import axios from "axios";

const Book = ({ img, title, location, price, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const toast = useToast();
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);

  async function getData() {
    let dataa = await fetch(`https://gray-amused-lemur.cyclic.app/property/${id}`);
    let res = await dataa.json();
    setData(res[0].bookingDate);
  }
  // console.log(data);

  async function reserve() {
    let startDate = format(dates[0].startDate, "MM/dd/yyyy");
    let endDate = format(dates[0].endDate, "MM/dd/yyyy");
    // console.log(startDate, endDate);

    let availabilty = checkAvailability(data, startDate, endDate);

    if (availabilty) {
      let response = await fetch(`https://gray-amused-lemur.cyclic.app/property/${id}`, {
        body: JSON.stringify({ startDate, endDate }),
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast({
        title: "Booked.",
        description: "We've booked hotel for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Already Booked",
        description: "Choose other dates to book hotel.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

    getData();
  }

  function checkAvailability(data, startDate, endDate) {
    let [currentStartMonth, currentStartDay, currentStartYear] =
      startDate.split("/");
    let [currentEndMonth, currentEndDay, currentEndYear] = endDate.split("/");

    for (let i = 0; i < data.length; i++) {
      let start = data[i].startDate;
      let end = data[i].endDate;

      let [startMonth, startDay, startYear] = start.split("/");
      let [endMonth, endDay, endYear] = end.split("/");

      // console.log("currentStartMonth",currentStartMonth);
      // console.log("currentEndMonth", currentEndMonth);
      // console.log("startMonth", startMonth);
      // console.log("endMonth", endMonth);

      if (
        currentStartYear == startYear ||
        currentEndYear == endYear ||
        currentEndYear == startYear ||
        currentStartYear == endYear
      ) {
        if (
          currentStartMonth == startMonth ||
          currentEndMonth == endMonth ||
          currentEndMonth == startMonth ||
          currentStartMonth == endMonth
        ) {
          if (
            currentStartDay == startDay ||
            currentEndDay == endDay ||
            currentEndDay == startDay ||
            currentStartDay == endDay
          ) {
            return false;
          }
        }
      }
    }
    return true;
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Button w="100%" onClick={onOpen} my="2" colorScheme="whatsapp">
        Reserve Now!
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="teal">Book Hotel</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="fill"
                maxW={{ base: "100%", sm: "200px" }}
                src={img}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md" color="red.400">
                    {title}
                  </Heading>

                  <Text py="2" color="teal">
                    {location}
                  </Text>
                  <Flex>
                    <Text fontSize="17">Price: </Text>
                    <Text fontSize="18" ml="3" fontWeight="600" color="orange">
                      {price}
                    </Text>
                  </Flex>
                  <Flex>
                    <Text fontSize="17">Location: </Text>
                    <Text fontSize="17" ml="1" fontWeight="600" color="orange">
                      {location}
                    </Text>
                  </Flex>
                  {/* <Text mt="3" fontSize="18" fontWeight="600" color="gray">{challenge}</Text> */}
                </CardBody>
              </Stack>
            </Card>

            <Box className="headerSearch">
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
            <Button colorScheme="green" mr={3} onClick={() => reserve()}>
              Reserve
            </Button>

            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Book;
