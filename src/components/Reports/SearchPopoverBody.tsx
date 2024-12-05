import { Button, HStack, Image, Input, Select, Text } from "@chakra-ui/react";
import { customers } from "../Customer/CustomerTable";
import useBillGroupStore from "../../stores/BillGroupStore";
import { Link } from "react-router-dom";
import noImage from "../../assets/noImage.jpeg";

const SearchPopoverBody = () => {
  const { resetGroups, setPickone, pickOne, groups } = useBillGroupStore();

  return (
    <>
      <HStack mb={8} mt={1}>
        <Text>حسب رقم الفاتورة:</Text>
        <Input
          variant="flushed"
          w={"40%"}
          mr={2}
          mb={-2}
          placeholder=" # "
          type="number"
        />
      </HStack>
      <Text mb={3}>حسب المشتري:</Text>
      <Select
        sx={{
          direction: "ltr",
          textAlign: "right",
        }}
        placeholder="اختر زبون"
        color={"gray.500"}
      >
        {customers.map((value, index) => (
          <option value={index} key={index}>
            {value.firstname + " " + value.lastname}
          </option>
        ))}
      </Select>
      <Text mt={8} mb={3}>
        حسب التاريخ:
      </Text>
      <HStack spacing={4}>
        <Text fontSize={13} w={"47%"} color={"gray.600"}>
          من :
          <Input mt={1} type="date" />
        </Text>
        <Text fontSize={13} w={"47%"} color={"gray.600"}>
          إلى :
          <Input mt={1} type="date" />
        </Text>
      </HStack>
      <Text mt={12} mb={3}>
        حسب المجموعة:
        <Link
          to={"/chooseGroup"}
          onClick={() => {
            resetGroups();
            setPickone(true);
            console.log(pickOne);
          }}
        >
          <Button fontSize={14} mb={-1} mr={5}>
            تصفح المجموعات
          </Button>
        </Link>
        {groups?.length ? (
          <HStack mt={5}>
            <Image
              borderRadius={10}
              boxSize={8}
              src={
                groups[0].group.photos[0] ? groups[0].group.photos[0] : noImage
              }
            />
            <Text>{groups[0].group.name}</Text>
          </HStack>
        ) : (
          ""
        )}
      </Text>
    </>
  );
};

export default SearchPopoverBody;
