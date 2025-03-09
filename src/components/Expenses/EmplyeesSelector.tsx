import {
  Box,
  Collapse,
  Input,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Error } from "../Error";
import employer from "../../entities/employer";
import useFetchEmplyees from "../../hooks/useFetchEmplyees";

interface Props {
  setEmp: (v: number) => void;
}

const EmplyeesSelector = ({ setEmp }: Props) => {
  const [employee, setEmployee] = useState<employer>();

  // to open the list and close it
  const [isOpen, setIsOpen] = useState(false);

  // for search
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectemployee = (employee: employer) => {
    setEmployee(employee);
    setEmp(employee.id || 0);
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee(undefined);
    setSearchQuery(e.target.value);
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useFetchEmplyees("?filter[name]=" + searchQuery);

  const fetchedBranchesCount =
    data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

  if (error) return <Error message={error.message} />;

  return (
    <Box>
      <Input
        placeholder={
          employee
            ? `${employee.firstname} ${employee.lastname}`
            : "اختر الموظف"
        }
        value={
          employee ? `${employee.firstname} ${employee.lastname}` : searchQuery
        }
        onChange={handleSearchChange}
        onClick={toggleList}
      />
      <Collapse in={isOpen} animateOpacity>
        {isLoading && <Spinner pr={2} />}
        <List maxH={"100px"} overflowY={"auto"} id="scroolableList">
          <InfiniteScroll
            dataLength={fetchedBranchesCount}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Spinner />}
            scrollableTarget="scroolableList"
          >
            {data?.pages.map((page) =>
              page.data.map((employee) => (
                <ListItem
                  key={employee.id}
                  onClick={() => {
                    handleSelectemployee(employee);
                    toggleList();
                  }}
                  _hover={{
                    bgColor: "gray.200",
                    cursor: "pointer",
                  }}
                  borderBottom={"2px"}
                  pr={2}
                >
                  {`${employee.firstname} ${employee.lastname}`}
                </ListItem>
              ))
            )}
          </InfiniteScroll>
        </List>
      </Collapse>
    </Box>
  );
};

export default EmplyeesSelector;
