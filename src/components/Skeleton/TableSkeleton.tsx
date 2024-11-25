import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

export const TableSkeleton = () => {
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <Box m={4}>
      <Skeleton
        startColor="blue.50"
        endColor="blue.800"
        height={"100px"}
        p={4}
      />
      {skeleton.map((id) => (
        <SkeletonText
          key={id}
          startColor="blue.50"
          endColor="blue.800"
          height={"100px"}
        />
      ))}
    </Box>
  );
};
