import GategorySlider from "../components/Items/GategorySlider";
import { items } from "../components/Items/ItemsGrid";

const GategoryPage = () => {
  return (
    <div>
      <GategorySlider items={items} />
    </div>
  );
};

export default GategoryPage;
