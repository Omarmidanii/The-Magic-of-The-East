import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { RED } from "../../constants";

interface Props {
  name: string;
  max:number;
}
const ItemsSizesFilter = ({ name , max}: Props) => {
  const [sliderValue, setSliderValue] = useState([100, max]);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Box pl={8}>
      {name}
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[100, 400]}
        min={0}
        m={5}
        max={max}
        colorScheme="red"
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <RangeSliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
          100
        </RangeSliderMark>
        <RangeSliderMark value={200} mt="1" ml="-2.5" fontSize="sm">
          200
        </RangeSliderMark>
        {max>=300 && <RangeSliderMark value={300} mt="1" ml="-2.5" fontSize="sm">
          300
        </RangeSliderMark>}
        {max>=400 && <RangeSliderMark value={400} mt="1" ml="-2.5" fontSize="sm">
          400
        </RangeSliderMark>}
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <Tooltip
          bg={RED}
          borderRadius={15}
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue[0]}%`}
        >
          <RangeSliderThumb index={0} />
        </Tooltip>
        <Tooltip
          bg={RED}
          borderRadius={15}
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue[1]}%`}
        >
          <RangeSliderThumb index={1} />
        </Tooltip>
      </RangeSlider>
    </Box>
  );
};

export default ItemsSizesFilter;
