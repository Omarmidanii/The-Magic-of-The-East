import { Box, Divider, Show, Text } from "@chakra-ui/react";
import customer from "../../entities/customer";
import ImageSlider from "../ImageSlider";

interface Props{
    customer : customer;
}


const CustomerItemIDrawerBody = ({customer} : Props) => {
  const images = [
    "https://via.placeholder.com/800x200?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];
  return (
   <Box >
    <Divider borderColor={"black"} />
    <Show below="md">
    <Box textAlign={'center'} borderRadius={5} borderWidth={1} borderColor={'black'} p={2} m={4}>
        <Text pb={2}><strong>الرقم </strong>: {customer.phone}</Text>
        <Text pt={2}><strong>المنطقة </strong>: {customer.address}</Text>
    </Box>
    </Show>
    <ImageSlider images={images} ></ImageSlider>
   </Box>
  )
}

export default CustomerItemIDrawerBody