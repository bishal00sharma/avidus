// import React, { useEffect, useState } from "react";

// import {
//   Box,
//   Button,
//   useToast,
//   Heading,
//   Input,
//   Select,
//   Stack,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import {
//     Table,
//     Thead,
//     Tbody,
//     Tfoot,
//     Tr,
//     Th,
//     Td,
//     TableCaption,
//     TableContainer,
//   } from '@chakra-ui/react'





// export default function Home() {
//   const initialState = {
//     property_title: "",
//     property_type: "",
//     room_type: "",
//     property_pic:
//       "https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e7da1f36-922f-4631-a287-91ceda05970f.jpeg?im_w=1200",
//     property_description: "",
//     property_location: "",
//     property_price: "",
//     property_rooms: "",
//   };

//   const [formstate, setFormstate] = useState(initialState);
//   const toast = useToast();
 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const val = value;
//     if(name=="property_price"){
//         setFormstate({
//             ...formstate,
//             [name]: Number(val),
//           });
//     }
//     else{
//         setFormstate({
//             ...formstate,
//             [name]: val,
//           });
//     }

  
//   };
//   console.log(formstate)



//   return (
//     <Box
//       w="80%"
//       m="auto"
//       mb="30px"
//       boxShadow="lg"
//       p="6"
//       rounded="md"
//       bg="white"
//       mt="30px"
//     >
//       <VStack spacing={10} align="stretch">
//         <Heading textAlign="center" color="teal">
//           List new Property
//         </Heading>
//         <hr />
//         <Stack direction={["column", "column", "row"]} spacing="120px">
//           <Box w={["100%", "90%", "50%"]} m="auto" textAlign="center">
//             <VStack spacing={10} align="stretch">
//               <Input
//                 type="url"
//                 placeholder="img"
//                 borderBottom="2px solid orange"
//                 value={formstate.property_pic}
//                 onChange={handleChange}
//                 name="property_pic"
//               />
//               <Input
//                 type="text"
//                 placeholder="Title"
//                 borderBottom="2px solid orange"
//                 value={formstate.property_title}
//                 onChange={handleChange}
//                 name="property_title"
//               />

//               <Select
//                 placeholder="Select type"
//                 name="property_type"
//                 value={formstate.property_type}
//                 onChange={handleChange}
//                 borderBottom="2px solid orange"
//               >
//                 <option value="Single">Single</option>
//                 <option value="Double">Double</option>
//               </Select>

//               <Select
//                 placeholder="Select AC/Non-AC"
//                 name="room_type"
//                 value={formstate.room_type}
//                 onChange={handleChange}
//                 borderBottom="2px solid orange"
//               >
//                 <option value="AC">AC</option>
//                 <option value="NonAC">Non AC</option>
//               </Select>
//               <Input
//                 type="text"
//                 placeholder="Description"
//                 borderBottom="2px solid orange"
//                 value={formstate.property_description}
//                 onChange={handleChange}
//                 name="property_description"
//               />
//                <Input
//                 type="text"
//                 placeholder="Location"
//                 borderBottom="2px solid orange"
//                 value={formstate.property_location}
//                 onChange={handleChange}
//                 name="property_location"
//               />

//               <Input
//                 type="number"
//                 placeholder="Price"
//                 borderBottom="2px solid orange"
//                 value={formstate.property_price}
//                 onChange={handleChange}
//                 name="property_price"
//               />

//                <Input
//                 type="number"
//                 placeholder="Rooms"
//                 borderBottom="2px solid orange"
//                 value={formstate.property_rooms}
//                 onChange={handleChange}
//                 name="property_rooms"
//               />
//             </VStack>
//           </Box>
//         </Stack>

//         <Box m="auto" textAlign="center">
//           <Button w="35%" colorScheme="twitter" >
//             {" "}
//             Post{" "}
//           </Button>
//         </Box>
//       </VStack>

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
import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from "react-router-dom";
import "./Home.css"
import MainBox from '../Navbar/MainBox';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <MainBox />
        <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at ₹999"
        >
          <Link to="/" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Footer />
    </div>
  )
}

export default Home