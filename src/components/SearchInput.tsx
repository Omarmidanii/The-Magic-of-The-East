import { Box, IconButton, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RED } from "../constants";
import useSearchStore from "../stores/searchSrote";
const MotionBox = motion(Box);
interface Search {
  text: string;
}

// import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import axios from 'axios';

// const fetchUsers = async (query) => {
//   const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?name_like=${query}`);
//   return data;
// };

// const SearchUsers = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const { data, error, isLoading } = useQuery(['users', searchQuery], () => fetchUsers(searchQuery), {
//     enabled: !!searchQuery, // only run the query if searchQuery is not empty
//   });

//   return (
//     <div>
//       <h2>Search Users</h2>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         placeholder="Search by name..."
//       />
//       {isLoading && <div>Loading...</div>}
//       {error && <div>Error: {error.message}</div>}
//       <ul>
//         {data?.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchUsers;

export const SearchInput = () => {
  const handleSearch = (vlaues: Search) => {
    setSearch(vlaues.text);
    console.log(search ? search : undefined);
  };
  const [showSearch, setShowSearch] = useState(false);

  const { setSearch, search } = useSearchStore();
  return (
    <Box display="flex" alignItems="center">
      <IconButton
        icon={<BsSearch color="white" />}
        onClick={() => {
          showSearch ? setSearch(undefined) : "";
          setShowSearch(!showSearch);
        }}
        aria-label="Search"
        borderRadius={100}
        bg={RED}
      />
      <MotionBox
        initial={{ width: 0 }}
        animate={{ width: showSearch ? "200px" : "0px" }}
        overflow="hidden"
        transition={{ duration: 0.5 }}
        mr={1}
      >
        {showSearch && (
          <Input
            onChange={(e) => {
              e.stopPropagation();
              handleSearch({ text: e.target.value });
            }}
            placeholder="ابحث..."
            autoFocus
            value={search}
            borderRadius={20}
          />
        )}
      </MotionBox>
    </Box>
  );
};
