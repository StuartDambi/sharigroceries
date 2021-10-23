import React, { useState, useEffect, useContext } from "react";
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
import ProductsRow from "components/Tables/ProductsRow";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import { AuthContext } from "context/AuthContext";

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Soya Porridge Flour",
    email: "With milk and oats",
    subdomain: "10 on stock",
    domain: "UGX 3000",
    status: "In Stock",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Sorted Rice",
    email: "Ready to cook",
    subdomain: "30kgs on stock",
    domain: "UGX 5000",
    status: "Out of Stock",
    date: "12/05/21",
  },
  {
    logo: avatar3,
    name: "Groundnuts",
    email: "Sorted Cerial",
    subdomain: "1kg on Stock",
    domain: "UGX 7000",
    status: "In Stock",
    date: "07/06/21",
  },
];

const Products = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const [products, setProducts] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const products = await response.json();
        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [setProducts, token]);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader
          p="6px 0px 22px 0px"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Shari's Grocery Products
          </Text>
          <Button color="white" backgroundColor="green.600">
            Create Product
          </Button>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Product
                </Th>
                <Th color="gray.400">Price</Th>
                <Th color="gray.400">Status</Th>
                <Th color="gray.400">Date Created</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((row) => {
                return (
                  <ProductsRow
                    key={row.id}
                    name={row.name}
                    logo={row.image}
                    email={row.description}
                    subdomain={`${row.stock} on stock`}
                    domain={`UGX ${row.price}`}
                    status={"In Stock"}
                    date={row.createdAt}
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

export default Products;
