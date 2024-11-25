import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  message: string;
}
export const Error = ({ message }: Props) => {
  return (
    <Box padding={5}>
      <Heading>Oops</Heading>
      <Text>{message}</Text>
    </Box>
  );
};
