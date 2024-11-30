import { Text } from "@chakra-ui/react";
import CustomerItemsDrawerHeader from "../Customer/CustomerItemsDrawerHeader";
import CustomDrawer from "../Drawer";
import ItemBodysDrawer from "./ItemBodyDrawer";
import useFetchGroupDetails from "../../hooks/useFetchGroupDetails";
import useGroupItemsStore from "../../stores/GroupitemsStore";
import useGroupcolorsStore from "../../stores/GroupColorsStore";
import useGroupImagesStore from "../../stores/GroupImagesStore";

interface Props {
  groupId: number;
  isOpen: boolean;
  onClose: () => void;
  onOpenEdit: () => void;
}

const ItemDrawer = ({ groupId, isOpen, onClose, onOpenEdit }: Props) => {
  const group = useFetchGroupDetails(groupId);
  const currentPathname = window.location.pathname;

  const { setImages} = useGroupImagesStore();
  const { setItems } = useGroupItemsStore();
  const { setColors } = useGroupcolorsStore();

  return (
    <CustomDrawer
      isOpen={isOpen}
      onClose={() => {
        setImages([]);
        setItems([]);
        setColors([]);
        onClose();
      }}
      body={<ItemBodysDrawer group={group.data?.data} />}
      header={
        currentPathname.substring(0, 11) == "/dash/items" ? (
          <CustomerItemsDrawerHeader
            name={"معلومات " + group.data?.data?.name}
            OnOpen={() => {
              setImages([]);
              setItems(group.data?.data?.items || []);
              setColors(group.data?.data?.colors || []);
              onOpenEdit();
              onClose();
            }}
          />
        ) : (
          <Text textColor={"black"} mr={8} fontSize={24}>
            معلومات {group.data?.data?.name}
          </Text>
        )
      }
    />
  );
};

export default ItemDrawer;
