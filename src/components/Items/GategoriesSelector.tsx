import { Select } from "@chakra-ui/react";
export const categories = [
  "غرف نوم ",
  "طقوم مغلف",
  "مجالس عربي خليجي",
  "بواب عربي",
  "مطابخ",
  "ديكورات",
  "طاولات سفرة",
  "مكتبيات",
  "فرشات",
];

const GategoriesSelector = () => {
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
    >
      {categories.map((value, index) => (
        <option value={index}>{value}</option>
      ))}
    </Select>
  );
};

export default GategoriesSelector;
