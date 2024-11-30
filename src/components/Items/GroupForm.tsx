import {
  Button,
  Divider,
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
import SizesTable from "./SizesTable";
import useGroupItemsStore from "../../stores/GroupitemsStore";
import { useEffect, useRef, useState } from "react";
import Group from "../../entities/group";
import useErrorStore from "../../stores/errorStore";
import useFetchGroupDetails from "../../hooks/useFetchGroupDetails";
import useCreateGroup from "../../hooks/useCreateGroup";
import GategoriesSelector from "./GategoriesSelector";
import useGroupcolorsStore from "../../stores/GroupColorsStore";
import useUpdateGroup from "../../hooks/useUpdateGroup";

interface Props {
  groupId?: number | undefined;
  onSuccess?: () => void;
}

const GroupForm = ({ groupId = undefined, onSuccess = () => {} }: Props) => {
  const group = groupId
    ? useFetchGroupDetails(groupId).data?.data
    : {
        name: "",
        description: "",
        classification_id: NaN,
        photos: [],
        colors: [],
        items: [],
      };

  const { setImages, images, removeImage } = useGroupImagesStore();
  const { items, setItems } = useGroupItemsStore();
  const { colors } = useGroupcolorsStore();
  const [prevGroup, setPrevGroup] = useState<Group>(
    group
      ? group
      : {
          name: "",
          description: "",
          classification_id: NaN,
          photos: [],
          colors: [],
          items: [],
        }
  );

  // const groupcolors = useGroupcolorsStore();
  // if (group.isSuccess) groupcolors.setColors(prevGroup?.colors || []);

  //refs
  const refH = useRef<HTMLInputElement>(null);
  const refW = useRef<HTMLInputElement>(null);
  const refD = useRef<HTMLInputElement>(null);
  const refName = useRef<HTMLInputElement>(null);

  const { message } = useErrorStore();

  const create = useCreateGroup();
  const edit = useUpdateGroup(groupId || 0);

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = e.target.value;
    setPrevGroup((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        description: newDescription,
      };
    });
  };

  const handlenameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setPrevGroup((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        name: newName,
      };
    });
  };

  const currentPathname = window.location.pathname;

  const onSubmit = () => {
    const data = new FormData();
    images?.forEach((image) => {
      data.append(`images[]`, image);
    });

    prevGroup.photos?.forEach((image) => {
      data.append(`old_images[]`, image.id.toString());
    });

    data.append("name", prevGroup?.name);
    data.append("net_price", "2155161");
    data.append("description", prevGroup?.description);
    colors?.forEach((color) => {
      data.append(`colors[]`, color.toString());
    });

    data.append(
      "classification_id",
      prevGroup?.classification_id?.toString() || "1"
    );

    data.append("workshop_id", "1");

    items?.forEach((item, index) => {
      if (item.id) data.append(`items[${index}][id]`, item.id.toString());
      data.append(`items[${index}][name]`, item.name);
      data.append(`items[${index}][height]`, item.sizes["height"].toString());
      data.append(`items[${index}][width]`, item.sizes["width"].toString());
      data.append(`items[${index}][depth]`, item.sizes["depth"].toString());
    });
    console.log(data);
    currentPathname == "/dash/categories"
      ? create.mutate(data)
      : edit.mutate(data);
  };

  const showAlert = (type: "suc" | "err") => {
    swal({
      title:
        (currentPathname == "/dash/categories" ? "اضافة" : "تعديل") +
        prevGroup.name,
      text:
        type == "suc"
          ? " تمت " +
            (currentPathname == "/dash/categories" ? "اضافة" : "تعديل") +
            "المجموعة بنجاح!"
          : (message?.name && message?.name[0]) ||
            (message?.description && message?.description[0]) ||
            (message?.classification_id && message?.classification_id[0]) ||
            (message?.photos && message?.photos[0]) ||
            (message?.colors && message?.colors[0]) ||
            (message?.items && message?.items[0]) ||
            "حدث خطأ اثناء " +
              (currentPathname == "/dash/categories" ? "اضافة" : "تعديل") +
              " الموظف الرجاء المحاولة لاحقا",
      icon: type == "suc" ? "success" : "error",
    });
  };

  useEffect(() => {
    if (create.isSuccess || edit.isSuccess) {
      setImages([]);
      onSuccess();
      showAlert("suc");
    }
    if (create.error || edit.error) {
      showAlert("err");
    }
  }, [create.isSuccess, create.error, edit.error, edit.isSuccess]);

  return (
    <div>
      {create.isError ? <Text color={"red"}>{message?.images}</Text> : ""}
      {currentPathname == "/dash/categories" && (
        <>
          <HStack mb={5} spacing={10}>
            <Input
              value={prevGroup?.name}
              onChange={handlenameChange}
              placeholder="ادخل اسم المجموعة هنا!"
              fontFamily={"Noto"}
              fontSize={18}
            />
            <GategoriesSelector
              selectIndex={(ind) => {
                setPrevGroup((prev) => {
                  if (!prev) return prev;
                  return {
                    ...prev,
                    classification_id: ind,
                  };
                });
              }}
            />
          </HStack>

          <Divider mb={8} />
        </>
      )}
      <Stack>
        {prevGroup?.photos?.map((img, index) => (
          <HStack key={index}>
            <Icon
              as={RxCross2}
              borderRadius={20}
              p={1}
              boxSize={6}
              _hover={{ bgColor: "red.600", color: "white" }}
              cursor="pointer"
              onClick={() => {
                setPrevGroup((prev) => {
                  if (!prev) return prev;
                  return {
                    ...prev,
                    photos: prev.photos.filter((image) => img !== image),
                  };
                });
              }}
            />
            <Image borderRadius={10} boxSize={10} src={img.path} />
            <Text>
              {img.path.substring(42, 86)}
              {img.path.length > 86 ? "..." : ""}
            </Text>
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
                setImages([e.target.files[0]]);
              }
            }}
            border="hidden"
            display="none"
          />
        </InputGroup>
      </Button>
      <Textarea
        mb={8}
        value={prevGroup?.description}
        onChange={handleDescriptionChange}
        placeholder="ادخل وصف المجموعة هنا!"
        fontFamily={"Noto"}
      />
      <ItemsColorFilter filter={false} />

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
          setItems([
            ...(items || []),
            {
              name: refName.current?.value || "",
              sizes: {
                height: Number(refH.current?.value) || 0,
                width: Number(refW.current?.value) || 0,
                depth: Number(refD.current?.value) || 0,
              },
            },
          ])
        }
      >
        إضافة
      </Button>
      <SizesTable newItem={true} />
      <Button onClick={onSubmit}>Create</Button>
    </div>
  );
};

export default GroupForm;
