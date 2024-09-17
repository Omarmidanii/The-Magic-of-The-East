import {
    Box,
    IconButton,
    Input
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RED } from "../constants";
const MotionBox = motion(Box);
interface Search {
  text: string;
}
export const SearchInput = () => {
  const handleSearch = (vlaues: Search) => {
    console.log(vlaues.text);
  };
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Box display="flex" alignItems="center">
      <IconButton
        icon={<BsSearch color="white"/>}
        onClick={() => setShowSearch(!showSearch)}
        aria-label="Search"
        bg={RED}
      />
      <MotionBox
        initial={{ width: 0 }}
        animate={{ width: showSearch ? "200px" : "0px" }}
        overflow="hidden"
        transition={{ duration: 0.5 }}
        mr={1}
      >
        {showSearch && 
        <Input
        onChange={(e) => {e.stopPropagation();handleSearch({text : e.target.value})}} 
        placeholder="ابحث..." 
        autoFocus 
        borderRadius={20}
        />}
      </MotionBox>
    </Box>
  );
};
