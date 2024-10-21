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
import { HiOutlinePhotograph } from "react-icons/hi";
import useGroupImagesStore from "../../stores/GroupImagesStore";
import ItemsColorFilter from "./itemsColorFilter";
import { colors } from "./ItemsFilter";
import SizesTable from "./SizesTable";
import useGroupItemsStore from "../../stores/GroupitemsStore";
import { useRef } from "react";

const GroupForm = () => {
  const { setImages, images } = useGroupImagesStore();
  const { items, setItems } = useGroupItemsStore();

  //refs
  const refH = useRef<HTMLInputElement>(null);
  const refW = useRef<HTMLInputElement>(null);
  const refD = useRef<HTMLInputElement>(null);
  const refName = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Stack>
        {images?.map((img, index) => (
          <HStack key={index}>
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
        placeholder="ادخل وصف المجموعة هنا!"
        fontFamily={"Noto"}
      />
      <ItemsColorFilter colors={colors} filter={false} />

      <Text fontSize={16} mt={20} mb={4}>
        + ادخل قطعة جديدة:
        <Input mt={3} placeholder="الاسم" ref={refName} />
      </Text>

      <HStack>
        <Input placeholder="الطول" ref={refH} type="number" />
        <Input placeholder="العرض" ref={refW} type="number" />
        <Input placeholder="العمق" ref={refD} type="number" />
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
      <SizesTable items={items} />
    </div>
  );
};

export default GroupForm;
