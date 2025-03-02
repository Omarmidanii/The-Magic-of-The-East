import { Box, Input, Text } from "@chakra-ui/react";
interface Props {
  setName: (v: string) => void;
  setCost: (v: number) => void;
}
const AddoOtherExpenses = ({ setName, setCost }: Props) => {
  return (
    <div>
      <Box p={5} mt={7}>
        <Text mb={3}>اسم المصروف:</Text>
        <Input
          mb={5}
          placeholder="الاسم"
          onChange={(e) => setName(e.target.value)}
        />
        <Text mb={2}>القيمة:</Text>
        <Input
          placeholder="القيمة"
          type="number"
          onChange={(e) => setCost(Number(e.target.value))}
        />
      </Box>
    </div>
  );
};

export default AddoOtherExpenses;
