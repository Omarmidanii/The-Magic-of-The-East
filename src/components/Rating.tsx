import { HStack, Icon } from "@chakra-ui/react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

interface Props {
  rate: number;
}

const Rating = ({ rate }: Props) => {
  return (
    <HStack mb={-3} mt={4}>
      {[...Array(5)].map((_, index) =>
        rate /*.data?.percentage_rating || 0*/ - (index + 1) * 20 > 0 ? (
          <Icon key={index} boxSize={4} color={"yellow.300"} as={FaStar} />
        ) : rate /*.data?.percentage_rating || 0*/ - (index + 1) * 20 + 10 >
          0 ? (
          <Icon
            key={index}
            boxSize={4}
            color={"yellow.300"}
            as={FaRegStarHalfStroke}
          />
        ) : (
          <Icon key={index} boxSize={4} color={"yellow.300"} as={FaRegStar} />
        )
      )}
    </HStack>
  );
};

export default Rating;
