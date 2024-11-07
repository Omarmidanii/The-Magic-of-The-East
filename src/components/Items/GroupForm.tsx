import {
  Button,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlinePhotograph } from "react-icons/hi";
import useGroupImagesStore from "../../stores/GroupImagesStore";
import ItemsColorFilter from "./itemsColorFilter";
import { colors } from "./ItemsFilter";
import SizesTable from "./SizesTable";
import useGroupItemsStore from "../../stores/GroupitemsStore";
import { useRef, useState } from "react";
import Group from "../../entities/group";

interface Props {
  group?: Group | undefined;
}

const GroupForm = ({ group = undefined }: Props) => {
  const { setImages, images, removeImage } = useGroupImagesStore();
  const { items, setItems } = useGroupItemsStore();
  const [prevImages, setPrevImages] = useState(
    group?.images ? [...group.images] : [""]
  );

  //refs
  const refH = useRef<HTMLInputElement>(null);
  const refW = useRef<HTMLInputElement>(null);
  const refD = useRef<HTMLInputElement>(null);
  const refName = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Stack>
        {group?.images?.map((img, index) => (
          <HStack key={index}>
            <Icon
              as={RxCross2}
              borderRadius={20}
              p={1}
              boxSize={6}
              _hover={{ bgColor: "red.600", color: "white" }}
              cursor="pointer"
              onClick={() => {
                prevImages?.filter((image) => img !== image);
              }}
            />
            <Image borderRadius={10} boxSize={10} src={img} />
            <Text>{img}</Text>
          </HStack>
        ))}
        {images?.map((img, index) => (
          <HStack key={index}>
            <Icon
              as={RxCross2}
              borderRadius={20}
              p={1}
              boxSize={6}
              _hover={{ bgColor: "red.600", color: "white" }}
              cursor="pointer"
              onClick={() => removeImage(img.name)}
            />
            <Image
              borderRadius={10}
              boxSize={10}
              src={URL.createObjectURL(img)}
            />
            <Text>{img.name}</Text>
          </HStack>
        ))}
      </Stack>
      <Button
        as="label"
        cursor="pointer"
        marginTop={5}
        marginBottom={10}
        pt={3}
      >
        <Icon
          as={HiOutlinePhotograph}
          color="gray.500"
          marginBottom={3}
          boxSize={5}
        />
        <Text mb={3} mr={2} color={"gray.600"} fontFamily={"Noto"}>
          إضافة صورة
        </Text>
        <InputGroup>
          <Input
            type="file"
            accept="image/*"
            placeholder="speaker"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImages(e.target.files[0]);
              }
            }}
            border="hidden"
            display="none"
          />
        </InputGroup>
      </Button>
      <Textarea
        mb={8}
        value={group?.discription && group?.discription}
        placeholder="ادخل وصف المجموعة هنا!"
        fontFamily={"Noto"}
      />
      <ItemsColorFilter colors={colors} filter={false} />

      <Text fontSize={16} mt={20} mb={4}>
        + ادخل قطعة جديدة:
        <Input mt={3} placeholder="الاسم" fontFamily={"Noto"} ref={refName} />
      </Text>

      <HStack>
        <Input
          placeholder="الطول"
          fontFamily={"Noto"}
          ref={refH}
          type="number"
        />
        <Input
          placeholder="العرض"
          fontFamily={"Noto"}
          ref={refW}
          type="number"
        />
        <Input
          placeholder="العمق"
          fontFamily={"Noto"}
          ref={refD}
          type="number"
        />
      </HStack>
      <Button
        mt={2}
        mb={5}
        onClick={() =>
          setItems({
            name: refName.current?.value || "",
            sizes: {
              الطول: Number(refH.current?.value) || 0,
              العرض: Number(refW.current?.value) || 0,
              العمق: Number(refD.current?.value) || 0,
            },
          })
        }
      >
        إضافة
      </Button>
      <SizesTable items={items} newItem={true} />
    </div>
  );
};

export default GroupForm;
