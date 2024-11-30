import { Box, Divider, Show, Text } from "@chakra-ui/react";
import customer from "../../entities/customer";
import ItemsGrid from "../Items/ItemsGrid";
import resizeWindow from "../../services/resizeWindow";

interface Props {
  customer: customer;
}

const CustomerItemIDrawerBody = ({ customer }: Props) => {
  const { width } = resizeWindow();
  return (
    <Box>
      <Divider borderColor={"black"} />
      <Show below="md">
        <Box
          textAlign={"center"}
          borderRadius={5}
          borderWidth={1}
          borderColor={"black"}
          p={2}
          m={4}
        >
          <Text pb={2}>
            <strong>الرقم </strong>: {customer.phonenumber}
          </Text>
          <Text pt={2}>
            <strong>المنطقة </strong>: {customer.address}
          </Text>
        </Box>
      </Show>
      <ItemsGrid
        customerId={customer.id}
        height={490}
        width={
          width >= 992
            ? 620
            : width >= 768
            ? 460
            : width >= 478
            ? 409
            : width / 1.1
        }
      />
    </Box>
  );
};

export default CustomerItemIDrawerBody;
