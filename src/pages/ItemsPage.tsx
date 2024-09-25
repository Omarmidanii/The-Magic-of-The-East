import ItemsFilter from "../components/Items/ItemsFilter";
import ItemsGrid from "../components/Items/ItemsGrid";
import resizeWindow from "../services/resizeWindow";

const ItemsPage = () => {
  const { width, height } = resizeWindow();
  return (
    <div style={{overflowY:'auto'}}>
      <ItemsFilter/>
      <ItemsGrid width={width} height={height / 1.1} />
    </div>
  );
};

export default ItemsPage;
