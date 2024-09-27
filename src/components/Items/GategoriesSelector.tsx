import { Select } from "@chakra-ui/react";

const GategoriesSelector = () => {
  return (
    <Select variant='flushed' paddingX={2} placeholder="جميع السلع" width={{sm:300}} colorScheme="red">
      <option value="option1">غرف نوم</option>
      <option value="option2">طقوم مغلف</option>
      <option value="option3">مجالس عربي خليجي</option>
      <option value="option4">مطابخ</option>
      <option value="option5">بواب عربي</option>
      <option value="option6">ديكورات</option>
      <option value="option7">فرشات</option>
      <option value="option8">مكتبيات</option>
      <option value="option9">طاولات سفرة</option>
    </Select>
  );
};

export default GategoriesSelector;
