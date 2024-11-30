import { Select } from "@chakra-ui/react";
export const categories = [
  { arName: "غرف نوم ", enName: "bedrooms" },
  { arName: "طقوم مغلف", enName: "moghalaf" },
  { arName: "مجالس عربي خليجي", enName: "Khaliji" },
  { arName: "بواب عربي", enName: "arabianDoors" },
  { arName: "مطابخ", enName: "kitchens" },
  { arName: "ديكورات", enName: "decorations" },
  { arName: "طاولات سفرة", enName: "dinningTables" },
  { arName: "مكتبيات", enName: "desks" },
  { arName: "فرشات", enName: "Mattresses" },
  { arName: "مفردات", enName: "singles" },
];
interface Props {
  selectIndex?: (index: number) => void;
}
const GategoriesSelector = ({ selectIndex }: Props) => {
  return (
    <Select
      variant="flushed"
      paddingX={2}
      sx={{
        direction: "ltr",
        textAlign: "right",
      }}
      placeholder="جميع السلع"
      width={{ sm: 300 }}
      colorScheme="red"
      onChange={(e) => {
        console.log("hiiii");
        if (selectIndex) selectIndex(Number(e.target.value) + 1);
      }}
    >
      {categories.map((value, index) => (
        <option value={index}>{value.arName}</option>
      ))}
    </Select>
  );
};

export default GategoriesSelector;
