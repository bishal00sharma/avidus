import React, { useState } from "react";
import {
  Box,
  Button,
  useToast,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CreateProperty = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const initialState = {
    title: "",
    type: "",
    room_type: "",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e7da1f36-922f-4631-a287-91ceda05970f.jpeg?im_w=1200",
    description: "",
    location: "",
    price: "",
    rooms: "",
  };

  const [formstate, setFormstate] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;
    if (name == "property_price") {
      setFormstate({
        ...formstate,
        [name]: Number(val),
      });
    } else {
      setFormstate({
        ...formstate,
        [name]: val,
      });
    }
  };
  console.log(formstate);

  async function create() {
    let title = formstate.title;
    let description = formstate.description;
    let seller = localStorage.getItem("userId");
    let location = formstate.location;
    let price = formstate.price;
    let img = formstate.img;
    let role = "merchant";

    if (title == "" || description == "" || location == "" || price == "") {
      toast({
        title: "Enter all details",
        description: "You need to enter your all input values.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      await fetch("http://localhost:8080/property/create", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          seller,
          location,
          price,
          img,
          role,
        }),
        headers: {
          "Content-Type": `application/json`,
        },
      });
      toast({
        title: "Property created.",
        description: "We've created a property in Listings page.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setFormstate(initialState);
    }
  }
  function backButton() {
    navigate("/rooms");
  }

  return (
    <Box
      w="80%"
      m="auto"
      mb="30px"
      boxShadow="lg"
      p="6"
      rounded="md"
      bg="white"
      mt="30px"
    >
      <Button
        leftIcon={<MdOutlineArrowBack />}
        colorScheme="pink"
        variant="solid"
        onClick={backButton}
      >
        Back
      </Button>
      <VStack spacing={10} align="stretch">
        <Heading textAlign="center" color="teal">
          List new Property
        </Heading>
        <hr />
        <Stack direction={["column", "column", "row"]} spacing="120px">
          <Box w={["100%", "90%", "50%"]} m="auto" textAlign="center">
            <VStack spacing={10} align="stretch">
              <Input
                type="url"
                placeholder="img"
                borderBottom="2px solid orange"
                value={formstate.img}
                onChange={handleChange}
                name="img"
              />
              <Input
                type="text"
                placeholder="Title"
                borderBottom="2px solid orange"
                value={formstate.title}
                onChange={handleChange}
                name="title"
              />

              <Select
                placeholder="Select type"
                name="type"
                value={formstate.type}
                onChange={handleChange}
                borderBottom="2px solid orange"
              >
                <option value="Single">Single</option>
                <option value="Double">Double</option>
              </Select>

              <Select
                placeholder="Select AC/Non-AC"
                name="room_type"
                value={formstate.room_type}
                onChange={handleChange}
                borderBottom="2px solid orange"
              >
                <option value="AC">AC</option>
                <option value="NonAC">Non AC</option>
              </Select>
              <Input
                type="text"
                placeholder="Description"
                borderBottom="2px solid orange"
                value={formstate.description}
                onChange={handleChange}
                name="description"
              />
              <Input
                type="text"
                placeholder="Location"
                borderBottom="2px solid orange"
                value={formstate.location}
                onChange={handleChange}
                name="location"
              />

              <Input
                type="number"
                placeholder="Price"
                borderBottom="2px solid orange"
                value={formstate.price}
                onChange={handleChange}
                name="price"
              />

              <Input
                type="number"
                placeholder="Rooms"
                borderBottom="2px solid orange"
                value={formstate.rooms}
                onChange={handleChange}
                name="rooms"
              />
            </VStack>
          </Box>
        </Stack>

        <Box m="auto" textAlign="center">
          <Button w="100%" colorScheme="twitter" onClick={create}>
            {" "}
            Create{" "}
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default CreateProperty;

//       <TableContainer>
//   <Table size='sm' mt="130px">
//     <Thead>
//       <Tr>
//         <Th>Title</Th>
//         <Th>Type</Th>
//         <Th>Description</Th>
//         <Th>Location</Th>
//         <Th>Price</Th>
//         <Th>Pic</Th>
//       </Tr>
//     </Thead>
//     <Tbody>

//         <Tr>
//           <Td>Property Title</Td>
//           <Td>Property Type</Td>
//           <Td>Property Description</Td>
//           <Td>Property Location</Td>
//           <Td>Property Price</Td>
//           <Td>Property Pic</Td>
//           <Td><Button colorScheme="teal">Edit</Button></Td>
//           <Td><Button  colorScheme="red">Delete</Button></Td>
//         </Tr>

//     </Tbody>
//   </Table>
// </TableContainer>

//       <br />
//       {/* <Text textAlign="center">Already have an account?  <Link href="login">Login</Link></Text> */}
//     </Box>
//   );
// }
