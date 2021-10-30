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
  // Drawer,
  // DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ProductsRow from "components/Tables/ProductsRow";
// import ProductDetailsDrawer from "components/Dialogs/ProductDetails";
import DetailsModal from "components/Modal/DetailsModal";
import { getProducts } from "store/actions/productActions";

const Products = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const { products, loading, productsMessage } = useSelector(
    (store) => store.shop
  );
  const token = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getProducts(token || ""));
  }, [dispatch]);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      {/* <ProductDetailsDrawer isOpen={isOpen} onClose={onClose} /> */}
      <DetailsModal isOpen={isOpen} onClose={onClose} />
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader
          p="6px 0px 22px 0px"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Shari's Grocery Products
          </Text>
          <Button color="white" onClick={onOpen} backgroundColor="green.600">
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
