import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import OrdersRow from "components/Tables/OrdersRow";

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Soya Porridge Flour",
    email: "Mukisa Dan",
    subdomain: "2 bags",
    domain: "UGX 6000",
    status: "In Progress",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Sorted Rice",
    email: "Stuart Dambi",
    subdomain: "4 bags",
    domain: "UGX 12000",
    status: "In Progress",
    date: "12/05/21",
  },
  {
    logo: avatar3,
    name: "Groundnuts",
    email: "Sorted Cerial",
    subdomain: "1kg on Stock",
    domain: "UGX 7000",
    status: "Completed",
    date: "07/06/21",
  },
];

const Orders = () => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader
          p="6px 0px 22px 0px"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Shari's Grocery Orders
          </Text>
          <Button color="white" backgroundColor="green.600">
            Create Order
          </Button>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Product
                </Th>
                <Th color="gray.400">Total Price</Th>
                <Th color="gray.400">Status</Th>
                <Th color="gray.400">Date Ordered</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row) => {
                return (
                  <OrdersRow
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    subdomain={row.subdomain}
                    domain={row.domain}
                    status={row.status}
                    date={row.date}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Orders;
