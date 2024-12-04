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
import customer from "../../../entities/customer";
import useFetchAllCustomers from "../../../hooks/useFetchAllCustomers";
import { Error } from "../../Error";
import useAddBillStore from "../../../stores/AddBillStore";

const CustomerSelector = () => {
  const { setCustomer, customer } = useAddBillStore();

  // to open the list and close it
  const [isOpen, setIsOpen] = useState(false);

  // for search
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectCustomer = (customer: customer) => {
    setCustomer(customer);
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer(undefined);
    setSearchQuery(e.target.value);
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useFetchAllCustomers("?filter[name]=" + searchQuery);

  const fetchedBranchesCount =
    data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

  if (error) return <Error message={error.message} />;

  return (
    <Box>
      <Input
        placeholder={
          customer
            ? `${customer.firstname} ${customer.lastname}`
            : "اختر الزبون"
        }
        value={
          customer ? `${customer.firstname} ${customer.lastname}` : searchQuery
        }
        onChange={handleSearchChange}
        onClick={toggleList}
      />
      <Collapse in={isOpen} animateOpacity>
        {isLoading && <Spinner pr={2} />}
        <List maxH={"200px"} overflowY={"auto"} id="scroolableList">
          <InfiniteScroll
            dataLength={fetchedBranchesCount}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Spinner />}
            scrollableTarget="scroolableList"
          >
            {data?.pages.map((page) =>
              page.data.map((customer) => (
                <ListItem
                  key={customer.id}
                  onClick={() => {
                    handleSelectCustomer(customer);
                    toggleList();
                  }}
                  _hover={{
                    bgColor: "gray.200",
                    cursor: "pointer",
                  }}
                  borderBottom={"2px"}
                  pr={2}
                >
                  {`${customer.firstname} ${customer.lastname}`}
                </ListItem>
              ))
            )}
          </InfiniteScroll>
        </List>
      </Collapse>
    </Box>
  );
};

export default CustomerSelector;
