import { Stack } from "@chakra-ui/react";
import ItemsFilter from "../components/Items/ItemsFilter";
import ItemsGrid from "../components/Items/ItemsGrid";
import resizeWindow from "../services/resizeWindow";
import GategoriesSelector from "../components/Items/GategoriesSelector";

const ItemsPage = () => {
  const { width, height } = resizeWindow();
  return (
    <div style={{ overflowY: "auto" ,overflowX:"hidden"}}>
      <Stack direction={{base:'column', sm:'row'}} spacing={6} marginX={14} mb={{sm:-4}} mt={6} justifyContent={'space-between'} >
        <ItemsFilter />
        <GategoriesSelector />
      </Stack>
      <ItemsGrid width={width} height={height / 1.1} />
    </div>
  );
};

export default ItemsPage;
